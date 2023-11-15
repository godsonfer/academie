// @ts-nocheck


export const localeCodes = [
  "ar",
  "de",
  "id",
  "pt",
  "zh",
  "en"
]

export const localeMessages = { 
  "ar": [
      { key: "../lang/ar-AR.json", load: () => import("../lang/ar-AR.json" /* webpackChunkName: "locale__home_lta_academie_lang_ar_AR_json" */), cache: true },
  ],
  "de": [
      { key: "../lang/de-DE.json", load: () => import("../lang/de-DE.json" /* webpackChunkName: "locale__home_lta_academie_lang_de_DE_json" */), cache: true },
  ],
  "id": [
      { key: "../lang/id-ID.json", load: () => import("../lang/id-ID.json" /* webpackChunkName: "locale__home_lta_academie_lang_id_ID_json" */), cache: true },
  ],
  "pt": [
      { key: "../lang/pt-PT.json", load: () => import("../lang/pt-PT.json" /* webpackChunkName: "locale__home_lta_academie_lang_pt_PT_json" */), cache: true },
  ],
  "zh": [
      { key: "../lang/zh-ZH.json", load: () => import("../lang/zh-ZH.json" /* webpackChunkName: "locale__home_lta_academie_lang_zh_ZH_json" */), cache: true },
  ],
  "en": [
      { key: "../lang/en-US.json", load: () => import("../lang/en-US.json" /* webpackChunkName: "locale__home_lta_academie_lang_en_US_json" */), cache: true },
  ],
}

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = {
  "experimental": {
    "jsTsFormatResource": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./config/i18n.js",
  "locales": [
    {
      "code": "ar",
      "iso": "ar-AR",
      "name": "Arabic",
      "dir": "rtl",
      "files": [
        "lang/ar-AR.json"
      ]
    },
    {
      "code": "de",
      "iso": "de-DE",
      "name": "Deutch",
      "dir": "ltr",
      "files": [
        "lang/de-DE.json"
      ]
    },
    {
      "code": "id",
      "iso": "id-ID",
      "name": "Bahasa Indonesia",
      "dir": "ltr",
      "files": [
        "lang/id-ID.json"
      ]
    },
    {
      "code": "pt",
      "iso": "pt-PT",
      "name": "Portuguese",
      "dir": "ltr",
      "files": [
        "lang/pt-PT.json"
      ]
    },
    {
      "code": "zh",
      "iso": "zh-ZH",
      "name": "Chinese",
      "dir": "ltr",
      "files": [
        "lang/zh-ZH.json"
      ]
    },
    {
      "code": "en",
      "iso": "eng-US",
      "name": "English",
      "dir": "ltr",
      "files": [
        "lang/en-US.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix",
  "lazy": true,
  "langDir": "lang",
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "i18nModules": []
}
  
  const vueI18nConfigLoader = async loader => {
    const config = await loader().then(r => r.default || r)
    if (typeof config === 'object') return config
    if (typeof config === 'function') return await config()
    return {}
  }

  const deepCopy = (src, des, predicate) => {
    for (const key in src) {
      if (typeof src[key] === 'object') {
        if (!(typeof des[key] === 'object')) des[key] = {}
        deepCopy(src[key], des[key], predicate)
      } else {
        if (predicate) {
          if (predicate(src[key], des[key])) {
            des[key] = src[key]
          }
        } else {
          des[key] = src[key]
        }
      }
    }
  }
  
  const mergeVueI18nConfigs = async (loader) => {
    const layerConfig = await vueI18nConfigLoader(loader)
    const cfg = layerConfig || {}
    
    for (const [k, v] of Object.entries(cfg)) {
      if(nuxtI18nOptions.vueI18n?.[k] === undefined || typeof nuxtI18nOptions.vueI18n?.[k] !== 'object') {
        nuxtI18nOptions.vueI18n[k] = v
      } else {
        deepCopy(v, nuxtI18nOptions.vueI18n[k])
      }
    }
  }

  nuxtI18nOptions.vueI18n = { messages: {} }
  
  await mergeVueI18nConfigs(() => import("../config/i18n.js?hash=578da35b&config=1" /* webpackChunkName: __config_i18n_js_578da35b */)) 
    
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = {
  "experimental": {
    "jsTsFormatResource": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [],
  "defaultLocale": "",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": null,
  "rootRedirect": null,
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false
}

export const nuxtI18nInternalOptions = {
  "__normalizedLocales": [
    {
      "code": "ar",
      "iso": "ar-AR",
      "name": "Arabic",
      "dir": "rtl",
      "files": [
        {
          "path": "lang/ar-AR.json"
        }
      ]
    },
    {
      "code": "de",
      "iso": "de-DE",
      "name": "Deutch",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/de-DE.json"
        }
      ]
    },
    {
      "code": "id",
      "iso": "id-ID",
      "name": "Bahasa Indonesia",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/id-ID.json"
        }
      ]
    },
    {
      "code": "pt",
      "iso": "pt-PT",
      "name": "Portuguese",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/pt-PT.json"
        }
      ]
    },
    {
      "code": "zh",
      "iso": "zh-ZH",
      "name": "Chinese",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/zh-ZH.json"
        }
      ]
    },
    {
      "code": "en",
      "iso": "eng-US",
      "name": "English",
      "dir": "ltr",
      "files": [
        {
          "path": "lang/en-US.json"
        }
      ]
    }
  ]
}
 
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
