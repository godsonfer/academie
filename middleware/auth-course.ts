export default defineNuxtRouteMiddleware(async (to) => {
    const user = useSupabaseUser();
    const course = await useCourseDetails(to.params.courseRef)
    const lesson = await useLesson(to.params.chapterSlug, to.params.lessonSlug)

    const { data: hasAccess } = await useFetch(`/api/user/${to.params.courseRef}`,
        {
            headers: useRequestHeaders(['cookie']),
        }
    );
    if (hasAccess.value || course.value.isFree || lesson.value.isFree) {
        return;
    }
    return navigateTo(`/course/subscription/${to.params.courseRef}`);
});
