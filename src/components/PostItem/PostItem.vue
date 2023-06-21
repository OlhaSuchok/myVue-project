<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post-btn">
      <my-button
        @click="$router.push(`/posts/${post.id}`)"
        style="margin-right: 10px; width: 75px"
        >Open</my-button
      >
      <my-button @click="$emit('remove', post)" style="width: 75px"
        >Delete</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 2px solid rgb(60, 211, 211);
  padding: 10px 15px;
  margin-bottom: 15px;
}
.post-btn {
  display: flex;
}
</style>
