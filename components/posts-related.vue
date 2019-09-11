<template>
  <section class="container related">
    <h2 class="heading-secondary related__heading">
      Bài viết liên quan
    </h2>
    <template v-for="post in posts">
      <post-short :key="post._id" :post="post"></post-short>
    </template>
  </section>
</template>

<script>
import PostShort from './post-short.vue'
export default {
  components: {
    PostShort
  },
  props: {
    posts: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
