import { PrismaClient, Prisma } from "@prisma/client";
import createSlug from "~~/server/utils/createSlug"

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    let resp
    try {
        const response = await prisma.chapter.create({
            data: {
                title: body.title,
                desc: body.desc,
                draft: body.draft,
                slug: createSlug(body.title),
                courseId: body.courseId,
                reference: new Date().getTime().toString().slice(3, 13)
            }
        })
        resp = response
    } catch (error) {
        console.log(error)
    }
    return resp
})
