<template>
    <v-sheet>
        <figure>
            <img :src="img" :alt="title">
        </figure>
        <div class="desc">
            <h6 class="text-h6 pb-2">
                {{ title }}
            </h6>
            <p class="use-text-paragraph">
                {{ desc }}
            </p>
            <div class="property">
                <div class="rating">
                    <v-icon v-for="index in rating" :key="index" class="star-icon">
                        mdi-star
                    </v-icon>
                </div>
                <strong>{{ price }}</strong>
            </div>
            <v-btn href="#" block class="button" variant="outlined" color="primary">
                {{ desc }}
            </v-btn>
        </div>
    </v-sheet>
</template>
  
<style lang="scss" scoped></style>
  
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            default: 0,
        },
        price: {
            type: String,
            required: true,
        },
    },
};
</script>
  