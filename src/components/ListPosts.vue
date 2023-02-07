<template>
  <section>
    <h2>Lista dei Posts</h2>
    <div class="container">
      <div class="row gy-3">
        <div class="col-md-4" v-for="post in getPosts">
          <CardPost :data="post" />
        </div>
      </div>
      <button @click="totPosts += 3" v-if="totPosts < posts.length">
        Mostra altri
      </button>
    </div>
    <ul></ul>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import CardPost from "./CardPost.vue";

export default {
  name: "ListPosts",
  components: {
    CardPost,
  },
  data() {
    return {
      store,
      posts: [],
      totPosts: 3,
    };
  },
  computed: {
    getPosts() {
      return this.posts.filter((elm, index) => index < this.totPosts);
    },
  },
  created() {
    axios.get(`${this.store.api_url}/posts`).then((response) => {
      this.posts = response.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
