export default async (course) => {
    console.log(course)
    return course.value.chapters[0].lessons[0]
}