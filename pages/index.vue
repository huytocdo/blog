<template>
  <main class="container">
    <template v-for="post in posts">
      <post-short :key="post._id" :post="post"></post-short>
    </template>
    <div class="read-more">
      <a href="#">Xem thêm</a>
    </div>
  </main>
</template>
<script>
import PostShort from '~/components/post-short.vue'
import { posts } from '~/samplePost.json'
export default {
  layout: 'fullTitle',
  components: {
    PostShort
  },
  data: () => {
    return {
      posts
    }
  }
}
</script>
<style></style>
