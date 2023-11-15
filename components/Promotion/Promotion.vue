<template>
    <div>
        <v-layout>
            <v-carousel show-arrows="hover" progress="primary" cycle height="200" hide-delimiter-background>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                    <v-row class="text-overlay">
                        <v-col>
                            <v-typography class="text-white">
                                <div class="text-h3">
                                    Bonjour {{ username }},
                                </div>
                                <v-spacer> </v-spacer>
                                <div>
                                    Continue tes formations là où tu les as laissées.
                                </div>
                            </v-typography>
                        </v-col>
                    </v-row>
                </v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-layout>
    </div>
</template>

<script setup>
defineProps({
    username: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
.text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.568);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.text-white {
    color: #fff;
    font-size: 24px;
}
</style>