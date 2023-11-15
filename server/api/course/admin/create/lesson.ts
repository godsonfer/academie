import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import createSlug from "~~/server/utils/createSlug"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    let resp
    try {
        const response = await prisma.lesson.create({
            data: {
                title: body.title,
                draft: body.draft,
                slug: createSlug(body.title),
                sourceUrl: body.sourceUrl,
                desc: body.desc,
                chapterId: body.chapterId,
                reference: new Date().getTime().toString().slice(3, 13)

            }
        })
        resp = response
    } catch (error) {
        console.log(error)
    }
    return resp
})
