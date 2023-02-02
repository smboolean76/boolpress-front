<template>
  <h1>Home Page</h1>
  <ListPosts />
</template>

<script>
import ListPosts from "../components/ListPosts.vue";

export default {
  name: "HomePage",
  components: {
    ListPosts,
  },
};
</script>

<style lang="scss" scoped></style>
