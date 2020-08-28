<template>
  <main class="ctn">
    <Header />
    <span class="description">Just paste a tweet and choose a number of winners.</span>
    <form>
      <Field required placeholder="Link to text" value="" />
      <Field required placeholder="Link to text" value="" />
    </form>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Header from '@/components/Header.vue'
import Field from '@/components/Field.vue'

@Component({
  components: {
    Header,
    Field
  }
})
export default class Index extends Vue {
}
</script>

<style scoped>
  .ctn {
    padding: 25px;
  }

  .description {
    text-align: center;
    display: block;
  }
</style>
