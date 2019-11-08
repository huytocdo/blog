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
  async asyncData({ $axios, params }) {
    const {
      data: { data: tags }
    } = await $axios.$get(`/categories`)
    return { tags }
  }
}
</script>

<style></style>
