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
                  <p class="p p_notice text-white">16+</p>
                </div>
              </div>

              <div class="flex-grow-1 preview__inner-col">
                <h1 class="h1 preview__h1">Чайный заголовок — писать не длиннее трёх строк</h1>

                <div class="preview__info-group">
                  <ul class="info-list preview__info-list">
                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/adres.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info-big">г. Казань, ул. Волкова, д. 7/29</p>
                      </div>
                    </li>
                    
                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/date.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info-big">21 окт. 2019 (пт), 21 окт. 2019 (пт)</p>
                      </div>
                    </li>
                    
                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/time.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info-big">17:30, 16:30</p>
                      </div>
                    </li>
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
                        <p class="p p_info">+7 (999) 888-77-66</p>
                      </div>
                    </li>

                    <li class="d-flex info-list__row info-list__item">
                      <div class="info-list__col info-list__col_icon flex-shrink-0 d-flex align-center justify-center">
                        <img src="@/assets/img/mail.svg" alt="icon">
                      </div>

                      <div class="flex-grow-1 info-list__col">
                        <p class="p p_info">example@mail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="preview__info-group">
                  <p class="h3 text-weight-normal">Coca-Cola</p>
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
        <p class="p text-justify">В лаборатории жгучих перцев соберём собственные аппараты для экстракции. Узнаем, чем на самом деле пахнет мята, почему красный перец такой жгучий и получим привычные для кухни запахи лабораторным способом. В лаборатории вареных яиц c помощью физико-химических методов вычислим идеальное время для варки куриного яйца. Отделим желток от белка, проведем качественное сравнение составов и узнаем все о стоимости выеденного яйца. В лаборатории консервированных ананасов познакомимся с тушенкой и разберемся в методах сохранения продуктов. Законсервируем парочку ананасов четырьмя разными способами и заберем все это домой, чтобы выяснить, какой метод консервации лучше. </p>
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
    props: [ 'imageUrl' ]
  }
</script>