<template>
    <div class="plate-wrapper">
        <a
            v-for="plate in plates" 
            href="/plate/{plage.id}"
            :key="plate.id"
        >
            <img :src="plate.plate_img"/>
        </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      plates: []
    };
  },
  created() {
    this.fetchPlates();
  },
  methods: {
    fetchPlates() {
      this.$http
        .get("/api/plates")
        .then(resp => resp.data)
        .then(data => (this.plates = data))
        .catch(console.error);
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
