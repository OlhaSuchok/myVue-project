<template>
  <div v-if="posts.length > 0">
    <h3 class="title">List of posts</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    /></transition-group>
  </div>
  <h3 v-else style="color: red">The list of posts is empty</h3>
</template>

<script>
import PostItem from "@/components/PostItem/PostItem";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.title {
  margin-bottom: 15px;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
