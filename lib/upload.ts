export function getFileExtension(file: File) {
    const imgExt =  file.name.split(".").pop()?.toLowerCase()
    return imgExt || "jpg"
}

export default async function uploadImages(files: File[]) {
    if (!files.length) return null

    const groupId = crypto.randomUUID()

    // prepare file metadata
    const prepared = files.map((file) => {
        const imageId = crypto.randomUUID()
        const ext = getFileExtension(file)

        return {
            file,
            imageId,
            ext,
            contentType: file.type,
            size: file.size
        }
    })

    // Request presigned urls
    const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            groupId,
            files: prepared.map(({ imageId, contentType, ext, size }) => (
                {
                    imageId,
                    contentType,
                    ext,
                    size
                }
            ))
        })
    })

    if (!res.ok) {
        throw new Error("Failed to get presigned upload urls")
    }

    const { uploads } = await res.json()

    // Upload files in parallel
    const uploadResults = await Promise.all(
        uploads.map(async (upload: any) => {
            const fileData = prepared.find((fileObj) => fileObj.imageId === upload.imageId)

            if (!fileData) throw new Error("File mismatch")

            // Actual upload
            const uploadRes = await fetch(upload.url, {
                method: "PUT",
                headers: {
                    "Content-Type": fileData.contentType
                },
                body: fileData.file
            })

            if (!uploadRes.ok) throw new Error(`Upload failed for ${upload.imageId}`)

            return {
                imageId: upload.imageId,
                key: upload.key,
            }
        })

    )
    console.log(uploadResults)

    return {
        groupId,
        images: uploadResults
    }
}