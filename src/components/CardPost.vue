<template>
  <div class="card">
    <img
      v-if="data.image_url"
      :src="data.image_url"
      class="card-img-top"
      :alt="data.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">
        {{ truncateText(data.content) }}
      </p>
      <router-link
        :to="{ name: 'single-post', params: { slug: data.slug } }"
        class="btn btn-primary"
        >Leggi di più</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPost",
  props: {
    data: Object,
  },
  methods: {
    truncateText(text) {
      return text.substring(0, 250) + "...";
    },
  },
};
</script>

<style lang="scss" scoped></style>
