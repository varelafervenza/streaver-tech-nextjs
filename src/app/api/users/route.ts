import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET(){
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json(
                { message: error.message }, 
                { status: 500 }
            )
        }
    }
}
