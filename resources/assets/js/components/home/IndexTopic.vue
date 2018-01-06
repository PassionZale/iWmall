<template>
    <mt-navbar>
        <mt-tab-item 
            v-for="(topic, index) in topics"
            v-link="{name:'aTopic', params:{'hashid':topic.id}}"
            id="topic.topic_title"
            :key={index}
        >
            <img slot="icon" :src="topic.topic_img" />
            {{topic.topic_title}}
        </mt-tab-item>
    </mt-navbar>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
export default {
  data() {
    return {
      topics: ""
    };
  },
  components: {
    Navbar,
    TabItem
  },
  created() {
    this.fetchTopic();
  },
  methods: {
    fetchTopic: function() {
      let vm = this;
      this.$http.get("/api/topics").then(function(response) {
        vm.$set("topics", response.data);
      });
    }
  }
};
</script>

<style scoped>
.mint-navbar .mint-tab-item.is-selected {
  color: #333;
}
</style>
