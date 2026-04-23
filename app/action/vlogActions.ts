"use server"

import { db } from "@/lib/db"

export async function createVlogPost({ link, caption }: { link: string, caption?: string }) {
    await db.vlogs.create({
        data: {
            vlogLink: link,
            caption: caption,
        }
    })

    return { success: true }
}

export async function getAllVlogs() {
    const vlogs = await db.vlogs.findMany({
        orderBy: { createdAt: "desc" }
    })

    return vlogs
}

export async function deleteVlog({vlogId}: { vlogId: string }) {
    await db.vlogs.delete({
        where: { id: vlogId }
    })
}