<template>
  <div class="navbar">
    <div @click="$router.push('/')">MyPosts</div>
    <div class="navbar-btn">
      <my-button @click="$router.push('/')" style="margin-right: 20px"
        >Main</my-button
      >
      <my-button @click="$router.push('/posts')" style="margin-right: 20px"
        >Posts</my-button
      >
      <my-button @click="$router.push('/about')">About</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton/MyButton.vue";
export default {
  components: { MyButton },
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  background-color: lightskyblue;
  box-shadow: 2px 2px 4px gray;
}
.navbar-btn {
  margin-left: auto;
}
</style>
