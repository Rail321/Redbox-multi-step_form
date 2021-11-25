<template>
  <div class="main__content">
    <div class="main__body">
      <div class="notice form__notice">
        <div class="d-flex align-center notice__row">
          <div class="notice__col">
            <img src="@/assets/img/danger.svg" alt="icon">
          </div>

          <div class="flex-grow-1 notice__col">
            <p class="p p_notice">Проверьте ваше мероприятие на наличие ошибок, если все в порядке - отправляйте на модерацию.</p>
          </div>
        </div>
      </div>
      
      <div class="preview form__preview">
        <div class="row preview__row">
          <div class="col col-12 col-lg-5 preview__col">
            <div class="d-flex preview__inner-row">
              <div class="preview__inner-col">
                <div class="preview-rating preview__preview-rating d-flex align-center justify-center">
                  <p class="p p_notice text-white">{{ rating }}</p>
                </div>
              </div>

              <div class="flex-grow-1 preview__inner-col">
                <h1 class="h1 preview__h1">{{ name }}</h1>

                <div class="preview__info-group">
                  <ul class="info-list preview__info-list">
                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/adres.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info-big">{{ adress }}</p>
                      </div>
                    </li>
                    
                    <template
                      v-for="(datetime, key) of datetimes"
                      v-bind:key="key"
                    >
                      <li class="d-flex info-list__row info-list__item">
                        <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                          <img src="@/assets/img/date.svg" alt="icon">
                        </div>

                        <div class="flex-grow-1 info-list__col">
                          <p class="p p_info-big">{{ datetime.startDate }}, {{ datetime.endDate }}</p>
                        </div>
                      </li>
                      
                      <li class="d-flex info-list__row info-list__item">
                        <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                          <img src="@/assets/img/time.svg" alt="icon">
                        </div>

                        <div class="flex-grow-1 info-list__col">
                          <p class="p p_info-big">{{ datetime.startTime }}, {{ datetime.endTime }}</p>
                        </div>
                      </li>
                    </template>
                  </ul>
                </div>

                <div class="preview__info-group">
                  <h3 class="h3 preview__h3">Контакты</h3>

                  <ul class="info-list preview__info-list">
                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/phone.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info">{{ phone }}</p>
                      </div>
                    </li>

                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/mail.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info">{{ email }}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="preview__info-group">
                  <p class="h3 text-weight-normal">{{ organizer }}</p>
                  <p class="p p_special">Организатор мероприятия</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col col-12 col-lg-7 preview__col">
            <img class="preview__image" alt="preview"
              v-bind:src="imageUrl"
            >
          </div>
        </div>
      </div>
      
      <div class="text form__text">
        <p class="p text-justify">{{ text }}</p>
      </div>
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

<script>
  export default {
    props: [ 'organizer', 'phone', 'email', 'city', 'name', 'imageUrl', 'text', 'datetimes', 'rating', 'adress', 'previous']
  }
</script>