import { NextRequest, NextResponse } from "next/server";
import { ListObjectsV2Command, DeleteObjectCommand, ObjectLockLegalHoldStatus } from "@aws-sdk/client-s3";
import S3 from "@/lib/s3";

export async function POST(req: NextRequest) {
    try {
        const { groupId } = await req.json()

        if (!groupId) {
            return NextResponse.json({error: "Missing groupId"}, {status: 400})
        }

        const prefix = `posts/${groupId}`

        // List all objects under group
        const list = await S3.send(
            new ListObjectsV2Command({
                Bucket: process.env.R2_BUCKET_NAME!,
                Prefix: prefix,
            })
        )
 
        console.log("cleanup")

        const objects = list.Contents || []

        // Delete them in parallel
        await Promise.all(
            objects.map((obj) => S3.send(
                new DeleteObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME!,
                    Key: obj.Key!,
                })
            ))
        )

        return NextResponse.json({success: true})
    } catch(error: any) {
        return NextResponse.json({error: error.message || "Cleanup failed"}, { status: 500 })
    }
}