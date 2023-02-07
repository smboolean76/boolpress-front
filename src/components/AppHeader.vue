<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
      categories: [],
    };
  },
  created() {
    axios.get(`${this.store.api_url}/categories`).then((res) => {
      this.categories = res.data;
    });
  },
};
</script>

<template>
  <header>
    <h1>Logo Boolean</h1>
    <nav>
      <!-- <ul>
        <li><a href="/">Home Page</a></li>
        <li><a href="/chi-siamo">Chi Siamo</a></li>
        <li><a href="/contattaci">Contattaci</a></li>
      </ul> -->
      <ul>
        <li><router-link :to="{ name: 'homepage' }">Home Page</router-link></li>
        <li><router-link :to="{ name: 'about-us' }">Chi Siamo</router-link></li>
        <li>
          <router-link :to="{ name: 'contact-us' }">Contattaci</router-link>
        </li>
        <li v-for="category in categories">
          <router-link
            :to="{ name: 'single-category', params: { slug: category.slug } }"
            >{{ category.name }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
