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
import _ from 'lodash'
import PostShort from '~/components/post-short.vue'
export default {
  components: {
    PostShort
  },
  head() {
    return {
      title: `Coder211 - Chuyên mục ${this.tag.name}`,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `Coder211.com - Chuyên mục ${this.tag.name}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.tag.name} - Trang chia sẽ kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer, đặc biệt là các ngôn ngữ HTML5, CSS, Javascript.`
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
          content: `Coder211.com - Chuyên mục ${this.tag.name}`
        },
        {
          property: 'og:description',
          content: `${this.tag.name} | Trang chia sẽ kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer, đặc biệt là các ngôn ngữ HTML5, CSS, Javascript.`
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
    const promiseArr = [
      $axios.$get(`/posts/category/${params.slug}`),
      $axios.$get(`/categories`)
    ]
    const [
      {
        data: { data: posts }
      },
      {
        data: { data: tags }
      }
    ] = await Promise.all(promiseArr)
    const tag = _.find(tags, (e) => e.slug === params.slug)
    return { posts, tags, tag }
  }
}
</script>

<style></style>
