<template>
  <div class="app">
    <h1 class="title">Posts page</h1>
    <my-input v-model="searchQuery" placeholder="Search..." />
    <div class="app-btn-create">
      <my-button @click="showDialog" style="margin-top: 0"
        >Create post</my-button
      >
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchPosts"
      v-if="!isPostLoading"
      @remove="removePost"
    />
    <div v-else>Loading...</div>
    <ul class="page-list">
      <li
        class="page-list-item"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ 'current-page': page === pageNumber }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </li>
    </ul>
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
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By content" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        console.log("response", response);
        console.log("response", response);
      } catch (error) {
        alert("Something went wrong");
      } finally {
        this.isPostLoading = false;
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  },
  mounted() {
    console.log("I'm mounted hook");
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((firstPost, secondPost) =>
        firstPost[this.selectedSort]?.localeCompare(
          secondPost[this.selectedSort]
        )
      );
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    page() {
      this.fetchPosts();
    },
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
.page-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 15px;
}
.page-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid cadetblue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  background-color: rgb(185, 232, 234);
  color: black;

  &:last-child {
    margin-right: 0;
  }
}

.current-page {
  background-color: cadetblue;
  color: white;
}
</style>
