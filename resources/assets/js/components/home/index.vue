<template>
    <div class='home-page'>
        <carousel />
        <index-topic></index-topic>
        <index-plate></index-plate>
    </div>
</template>

<script>

import carousel from './carousel.vue';
import IndexTopic from './IndexTopic.vue';
import IndexPlate from './IndexPlate.vue';

export default {
  name: 'home-container',
  components: {
    carousel,
    IndexTopic,
    IndexPlate
  },
  mounted() {
    // mounted test
    console.log('home mounted');
  }
};

</script>