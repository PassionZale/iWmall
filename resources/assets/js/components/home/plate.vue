<template>
    <div class="plate-wrapper">
      <div class="pure-g">
        <div 
          class="pure-u-1-2 plate-card"
          v-for="plate in plates" 
          :key="plate.id"
        >
          <a href="/plate/{plage.id}">
            <img class="plate-img" :src="plate.plate_img"/>
            <p class="plate-title">
              {{plate.plate_title}}
            </p>
          </a>
        </div>
      </div>
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

<style>
.plate-img {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.plate-card {
  padding: 16px;
}

</style>
