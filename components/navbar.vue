<template>
  <header class="container header">
    <nuxt-link to="/">
      <img class="logo-top" src="/img/logo-600w.png" alt="Logo" />
    </nuxt-link>
    <!-- <h1 v-if="showTitle" class="heading-primary">211</h1> -->
    <!-- <h2 v-if="showSubtitle" class="long-paragraph">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat ducimus
      molestiae id mollitia eius aspernatur pariatur voluptate, quo, tempora
      modi, iste provident. Labore, quaerat! Inventore?
    </h2> -->
    <nav class="top-nav">
      <ul>
        <li class="top-nav__item">
          <nuxt-link to="/"
            ><span class="icon"><i class="fas fa-home"></i></span>Trang chủ
          </nuxt-link>
        </li>
        <!-- <li class="top-nav__item">
          <span class="icon"><i class="fab fa-facebook-square"></i></span>
          <a href="#">FB Page</a>
        </li> -->
        <li class="top-nav__item">
          <nuxt-link to="/tag"
            ><span class="icon"><i class="fas fa-code"></i></span>Tất cả chủ đề
          </nuxt-link>
        </li>
        <li class="top-nav__item">
          <nuxt-link to="/about"
            ><span class="icon"><i class="fab fa-connectdevelop"></i></span>
            Về tui
          </nuxt-link>
        </li>
        <!-- <li class="top-nav__item">
          <span class="icon"><i class="fas fa-link"></i></span>
          <a href="#">Blog hay</a>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: false
    },
    showSubtitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style></style>
