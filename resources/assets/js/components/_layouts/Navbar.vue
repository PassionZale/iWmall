<template>
  <div class="app-page">
      <div id="nav-hot-fix"></div>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home">
            <i slot="icon" class="nav-index"></i>
            首页
        </mt-tab-item>
        <mt-tab-item id="category">
            <i slot="icon" class="nav-category"></i>
            全部产品
        </mt-tab-item>
        <mt-tab-item id="cart">
            <i slot="icon" class="nav-cart">
              <mt-badge type="error" size="small" v-if="cart > 0">{{cart}}</mt-badge>
            </i>
            购物车
        </mt-tab-item>
        <mt-tab-item id="profile">
            <i slot="icon" class="nav-usercenter"></i>
            账户中心
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selected: 'home',
      cart: 0,
      active: true
    }
  },
  created() {
    this.initRoute();
    this.initCartCount();
  },
  watch: {
    // watch tabbar selected value
    selected: function(val) {
      console.log(val)
      this.routeHandler(val);
    }
  },
  methods: {
    initRoute: function() {
      this.routeHandler(this.$route.name);
    },

    initCartCount: function() {
      let count = localStorage.getItem("cart");
      if (count) {
        this.cart = count || 0;
      }
    },

    routeHandler(val) {
      let routerList = ["home", "category", "cart", "usercenter"];

      if (routerList.indexOf(val) > -1) {
        this.$router.push({ name: val });
        this.selected = val;
      }
    }
  }
};
</script>

