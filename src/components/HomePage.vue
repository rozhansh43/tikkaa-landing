<template>
 <div id="app" class="bg-secondary">
    <b-container class="pt-5 d-md-block d-none">
      <b-row>
        <img src="@/assets/logo1.png" alt="logo" class="img-fluid mx-auto logo"/>
      </b-row>
    </b-container>

    <b-container fluid class="py-5">
      <b-row>
        <b-col cols="12" md="6">
          <!-- <div class="main-image">
            <img :src="mainImageSrc">
          </div>
        
          <div v-for="img in images" :key="img.id" class="item">
            <img :src="img.image">
          </div> -->
        
        <b-row class="py-5">
          <b-col cols="6" md="12" class="order-md-2 d-flex align-items-center justify-content-center">
            <h2 class="text-white text-center my-5">
              بهترین اساتید زبان
            </h2>
          </b-col>

          <b-col cols="6" md="12" class="order-md-1">
            <div class="d-flex justify-content-center">
              <carousel :perPageCustom="[[0, 1], [768, 1], [1024,1]]">
                <slide>
                  <img src="@/assets/1.png"  class="img-fluid"/>
                </slide>

                <slide>
                  <img src="@/assets/2.png"  class="img-fluid"/>
                </slide>

                <slide>
                  <img src="@/assets/3.png"  class="img-fluid"/>
                </slide>

                <slide>
                  <img src="@/assets/4.png"  class="img-fluid"/>
                </slide>
              </carousel>
            </div>
          </b-col>
        </b-row>

        </b-col>

        <b-col cols="12" md="4" class="bg-light border-right p-5">
          <div>
            <h6 class="h1">
              اعتبار رایگان
            </h6>

            <h5 class="text-success h1">
              50,000
            </h5>

            <h6 class="h1">
              تومان
            </h6>

            <p class="h5 my-5">
              برای رزرو کلاس شماره خود را وارد نمایید.
            </p>

            <form 
              type="tel"
              placeholder="0912*****55"
              @submit.prevent="showed"
              class="py-3"
            >
              <label class="position-absolute text-left text-muted d-none d-md-block">
                تلفن همراه
              </label>

              <input 
                v-model="phone" 
                maxlength="9" 
                @keyup.delete="limit" 
                class="position-relative w-100 direction-ltr"
              >

              <div class="py-md-3">
                <button type="submit" variant="success" v-if="!show" class="text-white mt-4 w-100">
                  ثبت نام
                </button>
              </div>
            </form>

            <b-row v-if="show">
              <b-col cols="12" md="6" class="pb-3 pb-0">
                <input placeholder="نام" class="w-100">
              </b-col>

              <b-col cols="12" md="6">
                <input placeholder="نام خانوادگی" class="w-100"> 
              </b-col>

              <button type="submit" variant="success"  class="text-white mt-4 w-100">
                ثبت نام
              </button>
            </b-row>
          </div>
        </b-col>

        <b-col md="2" class="bg-light">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      images: [],
      mainImageSrc: null,
      phone: '09',
      show: false
    }
  },
  methods: {
    Check() {
      var x = this.phone.slice(1,3)
      console.log(x)
    },
    showed () {
      if (this.phone.length == 9) {
        this.show = true
      }
    },
    limit () {
      if (this.phone.length<3) {
        this.phone='09'
      }
    }
  },
  created () {
    let self = this
    this.images = [
       {
          id: '23',
          image: 'http://example.com/img.jpg'
       },
       {
          id: '32',
          image: '@/assets/2.png'
       },
       {
          id: '45',
          image: '@/assets/1.png'
       },
    ]
    setInterval(function(){ 
        self.mainImageSrc = self.images[Math.floor(Math.random()*self.images.length)].image;
    }, 5000);
  }
}
</script>

<style scoped>
  .logo {
    width: 500px;
  }

  .border-right {
    border-top-right-radius: 38px;
    border-bottom-right-radius: 38px;
  }

  button {
    background-color: #3deac9!important;
    border: none;
    border-radius: 50px;
    padding: 10px;
  }

  .text-success {
    color:#3deac9!important;
  }

  .h1 {
    font-size: 50px;
  }
  input {
    border: none;
    border-bottom: 3px solid lightgrey;
   background:transparent!important
  }
  @media screen and (max-width: 768px) {
    .border-right {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  .VueCarousel {
    direction: ltr;
  }
  .direction-ltr {
    direction: ltr
  }

  .VueCarousel-slide {
    display:flex;
    justify-content:center;
  }
  label {
    right: 55%;
  }

</style>
