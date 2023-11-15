import vue from '@vitejs/plugin-vue'


vue({
    template: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('media-'),
        },
    },
});