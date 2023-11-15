import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import createSlug from "~~/server/utils/createSlug"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  let resp
  try {
    const response = await prisma.course.create({
      data: {
        title: body.title,
        slug: createSlug(body.title),
        cover: body.cover,
        prerequis: body.prerequis,
        projects: body.projects,
        ortherInfo: body.ortherInfo,
        level: body.level,
        whatToLearn: body.whatToLearn,
        draft: body.draft,
        price: body.price,
        desc: body.desc,
        reference: new Date().getTime().toString().slice(3, 13)
      }
    })
    return response
  } catch (error) {
    return error
  }
})
