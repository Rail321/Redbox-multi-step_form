<template>
  <main class="main">
    <div class="container">
      <div class="content-wrapper">
        <form class="form"
          v-on:submit.prevent
        >
          <Form
            v-if="!isValidationSuccessfull"
            v-bind:imageUrl="imageUrl"
            v-bind:datetimes="datetimes"
            v-on:next="next"
            v-on:setImage="setImage"
            v-on:addDatetime="addDatetime"
            v-on:removeDatetime="removeDatetime"
          />

          <Preview
            v-else
            v-bind:imageUrl="imageUrl"
            v-on:previous="previous"
          />
        </form>
      </div>
    </div>
  </main>
</template>

<script>
  import Form from './views/Form.vue'
  import Preview from './views/Preview.vue'

  export default {
    components: { Form, Preview },

    data() {
      return {
        isValidationSuccessfull: false,
        imageUrl: '',
        datetimes: [],
      }
    },

    methods: {
      next() {
        this.isValidationSuccessfull = true
      },

      previous() {
        this.isValidationSuccessfull = false
      },

      setImage(image) {
        if (image) {
          this.imageUrl = URL.createObjectURL(image)
        } else {
          this.imageUrl = ''
        }
      },

      addDatetime(datetime) {
        this.datetimes.push(datetime)
      },

      removeDatetime(datetime) {
        this.datetimes = this.datetimes.filter(currentDatetime => currentDatetime !== datetime)
      }
    },
  }
</script>
