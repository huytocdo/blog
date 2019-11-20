<template>
  <main class="container">
    <template v-for="post in posts">
      <post-short :key="post._id" :post="post"></post-short>
    </template>
    <div class="read-more">
      <a v-if="!isEnd" @click="loadMore(page + 1)">Xem thêm</a>
    </div>
  </main>
</template>
<script>
import PostShort from '~/components/post-short.vue'
const LIMIT_POST = 10
export default {
  layout: 'fullTitle',
  components: {
    PostShort
  },
  head() {
    return {
      title: 'Coder211 - Chia sẽ kiến thức lập trình | Hạnh phúc là sẽ chia',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content:
            'Coder211.com - Chia sẽ các kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer.'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Coder211.com - Trang chia sẽ kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer, đặc biệt là các ngôn ngữ HTML5, CSS, Javascript.'
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
          content: `Coder211.com - Chia sẽ các kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer.`
        },
        {
          property: 'og:description',
          content: `Trang chủ - Trang chia sẽ kiến thức lập trình về Front-end, Back-end, Full-stack, Web Developer, đặc biệt là các ngôn ngữ HTML5, CSS, Javascript.`
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
  async asyncData({ $axios }) {
    const {
      data: { data: posts }
    } = await $axios.$get(`/posts?status=published&limit=${LIMIT_POST}&page=1`)
    return { posts, page: 1, loading: false, isEnd: false }
  },
  methods: {
    async loadMore(page) {
      this.page = page
      const {
        data: { data: posts },
        results
      } = await this.$axios.$get(
        `/posts?status=published&limit=${LIMIT_POST}&page=${page}`
      )
      if (results < LIMIT_POST) {
        this.isEnd = true
      }
      this.posts = this.posts.concat(posts)
    }
  }
}
</script>
<style></style>
