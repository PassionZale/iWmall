<template>
  <div class="home-page">
    
    <carousel />
    <topic />
    <plate />
  </div>
</template>

<script>

import carousel from './carousel.vue';
import topic from './topic.vue';
import plate from './plate.vue';

export default {
  name: 'home-container',
  components: {
    carousel,
    topic,
    plate
  }
};

</script>