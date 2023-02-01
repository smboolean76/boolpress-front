<template>
  <section>
    <h2>Lista dei Posts</h2>
    <div class="container">
      <div class="row gy-3">
        <div class="col-md-4" v-for="post in posts">
          <CardPost :data="post" />
        </div>
      </div>
    </div>
    <ul></ul>
  </section>
</template>

<script>
import axios from "axios";
import CardPost from "./CardPost.vue";

export default {
  name: "ListPosts",
  components: {
    CardPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios.get("http://localhost:8000/api/posts").then((response) => {
      this.posts = response.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
