<template>
  <input v-model="value" :type="type" :placeholder="placeholder" class="input" :required="required">
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

type Value = String | Number

@Component
export default class Field extends Vue {
  @Prop({ type: String, default: 'text', required: false }) readonly type!: string
  @Prop({ type: String, required: true }) readonly placeholder!: string
  @Prop() readonly value!: Value
  @Prop({ type: Boolean, default: true, required: false }) required!: boolean
}
</script>

<style scoped>
  .input {
    max-width: 430px;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    transition: all 100ms linear 0s;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    -webkit-writing-mode: horizontal-tb !important;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    margin: 10px 0;
  }

  .input::placeholder,
  .input::-webkit-input-placeholder,
  .input:-ms-input-placeholder {
    color: var(--white);
  }

  .input:focus {
    background-color: rgba(255, 255, 255, 0.25)
  }
</style>
