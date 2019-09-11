<template>
  <div>
    <main class="container category">
      <h1 class="heading-primary category__heading">
        #elixir
      </h1>
      <article class="short-post">
        <a href="#" class="post-thumbnail">
          <img
            src="/img/new-tour-4.jpg"
            alt="Post Thumbnail"
            class="thumbnail"
          />
        </a>
        <div class="post-detail">
          <a class="post-detail__title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            exercitationem!</a
          >
          <p class="long-paragraph post-detail__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            ratione odio alias beatae ipsum et! Facere nulla deserunt ipsum.
            Illo, atque maiores? Nihil unde rem ut cum iusto mollitia culpa
            deserunt illo est eveniet deleniti quaerat ipsam placeat hic libero,
            quod asperiores earum nam delectus autem qui praesentium, architecto
            voluptatum?
          </p>
          <div class="post-detail__info">
            <div class="info__date">
              CN, 26 thg 5, 2019
            </div>
            <div class="info__duration">
              5 phút đọc
            </div>
            <!-- <div class="info__comment">
            <span class="icon"><i class="far fa-comment"></i></span>
            <span>1 bình luận</span>
          </div> -->
            <a href="#" class="info__tag">
              #ERLANG
            </a>
            <a href="#" class="info__tag">
              #ELIXIR
            </a>
          </div>
        </div>
      </article>
      <article class="short-post">
        <a href="#" class="post-thumbnail">
          <img
            src="/img/new-tour-2.jpg"
            alt="Post Thumbnail"
            class="thumbnail"
          />
        </a>
        <div class="post-detail">
          <a class="post-detail__title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            exercitationem!</a
          >
          <p class="long-paragraph post-detail__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            ratione odio alias beatae ipsum et! Facere nulla deserunt ipsum.
            Illo, atque maiores? Nihil unde rem ut cum iusto mollitia culpa
            deserunt illo est eveniet deleniti quaerat ipsam placeat hic libero,
            quod asperiores earum nam delectus autem qui praesentium, architecto
            voluptatum?
          </p>
          <div class="post-detail__info">
            <div class="info__date">
              CN, 26 thg 5, 2019
            </div>
            <div class="info__duration">
              5 phút đọc
            </div>
            <!-- <div class="info__comment">
            <span class="icon"><i class="far fa-comment"></i></span>
            <span>1 bình luận</span>
          </div> -->
            <a href="#" class="info__tag">
              #ERLANG
            </a>
            <a href="#" class="info__tag">
              #ELIXIR
            </a>
          </div>
        </div>
      </article>
      <article class="short-post">
        <a href="#" class="post-thumbnail">
          <img
            src="/img/new-tour-3.jpg"
            alt="Post Thumbnail"
            class="thumbnail"
          />
        </a>
        <div class="post-detail">
          <a class="post-detail__title"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            exercitationem!</a
          >
          <p class="long-paragraph post-detail__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
            ratione odio alias beatae ipsum et! Facere nulla deserunt ipsum.
            Illo, atque maiores? Nihil unde rem ut cum iusto mollitia culpa
            deserunt illo est eveniet deleniti quaerat ipsam placeat hic libero,
            quod asperiores earum nam delectus autem qui praesentium, architecto
            voluptatum?
          </p>
          <div class="post-detail__info">
            <div class="info__date">
              CN, 26 thg 5, 2019
            </div>
            <div class="info__duration">
              5 phút đọc
            </div>
            <!-- <div class="info__comment">
            <span class="icon"><i class="far fa-comment"></i></span>
            <span>1 bình luận</span>
          </div> -->
            <a href="#" class="info__tag">
              #ERLANG
            </a>
            <a href="#" class="info__tag">
              #ELIXIR
            </a>
          </div>
        </div>
      </article>
    </main>
    <section class="container all-tags">
      <h2 class="heading-tertiary">Tags</h2>
      <div class="all-tags__block">
        <a href="#" class="all-tags__items">#algorithm</a>
        <a href="#" class="all-tags__items">#erlang</a>
        <a href="#" class="all-tags__items">#back-end</a>
        <a href="#" class="all-tags__items">#conference</a>
        <a href="#" class="all-tags__items">#opinion</a>
        <a href="#" class="all-tags__items">#algorithm</a>
        <a href="#" class="all-tags__items">#back-end</a>
        <a href="#" class="all-tags__items">#conference</a>
        <a href="#" class="all-tags__items">#opinion</a>
        <a href="#" class="all-tags__items">#css</a>
        <a href="#" class="all-tags__items">#back-end</a>
        <a href="#" class="all-tags__items">#book-preview</a>
        <a href="#" class="all-tags__items">#opinion</a>
        <a href="#" class="all-tags__items">#back-end</a>
        <a href="#" class="all-tags__items">#erlang</a>
        <a href="#" class="all-tags__items">#conference</a>
        <a href="#" class="all-tags__items">#opinion</a>
        <a href="#" class="all-tags__items">#team-work</a>
      </div>
    </section>
  </div>
</template>

<script>
import { posts } from '~/samplePost.json'
export default {
  data: () => {
    return {
      posts
    }
  }
}
</script>

<style></style>
