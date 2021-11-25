<template>
  <div class="main__content">
    <div class="main__body">
      <div class="form__group">
        <h2 class="h2 form__h2">Информация об организаторе</h2>
        
        <label>
          <h3 class="h3 form__h3">Организатор</h3>
          
          <input class="form-control w-100" type="text"
            v-bind:value="organizer"
            v-on:input="$emit('setOrganizer', $event.target.value)"
          >
        </label>
      </div>
      
      <div class="contacts form__group">
        <h2 class="h2 form__h2">Контактные данные</h2>
        
        <div class="row contacts__row">
          <div class="col col-12 col-lg-4 contacts__col">
            <label>
              <h3 class="h3 form__h3">Телефон</h3>
              
              <input class="form-control w-100" type="text"
                v-bind:value="phone"
                v-on:input="$emit('setPhone', $event.target.value)"
                v-maska="'+7 (###) ###-##-##'"
              >
            </label>
          </div>
          
          <div class="col col-12 col-lg-4 contacts__col">
            <label>
              <h3 class="h3 form__h3">E-mail</h3>
              
              <input class="form-control w-100" type="text"
                v-bind:value="email"
                v-on:input="$emit('setEmail', $event.target.value)"
                v-maska="'X*@A*.A*'"
              >
            </label>
          </div>
          
          <div class="col col-12 col-lg-4 contacts__col">
            <label>
              <h3 class="h3 form__h3">Город организатора</h3>
              
              <input class="form-control w-100" type="text"
                v-bind:value="city"
                v-on:input="$emit('setCity', $event.target.value)"
              >
            </label>
          </div>
        </div>
      </div>
      
      <div class="form__group">
        <h2 class="h2 form__h2">Общая информация</h2>
        
        <label>
          <h3 class="h3 form__h3">Название</h3>
          
          <input class="form-control w-100" type="text"
            v-bind:value="name"
            v-on:input="$emit('setName', $event.target.value)"
          >
        </label>
      </div>
      
      <div class="photo form__group">
        <h3 class="h3 form__h3_big-indent">Фотография</h3>
        
        <div class="photo__wrapper"
          v-if="!imageUrl"
        >
          <input class="photo__input" type="file"
            ref="imageFileInput"
            v-on:change="setImage"
          >
          
          <div class="input-image input-image_empty photo__body d-flex justify-center align-center"
            v-on:click="$refs.imageFileInput.click()"
          >
            <img src="@/assets/img/photo.svg" alt="icon">
          </div>
          
          <p class="p p_caption">Главная фотография (обложка мероприятия)</p>
        </div>

        <div class="photo__wrapper position-relative"
          v-else
        >
          <div class="input-image input-image_selected photo__body">
            <img class="input-image__photo" alt="image"
              v-bind:src="imageUrl"
            >
          </div>

          <div class="close photo__reset position-absolute position-reset d-flex justify-center align-center"
            v-on:click="resetImage"
          >
            <img src="@/assets/img/close.svg" alt="reset">
          </div>
          
          <p class="p p_caption">Главная фотография (обложка мероприятия)</p>
        </div>
      </div>
      
      <div class="form__group form__group_big">
        <label>
          <h3 class="h3 form__h3">Подробное описание</h3>
          
          <textarea class="form-control form-control_textarea w-100"
            v-bind:value="text"
            v-on:input="$emit('setText', $event.target.value)"
          ></textarea>
        </label>
      </div>
      
      <div class="datetime form__group form__group_end">
        <ul class="datetime__list"
          v-if="datetimes.length"
        >
          <li class="datetime__list-item"
            v-for="(datetime, key) of datetimes"
            v-bind:key="key"
          >
            <div class="datetime-item datetime-item_wrapped position-relative">
              <div class="row datetime-item__row datetime-item__row_little justify-space-between flex-lg-nowrap">
                <div class="col datetime-item__col datetime-item__col_little flex-shrink-1">
                  <div class="row datetime-item__inner-row">
                    <div class="col col-12 col-md-6 datetime-item__inner-col">
                      <label>
                        <h3 class="h3 form__h3">Дата начала</h3>
                        
                        <input class="form-control w-100" type="date"
                          v-model="datetime.startDate"
                          v-on:change="updateDatetime(key, datetime)"
                        >
                      </label>
                    </div>

                    <div class="col col-12 col-md-6 datetime-item__inner-col">
                      <label>
                        <h3 class="h3 form__h3">Время начала</h3>
                        
                        <input class="form-control w-100" type="time"
                          v-model="datetime.startTime"
                          v-on:change="updateDatetime(key, datetime)"
                        >
                      </label>
                    </div>
                  </div>
                </div>

                <div class="col flex-shrink-1 flex-grow-1 d-none d-lg-flex d-flex flex-column">
                  <div class="d-flex flex-column flex-grow-1">
                    <div class="h3 form__h3">&nbsp;</div>
                          
                    <div class="datetime__list-spacer flex-grow-1 d-flex justify-center align-center">
                      <div class="spacer"></div>
                    </div>
                  </div>
                </div>

                <div class="col datetime-item__col datetime-item__col_little flex-shrink-1">
                  <div class="row datetime-item__inner-row">
                    <div class="col col-12 col-md-6 datetime-item__inner-col">
                      <label>
                        <h3 class="h3 form__h3">Дата окончания</h3>
                        
                        <input class="form-control w-100" type="date"
                          v-model="datetime.endDate"
                          v-on:change="updateDatetime(key, datetime)"
                        >
                      </label>
                    </div>

                    <div class="col col-12 col-md-6 datetime-item__inner-col">
                      <label>
                        <h3 class="h3 form__h3">Время окончания</h3>
                        
                        <input class="form-control w-100" type="time"
                          v-model="datetime.endTime"
                          v-on:change="updateDatetime(key, datetime)"
                        >
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="close datetime__reset position-absolute position-reset d-flex justify-center align-center"
                v-on:click="$emit('removeDatetime', datetime)"
              >
                <img src="@/assets/img/close.svg" alt="remove">
              </div>
            </div>
          </li>
        </ul>

        <div class="datetime-item datetime__new-item">
          <div class="row datetime-item__row justify-space-between flex-lg-nowrap">
            <div class="col datetime-item__col flex-shrink-1">
              <div class="row datetime-item__inner-row">
                <div class="col col-12 col-md-6 datetime-item__inner-col">
                  <label>
                    <h3 class="h3 form__h3">Дата начала</h3>
                    
                    <div class="custom">
                      <input class="form-control custom__date w-100" type="date"
                        v-model="datetimeForm.startDate"
                      >
                    </div>
                  </label>
                </div>

                <div class="col col-12 col-md-6 datetime-item__inner-col">
                  <label>
                    <h3 class="h3 form__h3">Время начала</h3>
                    
                    <input class="form-control w-100" type="time"
                      v-model="datetimeForm.startTime"
                    >
                  </label>
                </div>
              </div>
            </div>

            <div class="col flex-shrink-1 flex-grow-1 d-none d-lg-flex d-flex flex-column">
              <div class="d-flex flex-column flex-grow-1">
                <div class="h3 form__h3">&nbsp;</div>
                      
                <div class="flex-grow-1 d-flex justify-center align-center">
                  <div class="spacer"></div>
                </div>
              </div>
            </div>

            <div class="col datetime-item__col flex-shrink-1">
              <div class="row datetime-item__inner-row">
                <div class="col col-12 col-md-6 datetime-item__inner-col">
                  <label>
                    <h3 class="h3 form__h3">Дата окончания</h3>
                    
                    <input class="form-control w-100" type="date"
                      v-model="datetimeForm.endDate"
                    >
                  </label>
                </div>

                <div class="col col-12 col-md-6 datetime-item__inner-col">
                  <label>
                    <h3 class="h3 form__h3">Время окончания</h3>
                    
                    <input class="form-control w-100" type="time"
                      v-model="datetimeForm.endTime"
                    >
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn w-auto" type="button"
          v-on:click="addDatetime"
        >+ Добавить дату</button>
      </div>
      
      <div class="important-info form__group form__group_end">
        <div class="row important-info__row">
          <div class="col col-12 col-lg-6 important-info__col">
            <label>
              <h3 class="h3 form__h3">Рейтинг мероприятия</h3>
              
              <div class="custom custom_select">
                <select class="form-control custom__select w-100"
                  v-bind:value="rating"
                  v-on:input="$emit('setRating', $event.target.value)"
                >
                  <option
                    v-for="rating in ratings"
                    v-bind:key="rating.id"
                    v-bind:value="rating.title"
                  >{{ rating.title }}</option>
                </select>
              </div>
            </label>
          </div>
          
          <div class="col col-12 col-lg-6 important-info__col">
            <label>
              <h3 class="h3 form__h3">Адрес мероприятия</h3>
              
              <input class="form-control w-100" type="text"
                v-bind:value="adress"
                v-on:input="$emit('setAdress', $event.target.value)"
              >
            </label>
          </div>
        </div>
      </div>
    </div>
    
    <div class="main__footer">
      <div class="button-group">
        <div class="row button-group__row">
          <div class="col flex-grow-0 button-group__col">
            <button class="btn" type="reset">Отменить</button>
          </div>
          
          <div class="col flex-grow-0 button-group__col">
            <button class="btn btn_filled" type="button"
              v-on:click="$emit('next')"
            >Далее</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ 'ratings', 'organizer', 'phone', 'email', 'city', 'name', 'imageUrl', 'text', 'datetimes', 'rating', 'adress', 'previous'],

    data() {
      return {
        datetimeForm: {startDate: null, startTime: null, endDate: null, endTime: null},
      }
    },

    methods: {
      setImage() {
        const [ image ] = this.$refs.imageFileInput.files

        if (image) {
          this.$emit('setImage', image)
        }
      },

      resetImage() {
        this.$emit('setImage', '')
      },

      addDatetime() {
        if (this.datetimeForm.startDate && this.datetimeForm.startTime && this.datetimeForm.endDate && this.datetimeForm.endTime) {
          this.$emit('addDatetime', this.datetimeForm)
          this.datetimeForm.startDate = this.datetimeForm.startTime = this.datetimeForm.endDate = this.datetimeForm.endTime = null
        }
      },

      updateDatetime(key, datetime) {
        this.$emit('updateDatetime', key, datetime)
      }
    }    
  }
</script>