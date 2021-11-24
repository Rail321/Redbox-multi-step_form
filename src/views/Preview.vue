<template>
  <div class="main__content">
    <div class="main__body">

    </div>
    <div class="main__footer">
      <div class="button-group">
        <div class="row button-group__row">
          <div class="col flex-grow-0 button-group__col">
            <button class="btn" type="button"
              v-on:click="$emit('previous')"
            >Назад</button>
          </div>
          
          <div class="col flex-grow-0 button-group__col">
            <button class="btn btn_filled" type="submit">Отправить на модерацию</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>