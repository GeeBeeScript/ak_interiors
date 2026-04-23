import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import S3 from "@/lib/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: NextRequest) {
    console.log("hi")

  try {
    const body = await req.json();
    
    const { groupId, files } = body;

    if (!groupId || !files || !Array.isArray(files)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const uploads = await Promise.all(
      files.map(async (file: any) => {
        const { imageId, contentType, ext, size } = file;

        // Basic validation
        if (!imageId || !contentType || !ext) {
          throw new Error("Missing file metadata");
        }

        if (!ALLOWED_TYPES.includes(contentType)) {
          throw new Error(`Unsupported file type: ${contentType}`);
        }

        if (size && size > MAX_FILE_SIZE) {
          throw new Error(`File is too large, ${size}`);
        }

        const key = `posts/${groupId}/${imageId}.${ext}`;

        const command = new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME!,
          Key: key,
          ContentType: contentType,
        });

        const url = await getSignedUrl(S3, command, {
          expiresIn: 60 * 5, //5 minutes
        });

        return {
          imageId,
          key,
          url,
        };
      }),
    );
    return NextResponse.json({ uploads });
  } catch (error: any) {
    NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 400 },
    );
  }
}
