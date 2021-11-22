<template>
  <div class="form section">
    <div class="container">
      <div class="section-inner min-vh-100 d-flex flex-column">
        <div class="flex-grow-1">
          <div
            v-if="isSubmissionSuccessful"
          >
            <div class="alert section__alert">
              <div class="d-flex align-center">
                <div class="flex-child">
                  <img class="alert__img" src="@/assets/img/success.svg" alt="success">
                </div>
              
                <div class="flex-child">
                  <p class="alert__text">Ваша заявка принята и находится на стадии обработки.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="form__group">
            <h2 class="h2 section__h2">Информация об организаторе</h2>

            <label class="input-group">
              <p class="input-group__text">Организатор</p>

              <input type="text" class="input-group__input input-text w-100">
            </label>
          </div>

          <div class="form__group">
            <h2 class="h2 section__h2">Контактные данные</h2>

            <div class="d-flex">
              <div class="flex-child flex-child-4">
                <label class="input-group">
                  <p class="input-group__text">Телефон</p>

                  <input type="text" class="input-group__input input-text w-100">
                </label>
              </div>

              <div class="flex-child flex-child-4">
                <label class="input-group">
                  <p class="input-group__text">E-mail</p>

                  <input type="text" class="input-group__input input-text w-100">
                </label>
              </div>

              <div class="flex-child flex-child-4">
                <label class="input-group">
                  <p class="input-group__text">Город организатора</p>

                  <input type="text" class="input-group__input input-text w-100">
                </label>
              </div>
            </div>
          </div>

          <div class="form__group">
            <h2 class="h2 section__h2">Общая информация</h2>

            <label class="input-group">
              <p class="input-group__text">Название</p>

              <input type="text" class="input-group__input input-text w-100">
            </label>
          </div>

          <div class="form__group">
            <h2 class="h2 section__h2">Фотография</h2>

            <input type="file"
              v-on:change="setImage"
            >
          </div>
        </div>

        <div class="d-flex">
          <div class="flex-child">
            <button class="btn" type="reset">
              <span>Отменить</span>
            </button>
          </div>

          <div class="flex-child">
            <button class="btn btn_filled" type="button"
              v-on:click="$emit('next')"
            >
              <span>Далее</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'isSubmissionSuccessful' ],

    methods: {
      setImage(event) {
        this.$emit('setImage', event)
      }
    }
  }
</script>
