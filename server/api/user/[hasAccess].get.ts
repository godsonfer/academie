import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type User = {
    email: string;
};

export default defineEventHandler(async (event) => {
    const user = event.context.user as User;
    const courseId = event.context.params.hasAccess
    if (!user) {
        return false;
    }

    const coursePurchases =
        await prisma.coursePurchase.findFirst({
            where: {
                userEmail: user.email,
                verified: true,
                courseId: courseId,
            },
        });
    return coursePurchases
});
