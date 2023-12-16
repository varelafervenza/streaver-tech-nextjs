import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"
import { Prisma } from "@prisma/client"
import { Params } from "@/interfaces/Params";

export async function GET(request: Request, { params }: { params: Params }) {
    try {
        const post = await prisma.post.findFirst({
            where: { id: Number(params.id) }
        })

        if (!post)
            return NextResponse.json(
                { message: "Post not found" }, 
                { status: 404 }
            )

        return NextResponse.json(post);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message }, 
                { status: 500 }
            )
        }
    }
}

export async function DELETE(request: Request, { params }: { params: Params }){
    try {
        const post = await prisma.post.delete({
            where: { id: Number( params.id )}
        })

        if (!post)
            return NextResponse.json(
                { message: "Post not found" }, 
                { status: 404 }
            )

        return NextResponse.json(post);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == "P2025") {
            return NextResponse.json(
                { message: "Post not found" }, 
                { status: 404 }
            )
        }

        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message }, 
                { status: 500 }
            )
        }
    }
}