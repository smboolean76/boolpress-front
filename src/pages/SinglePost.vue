<template>
  <div class="container">
    <img :src="post.image_url" :alt="post.title" />
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>
      <router-link :to="{ name: 'single-post', params: { slug: 'prova' } }"
        >Link a prova</router-link
      >
    </p>
    <div class="mt-3">
      <div class="mb-3" v-if="post.comments?.length > 0">
        <h3>Commenti</h3>
        <ul>
          <li v-for="comment in post.comments">
            <h4>{{ comment.name ?? "Anonimo" }}</h4>
            <p>{{ comment.content }}</p>
          </li>
        </ul>
      </div>
      <h3>Inserisci un commento</h3>
      <form @submit.prevent="addComment()" ref="formComment">
        <div class="mt-3">
          <label for="name">Nome</label>
          <input
            class="form-control"
            id="name"
            type="text"
            placeholder="Inserisci il tuo nome"
            v-model="formData.name"
          />
        </div>
        <div class="mt-3">
          <label for="content">Contenuto</label>
          <textarea
            class="form-control"
            id="content"
            cols="30"
            rows="10"
            placeholder="Inserisci il contenuto*"
            v-model="formData.content"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Aggiungi commento
        </button>
      </form>
      <div class="mt-3 alert alert-success" role="alert" v-if="createdComment">
        Commento creato con successo
      </div>
      <div class="mt-3 alert alert-danger" role="alert" v-if="commentError">
        <div>Errore nella creazione del commento</div>
        <ul>
          <li v-for="errors in commentError.errors">
            <div v-for="error in errors">{{ error }}</div>
          </li>
        </ul>
      </div>
    </div>
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
      post: "",
      createdComment: false,
      commentError: false,
      formData: {
        name: "",
        content: "",
      },
    };
  },
  created() {
    this.getPost();

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getPost();
      }
    );
  },
  methods: {
    getPost() {
      axios
        .get(`${this.store.api_url}/posts/${this.$route.params.slug}`)
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
    addComment() {
      axios
        .post(`${this.store.api_url}/comments/${this.post.id}`, {
          name: this.formData.name,
          content: this.formData.content,
        })
        .then((res) => {
          this.post.comments.push(res.data);
          this.formData.name = "";
          this.formData.content = "";
          this.createdComment = true;
          if (this.commentError) {
            this.commentError = false;
          }
        })
        .catch((err) => {
          this.commentError = err.response.data;
          if (this.createdComment) {
            this.createdComment = false;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
