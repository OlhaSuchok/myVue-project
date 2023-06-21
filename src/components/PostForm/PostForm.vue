<template>
  <form class="form" @submit.prevent>
    <h4 class="title">Create post</h4>
    <my-input
      v-focus
      v-model.trim="post.title"
      type="text"
      placeholder="Name"
    />
    <my-input v-model.trim="post.body" type="text" placeholder="Description" />
    <my-button style="align-self: flex-end" @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
  //   Example for objects and Arrays =====================
  //   watch: {
  //     post: {
  //       handler(newValue) {
  //         console.log("newValue post", newValue);
  //       },
  //       deep: true,
  //     },
  //   },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.title {
  margin-bottom: 15px;
}
</style>
