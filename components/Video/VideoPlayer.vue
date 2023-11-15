<template>
    <media-player :title="title" :width="mobile ? '300' : '700'" :height="mobile ? '200' : '400'" class="m-0 p-0"
        :src="videoId" load="eager" autoplay keyDisabled liveEdgeTolerance="60" controls>
        <media-provider></media-provider>
        <media-video-layout :thumbnails="cover"></media-video-layout>
    </media-player>
</template>
  
<script setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
import 'vidstack/player/styles/default/theme.css';
import 'vidstack/player/styles/default/layouts/video.css';
import 'vidstack/player';
import 'vidstack/player/layouts';
import 'vidstack/player/ui';
defineProps({
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String
    }
});

</script>
  
<style scoped>
.player {
    --brand-color: #942727;
    --focus-color: #05624b;

    --audio-brand: var(--brand-color);
    --audio-focus-ring-color: var(--focus-color);
    --audio-border-radius: 2px;

    --video-brand: var(--brand-color);
    --video-focus-ring-color: var(--focus-color);
    --video-border-radius: 2px;

    /* 👉 https://vidstack.io/docs/player/components/layouts/default#css-variables for more. */
}

.player[data-view-type='audio'] media-poster {
    display: none;
}

.player[data-view-type='video'] {
    aspect-ratio: 16 /9;
}

.src-buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
    margin-inline: auto;
    max-width: 300px;
}
</style>