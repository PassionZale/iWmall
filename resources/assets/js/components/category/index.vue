<template>
    <div class="page-category">
        <div id="categories-content-left">
            <ul>
                <li 
                    v-for="category in categories"
                    @click="showSubCategories(category)"
                    :class="{'active':activeCategory == category.parent_category.id}"
                    :key="category.id"
                >
                    <span>{{category.parent_category.category_name}}</span>
                </li>
            </ul>
        </div>
        <div id="categories-content-right">
            <ul>
                <li
                    v-for="sub_category in subCategories"
                    v-link="{name:'aCategory',params:{'hashid':sub_category.id}}"
                    :key="sub_category.id"
                >
                    <img :src="sub_category.category_img" />
                    <h4>{{sub_category.category_name}}</h4>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      searchKey: '',
      subCategories: [],
      activeCategory: ''
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.$http.get("/api/categories")
      .then(resp => resp.data)
      .then(data => this.categories = data)
      .then(this.showSubCategories)
      .catch(console.error)
    },
    showSubCategories: function(c) {
        let showCate = c;
        if (!c) {
            showCate = this.category[0]
        }
        this.activeCategory = showCate.parent_category.id;
        this.subCategories = showCate.sub_categories;
    }
  }
};
</script>
