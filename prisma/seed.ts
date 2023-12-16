import {PrismaClient} from "@prisma/client";
import {userData} from "../data/userData";
import {postData} from "../data/postData";

const prisma = new PrismaClient();

async function main () {
    userData.forEach(async user => {  
        await prisma.user.create({
            data: user  
        });
    });

    postData.forEach(async post => {  
        await prisma.post.create({
            data: post  
        });
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    });