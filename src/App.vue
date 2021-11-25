<template>
  <main class="main">
    <div class="container">
      <div class="content-wrapper">
        <form class="form"
          v-on:submit.prevent="submitForm"
          v-on:reset.prevent="resetForm"
        >
          <Form
            v-if="!isValidationSuccessfull"
            v-bind:ratings="ratings"
            v-bind:organizer="organizer"
            v-bind:phone="phone"
            v-bind:email="email"
            v-bind:city="city"
            v-bind:name="name"
            v-bind:imageUrl="imageUrl"
            v-bind:text="text"
            v-bind:datetimes="datetimes"
            v-bind:rating="rating"
            v-bind:adress="adress"
            v-on:next="next"
            v-on:setOrganizer="setOrganizer"
            v-on:setPhone="setPhone"
            v-on:setEmail="setEmail"
            v-on:setCity="setCity"
            v-on:setName="setName"
            v-on:setText="setText"
            v-on:setRating="setRating"
            v-on:setAdress="setAdress"
            v-on:setImage="setImage"
            v-on:addDatetime="addDatetime"
            v-on:updateDatetime="updateDatetime"
            v-on:removeDatetime="removeDatetime"
          />

          <Preview
            v-else
            v-bind:organizer="organizer"
            v-bind:phone="phone"
            v-bind:email="email"
            v-bind:city="city"
            v-bind:name="name"
            v-bind:imageUrl="imageUrl"
            v-bind:text="text"
            v-bind:datetimes="datetimes"
            v-bind:rating="rating"
            v-bind:adress="adress"
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
        ratings: [],

        organizer: 'Coca-Cola',
        phone: '+7 (999) 888-77-66',
        email: 'example@mail.com',
        city: 'Казань',
        name: 'Чайный заголовок — писать не длиннее трёх строк',
        imageUrl: 'https://www.vladtime.ru/uploads/posts/2017-02/1487141851_1.jpg',
        text: 'В лаборатории жгучих перцев соберём собственные аппараты для экстракции. Узнаем, чем на самом деле пахнет мята, почему красный перец такой жгучий и получим привычные для кухни запахи лабораторным способом. В лаборатории вареных яиц c помощью физико-химических методов вычислим идеальное время для варки куриного яйца. Отделим желток от белка, проведем качественное сравнение составов и узнаем все о стоимости выеденного яйца. В лаборатории консервированных ананасов познакомимся с тушенкой и разберемся в методах сохранения продуктов. Законсервируем парочку ананасов четырьмя разными способами и заберем все это домой, чтобы выяснить, какой метод консервации лучше.',
        datetimes: [
          {startDate: '2019-08-21', startTime: '17:30', endDate: '2019-08-21', endTime: '16:30'},
        ],
        rating: '16+',
        adress: 'г. Казань, ул. Волкова, д. 7/29',
      }
    },

    async mounted() {
      try {
        const response = await fetch('http://tesstwork.rdbx24.ru/api/')
        const data = await response.json()
        this.ratings = data.result
      } catch(error) {
        console.error(error)
        this.ratings = [ { "id": 1, "title": "1+" }, { "id": 2, "title": "6+" }, { "id": 3, "title": "12+" }, { "id": 4, "title": "16+" }, { "id": 5, "title": "18+" }, { "id": 6, "title": "21+" }, { "id": 7, "title": "23+" } ]
      }
    },

    methods: {
      next() {
        window.scrollTo(0, 0)
        this.isValidationSuccessfull = true
      },

      previous() {
        window.scrollTo(0, 0)
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
        this.datetimes.push({
          startDate: datetime.startDate,
          startTime: datetime.startTime,
          endDate: datetime.endDate,
          endTime: datetime.endTime,
        })
      },

      updateDatetime(key, datetime) {
        console.log(key, datetime)
        this.datetimes[key] = datetime
      },

      removeDatetime(datetime) {
        this.datetimes = this.datetimes.filter(currentDatetime => currentDatetime !== datetime)
      },

      resetForm() {
        this.datetimes = []
        this.organizer = this.phone = this.email = this.city = this.name = this.imageUrl = this.text =  this.rating = this.adress = ''
        this.isValidationSuccessfull = false
      },

      submitForm() {
        const body = { organizer: this.organizer, phone: this.phone, email: this.email, city: this.city, name: this.name, imageUrl: this.imageUrl, text: this.text , datetimes: this.datetimes, rating: this.rating, adress: this.adress }
        
        this.resetForm()
      },

      setOrganizer(value) {
        this.organizer = value
      },

      setPhone(value) {
        this.phone = value
      },

      setEmail(value) {
        this.email = value
      },

      setCity(value) {
        this.city = value
      },

      setName(value) {
        this.name = value
      },

      setText(value) {
        this.text = value
      },

      setRating(value) {
        console.log(value)
        this.rating = value
      },

      setAdress(value) {
        this.adress = value
      },

    },
  }
</script>
