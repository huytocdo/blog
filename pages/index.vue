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
export default {
  layout: 'fullTitle',
  components: {
    PostShort
  },
  async asyncData({ $axios }) {
    const {
      data: { data: posts }
    } = await $axios.$get('/posts')
    return { posts }
  }
}
</script>
<style></style>
