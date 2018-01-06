<template>
  <section class="section-goods">
    <mt-spinner v-if="loading" type="triple-bounce"></mt-spinner>
    <div v-if="!loading" class="pure-g">
      <div
        class="pure-u-1-2 card-goods"
        v-for="goods in goodsList"
        :key="goods.id"
      >
      <img class="goods-thumbnail" :src="goods.commodity_img" />
      <p class="goods-title">{{ goods.commodity_name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "goods-list",
  data() {
    return {
      goodsList: [],
      pagination: {
        curPage: 1,
        total: 0
      },
      loading: true
    };
  },
  methods: {
    updateData(response) {
      const { current_page, total, data: data } = response;
      this.pagination = {
        curPage: current_page,
        total
      }
      this.goodsList = data;
      this.loading = !this.loading;
    }
  },
  created() {
    this.$http
      .get("/api/goods")
      .then(resp => resp.data)
      .then(this.updateData)
      .catch(console.error);
  }
};
</script>

<style>

.card-goods {
  padding: 0 16px;
}

.goods-thumbnail {
  display: block;
  width: 100%;
  height: 120px;
}
.goods-title {
  display: block;
  line-height: 1.5;
  color: #333;
}
</style>
