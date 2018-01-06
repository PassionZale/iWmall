<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="banner in banners"
        :key="banner.img_url"
      >
        <a :href="banner.redirect_url">
            <img :src="banner.img_url"/>
        </a>
      </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banners: []
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
  },
  mounted() {
    let swiper = new Swiper(".swiper-container", {
      autoplay: 4000,
      loop: true,
      resizeReInit: true,
      pagination: ".swiper-pagination",
      observer: true,
      observeParents: true
    });
  }
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 180px;
}
img {
  width: 100%;
  height: auto;
}
</style>
