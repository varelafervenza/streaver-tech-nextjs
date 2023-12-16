import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"
import { Params } from "@/interfaces/Params";

export async function GET(request: Request,  { params }: { params: Params }) {
    try {
        const post = await prisma.post.findMany({
            where: { userId: Number(params.id) }
        })
        return NextResponse.json(post)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message }, 
                { status: 500 }
            )
        }
    }
}
