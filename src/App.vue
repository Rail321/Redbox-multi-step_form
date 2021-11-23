<template>
  <main class="main h-100">
    <form
      v-on:submit.prevent="submit"
      v-on:reset.prevent="reset"
    >
      <StepOne
        v-if="!isFormCompleted"
        v-bind:isSubmissionSuccessful="isSubmissionSuccessful"
        v-bind:imageUrl="imageUrl"
        v-on:next="next"
        v-on:setImage="setImage"
      />

      <StepTwo
        v-else
        v-bind:imageUrl="imageUrl"
        v-on:prev="prev"
      />
    </form>
  </main>
</template>

<script>
  import StepOne from './views/StepOne.vue'
  import StepTwo from './views/StepTwo.vue'

  export default {
    components: { StepOne, StepTwo },

    data() {
      return {
        isFormCompleted: false,
        isSubmissionSuccessful: false,

        imageUrl: null,
      }
    },

    methods: {
      next() {
        this.isFormCompleted = true
        this.isSubmissionSuccessful = false
      },

      reset() {
        this.isSubmissionSuccessful = false
      },

      prev() {
        this.isFormCompleted = false
      },

      submit() {
        this.isSubmissionSuccessful = true
        this.isFormCompleted = false
      },

      setImage(image) {
        if (image) {
          this.imageUrl = URL.createObjectURL(image)
        } else {
          this.imageUrl = ''
        }
      },
    },
  }
</script>

<style lang="scss">
  // Reset
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  html {
      height: 100%;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  // Variables
  $color-1: #F8F8FA;
  $color-2: #FFF;
  $color-3: #9B63F8;
  $color-4: #211536;
  $color-5: #CDB1FB;
  $color-6: #F8F8FE;
  $color-7: #351767;
  $hover-change: 10;
  $active-change: 20;
  $transition: 0.2s all;
  $col-padding: 10px;
  $border-radius: 4px;

  // Helpers
  .h-100 {
    height: 100%;
  }
  .min-vh-100 {
    min-height: 100vh;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .d-flex {
    display: flex;
    margin: -$col-padding;
  }
  .d-none {
    display: none;
  }
  .flex-column {
    flex-direction: column;
  }
  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .flex-child {
    padding: $col-padding;
  }
  .flex-child-4 {
    flex-basis: 33.33%;
  }
  .flex-grow-1 {
    flex-grow: 1;
  }
  .w-100 {
    width: 100%;
  }
  .position-relative {
    position: relative;
  }

  // UI
  .btn {
    display: inline-block;
    width: 285px;
    max-width: 100%;
    padding: 18px 19px;
    border-radius: $border-radius;
    border: 1px solid $color-3;
    color: $color-4;
    background-color: $color-2;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    &:hover {
      transition: $transition;
      border-color: darken($color-3, $hover-change);
      background-color: darken($color-2, $hover-change);
    }

    &_filled {
      background-color: $color-3;
      color: $color-2;

      &:hover {
        border-color: darken($color-3, $hover-change);
        background-color: darken($color-3, $hover-change);
      }
    }
  }
  .h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: $color-4;
  }
  .input-text {
    padding: 18px 25px;
    border: 1px solid $color-5;
    border-radius: $border-radius;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: $color-4;
  }

  // Main
  .main {
    background-color: $color-1;
  }

  // Section
  .section {
    &-inner {
      padding: 40px 30px 50px;
      background-color: $color-2;
    }
    &__alert{
      margin-bottom: 60px;
    }
    &__h2 {
      margin-bottom: 30px;
    }
  }

  // Alert
  .alert {
    padding: 20px 25px;
    background-color: $color-2;
    box-shadow: 0px 8px 25px rgba(155, 99, 248, 0.15);
    border-radius: $border-radius;

    &__img {
      max-width: 40px;
      max-height: 40px;
    }
    &__text {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: $color-4;
    }
  }

  // Form
  .form {
    &__group {
      margin-bottom: 40px;
    }
  }

  // Input-group
  .input-group {
    display: block;

    &__text {
      margin-bottom: 10px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: $color-4;
    }
    &__input {

    }
    &__file {
      max-width: 126px;
    }
    &__file-trigger {
      height: 126px;
      margin: 0;
      background-color: $color-6;
      border: 4px solid $color-5;
      border-radius: $border-radius;
      cursor: pointer;

      &:hover {
        transition: $transition;
        border-color: darken($color-5, $hover-change);
        background-color: darken($color-6, $hover-change);
      }
      &_active {
        border: none;
        cursor: default;
      }
    }
    &__file-trigger-img-wrapper {
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
      overflow: hidden;
    }
    &__file-trigger-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__file-trigger-reset {
      margin: 0;
      position: absolute;
      top: 0;
      bottom: auto;
      left: auto;
      right: 0;
      width: 30px;
      height: 30px;
      transform: translate(50%, -50%);
      border-radius: 50%;
      background-color: $color-7;
      cursor: pointer;

      &:hover {
        transition: $transition;
        background-color: darken($color-7, $hover-change);
      }
    }
    &__caption {
      padding-top: 10px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
      color: $color-4;
      opacity: 0.7;
    }
  }
</style>