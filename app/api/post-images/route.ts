import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { caption, groupId, images } = body;

    if (!groupId || !images?.length) {
      return NextResponse.json({ error: "Invalid Payload" }, { status: 400 });
    }

    const post = await db.$transaction(async (tx) => {
      const createdPost = await tx.imagePost.create({
        data: {
          caption,
          groupId,
        },
      });

      await tx.image.createMany({
        data: images.map((img: any, index: number) => ({
          id: img.imageId,
          groupId,
          key: img.key,
          order: index,
        })),
      });

      return createdPost;
    });

    return NextResponse.json({ post });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create post" },
      { status: 500 },
    );
  }
}
