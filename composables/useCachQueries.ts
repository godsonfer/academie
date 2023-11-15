import { StorageSerializers } from '@vueuse/core';

export default async <T>(name: string, data: Object) => {
    // Use sessionStorage to cache the lesson data
    const cached = useSessionStorage<T>(name, null, {
        serializer: StorageSerializers.object,
    });
    return cached.value = data as T;
};
