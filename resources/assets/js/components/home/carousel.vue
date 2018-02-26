<template>
  <div class="swipe-container">
    <mt-swipe :auto="3000">
      <mt-swipe-item
        v-for="banner in banners"
        :key="banner.img_url"
      >
        <router-link to="home">
          <img class="swiper-img" :src="banner.img_url"/>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: [],
      swipeConf: {
        speed: 300, //	duration of the animation(in millisecond)	Number		300
        auto: 300, //interval of auto-play(in millisecond)	Number		3000
        defaultIndex: 0, //	index of the initially visible slide	Number		0
        continuous: true, //	if an infinite slider without endpoints is created	Boolean		true
        showIndicators: true,
      }
    };
  },
  created() {
    this.fetchBanner();
  },
  methods: {
    fetchBanner() {
      this.$http
        .get("/api/banners")
        .then(resp => resp.data)
        .then(data => {
          this.banners = data;
        });
    }
  }
};
</script>
<style>

.swipe-container {
  height: 300px;
}

.swiper-img {
  height: 100%;
  width: auto;
}

</style>
