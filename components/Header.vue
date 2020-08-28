<template>
  <header class="header">
    <h1 class="heading">
      Lucky Replies
    </h1>
    <TwitterBird />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import TwitterBird from '@/components/TwitterBird.vue'

@Component({
  components: {
    TwitterBird
  }
})
export default class Header extends Vue {
}
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }

  .heading {
    margin-left: 20px;
    font-size: 30px;
  }
</style>
