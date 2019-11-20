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
      <div class="medium-editor-container" v-html="post.html"></div>
      <!-- <div v-html="post.html"></div> -->
    </main>
    <posts-related :posts="post.related"></posts-related>
  </div>
</template>

<script>
import PostsRelated from '~/components/posts-related.vue'

export default {
  components: {
    PostsRelated
  },
  head() {
    return {
      title: `Coder211 - ${this.post.title}`,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `Coder211.com - ${this.post.title}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `Trang chia sẽ kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer, đặc biệt là các ngôn ngữ HTML5, CSS, Javascript.`
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'code, lap trinh web, web developer, lap trinh, lập trình, HTML5, CSS, Javascript, Frontend, Front-end, Back-end, Backend, Full-stack, fullstack'
        },
        {
          property: 'og:url',
          content: `${process.env.SITE_URL}${this.$route.path}`
        },
        { property: 'og:type', content: `website` },
        {
          property: 'og:title',
          content: `Coder211.com - Tổng hợp chuyên mục`
        },
        {
          property: 'og:description',
          content: `Trang chia sẽ kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer, đặc biệt là các ngôn ngữ HTML5, CSS, Javascript.`
        },
        {
          property: 'og:image',
          content: `${process.env.SITE_URL}/img/logo-thumbnail.jpg`
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' }
      ]
    }
  },
  async asyncData({ $axios, params }) {
    const {
      data: { data: post }
    } = await $axios.$get(`/posts/slug/${params.slug}`)
    return { post: post[0] }
  }
}
</script>

<style></style>
