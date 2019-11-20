<template>
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
</template>

<script>
export default {
  head() {
    return {
      title: `Coder211 - Tổng hợp theo chuyên mục`,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `Coder211.com - Tổng hợp theo chuyên mục`
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
      data: { data: tags }
    } = await $axios.$get(`/categories`)
    return { tags }
  }
}
</script>

<style></style>
