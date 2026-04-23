import db from "@/lib/db";
import S3 from "@/lib/s3";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { imageId } = await req.json()

        if (!imageId) {
            return NextResponse.json({error: "Missing imageId"}, {status: 400})
        }

        // Find image
        const image = await db.image.findUnique({
            where: {
                id: imageId,
            }
        })

        if (!image) return NextResponse.json({error: "Image not found"}, {status: 404})
        
        // Delete from R2
        await S3.send(
            new DeleteObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME!,
                Key: image.key,
            })
        )

        // Delete from DB
        await db.image.delete({
            where: { id: imageId }
        })

        return NextResponse.json({ success: true })
    } catch (error: any) {
        return NextResponse.json({error: error.message || "Delete failded"}, {status: 500})
    }
}