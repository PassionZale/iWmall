<template>
    <carousel />
    <index-topic></index-topic>
    <index-plate></index-plate>
</template>

<script>
    import carousel from './index/carousel.vue'
    import IndexTopic from './index/IndexTopic.vue'
    import IndexPlate from './index/IndexPlate.vue'

    export default{
        components:{
            carousel, IndexTopic, IndexPlate
        }
    }

</script>