import { type LessonWithPath } from '~~/types/course';

export default async (reference: string) => await useFetchWithCache<LessonWithPath>(`/api/course/read/${reference}`);
