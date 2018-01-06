<template>
  <mt-swipe :auto="3000" :show-indicators="true">
      <mt-swipe-item
      v-for="banner in banners"
      :key="banner.img_url"
    >
      <a :href="banner.redirect_url">
          <img :src="banner.img_url"/>
      </a>
    </mt-swipe-item>
  </mt-swipe>
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
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
