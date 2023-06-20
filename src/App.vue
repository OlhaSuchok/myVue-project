<template>
  <div class="app">
    <h1 class="title">Posts page</h1>
    <div class="app-btn-create">
      <my-button @click="showDialog" style="margin-top: 0"
        >Create post</my-button
      >
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="posts" v-if="!isPostLoading" @remove="removePost" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm/PostForm";
import PostList from "@/components/PostList/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By content" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = "";
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
        console.log("response", response);
      } catch (error) {
        alert("Something went wrong");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    console.log("I'm mounted hook");
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.title {
  margin-bottom: 20px;
}
.app-btn-create {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
