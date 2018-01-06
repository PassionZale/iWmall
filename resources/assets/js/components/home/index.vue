<template>
  <div class="page-home">
    <mt-header title="long long long long title" />
    <carousel />
    <topic />
    <plate />
    <goods />
  </div>
</template>

<script>

import carousel from './carousel.vue';
import topic from './topic.vue';
import plate from './plate.vue';
import goods from './goods.vue';

export default {
  name: 'home-container',
  components: {
    carousel,
    topic,
    plate,
    goods
  }
};

</script>