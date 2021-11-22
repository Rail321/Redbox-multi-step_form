<template>
  <div class="section">
    <div class="container">
      <div class="section-inner min-vh-100 d-flex flex-column">
        <div class="flex-grow-1">
          <div class="alert section__alert">
            <div class="d-flex align-center">
              <div class="flex-child">
                <img class="alert__img" src="@/assets/img/danger.svg" alt="danger">
              </div>
            
              <div class="flex-child">
                <p class="alert__text">Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.</p>
              </div>
            </div>
          </div>

          <img alt="Preview"
            v-if="imageUrl"
            v-bind:src="imageUrl"
          >
        </div>

        <div class="d-flex">
          <div class="flex-child">
            <button class="btn" type="button"
              v-on:click="$emit('prev')"
            >
              <span>Назад</span>
            </button>
          </div>

          <div class="flex-child">
            <button class="btn btn_filled" type="submit">
              <span>Отправить на модерацию</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'imageUrl' ],
  }
</script>