<script>
export default {
  name: "AppHeader",
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
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
