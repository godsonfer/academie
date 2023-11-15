// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/course/:chapterSlug/:lessonSlug': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/[chapterSlug]/[lessonSlug].get').default>>>>
    }
    '/api/course/admin/create/chapter': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/admin/create/chapter.post').default>>>>
    }
    '/api/course/admin/create/course': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/admin/create/course').default>>>>
    }
    '/api/course/admin/create/lesson': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/admin/create/lesson').default>>>>
    }
    '/api/course/meta': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/meta.get').default>>>>
    }
    '/api/course/metaUser': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/metaUser.get').default>>>>
    }
    '/api/course/read/:courseReference': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/course/read/[courseReference].get').default>>>>
    }
    '/api/user/:courseRef': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/user/[courseRef].get').default>>>>
    }
    '/api/user/:hasAccess': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/user/[hasAccess].get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}