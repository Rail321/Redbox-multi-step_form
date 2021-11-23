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
        v-bind:datetimes="datetimes"
        v-on:next="next"
        v-on:setImage="setImage"
        v-on:addDatetime="addDatetime"
        v-on:removeDatetime="removeDatetime"
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
        datetimes: [],
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

      addDatetime() {
        this.datetimes.push({id: Date.now()})
      },

      removeDatetime(datetime) {
        this.datetimes = this.datetimes.filter(datetimeElement => datetimeElement !== datetime)
      }
    },
  }
</script>