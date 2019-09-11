<template>
  <div>
    <navbar></navbar>
    <nuxt />
    <navbottom></navbottom>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Navbottom from '~/components/footer.vue'
export default {
  components: {
    Navbar,
    Navbottom
  }
}
</script>

<style></style>
