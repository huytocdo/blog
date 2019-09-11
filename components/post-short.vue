<template>
  <!-- eslint-disable vue/no-v-html -->
  <article class="short-post">
    <nuxt-link :to="`/article/${post.slug}`" class="post-thumbnail">
      <img :src="post.thumbnail" :alt="post.title" class="thumbnail" />
    </nuxt-link>
    <div class="post-detail">
      <nuxt-link :to="`/article/${post.slug}`" class="post-detail__title">
        {{ post.title }}
      </nuxt-link>
      <p
        class="long-paragraph post-detail__description"
        v-html="post.description"
      ></p>
      <div class="post-detail__info">
        <div class="info__date">
          {{ post.date }}
        </div>
        <div class="info__duration">
          {{ post.duration }}
        </div>
        <!-- <div class="info__comment">
              <span class="icon"><i class="far fa-comment"></i></span>
              <span>1 bình luận</span>
            </div> -->
        <template v-for="tag in post.tags">
          <nuxt-link :key="tag._id" :to="`/tag/${tag.slug}`" class="info__tag">
            {{ `#${tag.name}` }}
          </nuxt-link>
        </template>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
