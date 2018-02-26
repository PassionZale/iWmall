<template>
  <mt-navbar>
    <mt-tab-item 
        v-for="topic in topics"
        href="/topic/{topic.id}"
        id="topic.topic_title"
        :key="topic.id"
    >
        <img slot="icon" class="topic-icon" :src="topic.topic_img" />
        {{topic.topic_title}}
    </mt-tab-item>
  </mt-navbar>
</template>
<script>
export default {
  data() {
    return {
      topics: []
    };
  },
  created() {
    this.fetchTopic();
  },
  methods: {
    fetchTopic() {
      this.$http.get("/api/topics")
        .then(resp => resp.data)
        .then(data => this.topics = data)
        .catch(console.error);
    }
  }
};
</script>
<style>

.topic-icon {
  border-radius: 50%;
}

</style>
