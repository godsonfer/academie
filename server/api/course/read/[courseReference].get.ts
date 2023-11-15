import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event: object) => {
    let course
    const ref: string = event.context.params.courseReference
    try {
        const response = await prisma.course.findFirst({
            where: {
                reference: ref,
            },

            include: {
                chapters: {
                    include: {
                        lessons: true
                    }
                },

            }
        }
        )
        course = response
    } catch (error) {
        console.log(error);
    }
    // finally {
    //     await prisma.$disconnect(); // Libérez la connexion
    // }
    return course
})