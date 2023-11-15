import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const lessonSelect = Prisma.validator<Prisma.LessonAggregateArgs>()({
    select: {
        reference: true,
        desc: true,
        draft: true,
        nbrView: true,
        isFree: true,
        note: true,
        sourceUrl: true,
        title: true,

    },
});

export type LessonOutline = Prisma.LessonGetPayload<
    typeof lessonSelect
> & {
    path: string;
};

const chapterSelect =
    Prisma.validator<Prisma.ChapterAggregateArgs>()({
        select: {
            title: true,
            slug: true,
            desc: true,
            draft: true,
            reference: true,
            lessons: lessonSelect,
        },
    });
export type ChapterOutline = Omit<
    Prisma.ChapterGetPayload<typeof chapterSelect>,
    'lessons'
> & {
    lessons: LessonOutline[];
};

const courseSelect = Prisma.validator<Prisma.CourseAggregateArgs>()({
    select: {
        title: true,
        reference: true,
        cover: true,
        isFree: true,
        price: true,
        nbrStudent: true,
        desc: true,
        version: true,
        slug: true,
        prerequis: true,
        projects: true,
        ortherInfo: true,
        level: true,
        whatToLearn: true,
        draft: true,
        chapters: chapterSelect,

    },
});
export type CourseOutline = Omit<
    Prisma.CourseGetPayload<typeof courseSelect>,
    'chapters'
> & {
    chapters: ChapterOutline[];
};

export default defineEventHandler(
    async (): Promise<CourseOutline> => {
        const outline = await prisma.course.findMany(
            courseSelect
        );
        // Error if there is no course
        if (!outline) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Course not found',
            });
        }
        return outline

    }
);
