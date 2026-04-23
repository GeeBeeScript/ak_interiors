import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const posts = await db.imagePost.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                images: {
                    orderBy: { order: "asc" },
                }
            }
        })

        const baseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL!

        const formattedPosts = posts.map((post) => ({
            ...post,
            images: post.images.map((img) => ({
                ...img,
                url: `${baseUrl}/${img.key}`
            }))
        }))

        return NextResponse.json({ posts: formattedPosts })
    } catch (error: any) {
        return NextResponse.json({error: "Failed to fetch posts"}, {status: 500})
    }
}