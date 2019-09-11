<template>
  <!-- eslint-disable vue/no-v-html -->
  <div>
    <main class="container blog-post">
      <h1 class="heading-primary blog-post__title">
        {{ post.title }}
      </h1>
      <div class="blog-post__info">
        <div class="info__date">
          {{ post.date }}
        </div>
        <template v-for="tag in post.tags">
          <nuxt-link :key="tag._id" :to="tag.slug" class="info__tag">
            {{ `#${tag.name}` }}
          </nuxt-link>
        </template>
      </div>
      <div v-html="post.html"></div>
    </main>
    <posts-related :posts="posts"></posts-related>
  </div>
</template>

<script>
import PostsRelated from '~/components/posts-related.vue'
import { posts } from '~/samplePost.json'

export default {
  components: {
    PostsRelated
  },
  data() {
    return {
      post: posts[0],
      posts
    }
  }
}
</script>

<style></style>
