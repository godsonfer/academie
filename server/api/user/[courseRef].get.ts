import { PrismaClient } from '@prisma/client';
import protectRoute from '~/server/utils/protectRoute';
import {
    ChapterOutline,
    LessonOutline,
} from '../course/meta.get';
import {
    CourseProgress,
    ChapterProgress,
} from '~/types/course';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    protectRoute(event);

    const { user: { email: userEmail }, } = event.context;
    const courseId = event.context.params.courseRef
    const userProgress = await prisma.lessonProgress.findMany(
        {
            where: {
                userEmail,
                Lesson: {
                    Chapter: {
                        Course: {
                            id: courseId,
                        },
                    },
                },
            },
            select: {
                completed: true,
                Lesson: {
                    select: {
                        slug: true,
                        Chapter: {
                            select: {
                                slug: true,
                            },
                        },
                    },
                },
            },
        }
    );

    // Get course outline from meta endpoint
    const courseOutline = await $fetch('/api/course/meta');

    if (!courseOutline) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Course outline not found',
        });
    }

    // Use the course outline and user progress to create a nested object
    // with the progress for each lesson
    const progress = courseOutline.chapters.reduce((courseProgress: CourseProgress, chapter: ChapterOutline) => {
        // Collect the progress for each chapter in the course
        courseProgress[chapter.slug] = chapter.lessons.reduce((chapterProgress: ChapterProgress, lesson: LessonOutline) => {
            // Collect the progress for each lesson in the chapter
            chapterProgress[lesson.slug] =
                userProgress.find(
                    (progress) => progress.Lesson.slug === lesson.slug && progress.Lesson.Chapter.slug === chapter.slug
                )?.completed || false;

            return chapterProgress;
        },
            {}
        );

        return courseProgress;
    },
        {}
    );

    return progress;
});
