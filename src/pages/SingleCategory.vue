<template>
  <div class="container">
    <h1>{{ category.name }}</h1>
    <h2>Post associati</h2>
    <ul>
      <li v-for="post in category.posts">
        <router-link
          :to="{ name: 'single-post', params: { slug: post.slug } }"
          >{{ post.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "SinglePost",
  data() {
    return {
      store,
      category: "",
    };
  },
  created() {
    this.getCategory();

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getCategory();
      }
    );
  },
  methods: {
    getCategory() {
      axios
        .get(`${this.store.api_url}/categories/${this.$route.params.slug}`)
        .then((response) => {
          this.category = response.data;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({ name: "page-404" });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
