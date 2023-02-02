<template>
  <div v-if="post">
    <img :src="post.image_url" :alt="post.title" />
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SinglePost",
  data() {
    return {
      post: null,
    };
  },
  created() {
    axios
      .get(`http://localhost:8000/api/posts/${this.$route.params.slug}`)
      .then((response) => {
        this.post = response.data;
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
        // if (err.response.status === 404) {
        // }
      });
  },
};
</script>

<style lang="scss" scoped></style>
