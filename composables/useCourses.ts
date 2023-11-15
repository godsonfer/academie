import { type CourseOutline } from '~~/server/api/course/meta.get';

export default async () =>
    await useFetchWithCache<CourseOutline>('/api/course/meta',);
