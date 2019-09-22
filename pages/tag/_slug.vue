<template>
  <div>
    <main class="container category">
      <h1
        class="heading-primary category__heading"
        v-text="`#${$route.params.slug}`"
      />
      <template v-for="post in posts">
        <post-short :key="post._id" :post="post"></post-short>
      </template>
    </main>
    <section class="container all-tags">
      <h2 class="heading-tertiary">Tags</h2>
      <div class="all-tags__block">
        <template v-for="tag in tags">
          <nuxt-link
            :key="tag._id"
            class="all-tags__items"
            :to="`/tag/${tag.slug}`"
            v-text="`#${tag.name}`"
          />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import PostShort from '~/components/post-short.vue'
export default {
  components: {
    PostShort
  },
  async asyncData({ $axios, params }) {
    const promiseArr = [
      $axios.$get(`http://127.0.0.1:8000/api/v1/posts/category/${params.slug}`),
      $axios.$get(`http://127.0.0.1:8000/api/v1/categories`)
    ]
    const [
      {
        data: { data: posts }
      },
      {
        data: { data: tags }
      }
    ] = await Promise.all(promiseArr)
    return { posts, tags }
  }
}
</script>

<style></style>
