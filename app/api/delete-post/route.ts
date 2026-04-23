import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { postId } = await req.json();

    const post = await db.imagePost.findUnique({
      where: { id: postId },
    });

    if (!post)
      return NextResponse.json(
        { error: "Image post not found" },
        { status: 404 },
      );

    const groupId = post.groupId;

    // Delete DB (images cascade)
    await db.imagePost.delete({
      where: { id: postId },
    });

    // Trigger async cleanup (non-blocking)
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cleanup`, {
      method: "POST",
      body: JSON.stringify({ groupId }),
    }).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Delete failed" },
      { status: 500 },
    );
  }
}
