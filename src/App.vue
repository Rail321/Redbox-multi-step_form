<template>
  <main class="main">
    <div class="container">
      <div class="content-wrapper">
        <form class="form">
          <div class="main__content">
            <div class="main__body">
              <div class="form__group">
                <h2 class="h2 form__h2">Информация об организаторе</h2>

                <label>
                  <h3 class="h3 form__h3">Организатор</h3>

                  <input class="form-control w-100" type="text" value="Coca-cola">
                </label>
              </div>
              
              <div class="contacts form__group">
                <h2 class="h2 form__h2">Контактные данные</h2>

                <div class="row contacts__row">
                  <div class="col col-12 col-lg-4 contacts__col">
                    <label>
                      <h3 class="h3 form__h3">Телефон</h3>

                      <input class="form-control w-100" type="text" value="+7 (999) 555-33-22">
                    </label>
                  </div>

                  <div class="col col-12 col-lg-4 contacts__col">
                    <label>
                      <h3 class="h3 form__h3">E-mail</h3>

                      <input class="form-control w-100" type="text" value="ivanov@mail.ru">
                    </label>
                  </div>

                  <div class="col col-12 col-lg-4 contacts__col">
                    <label>
                      <h3 class="h3 form__h3">Город организатора</h3>

                      <input class="form-control w-100" type="text" value="Казань">
                    </label>
                  </div>
                </div>
              </div>
              
              <div class="form__group">
                <h2 class="h2 form__h2">Общая информация</h2>

                <label>
                  <h3 class="h3 form__h3">Название</h3>
                  
                  <input class="form-control w-100" type="text">
                </label>
              </div>
              
              <div class="form__group">
                <h3 class="h3">Фотография</h3>
              </div>
              
              <div class="form__group form__group_big">
                <label>
                  <h3 class="h3 form__h3">Подробное описание</h3>
                  
                  <textarea class="form-control form-control_textarea w-100"></textarea>
                </label>
              </div>
              
              <div class="form__group form__group_end">
                даты, времи
              </div>
              
              <div class="important-info form__group form__group_end">
                <div class="row important-info__row">
                  <div class="col col-12 col-lg-6 important-info__col">
                    <label>
                      <h3 class="h3 form__h3">Рейтинг мероприятия</h3>
                      
                      <select class="form-control w-100">
                        <option selected>16+</option>
                      </select>
                    </label>
                  </div>

                  <div class="col col-12 col-lg-6 important-info__col">
                    <label>
                      <h3 class="h3 form__h3">Адрес мероприятия</h3>
                      
                      <input class="form-control w-100" type="text">
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
                    <button class="btn btn_filled" type="button">Далее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </form>
      </div>
    </div>
  </main>
</template>