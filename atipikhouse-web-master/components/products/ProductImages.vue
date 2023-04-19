<template>
    <client-only>
        <div class="col-lg-8 col-md-4">
            <div class="products-page-gallery">
                <div class="product-page-gallery-main">
                    <vueper-slides v-if="images[0]"
                        :bullets = "false"
                    >
                        <vueper-slide
                            v-for="(img, i) in imagesList"
                            :key="i"
                            :image="img.image" />
                    </vueper-slides>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    props:{
        images: {
            type: Object,
        },
    },
    data(){
        return {
            imagesList: []
        }
    },
    created(){
        let returned = []

        if(this.images[0]){
            for (const img in this.images){
                returned.push({id: img, image: this.images[img]})
            }
        }
        this.imagesList = returned
    }
}
</script>