<template>
  <Navbar/>
  <v-container>
      <v-row v-for="x in result" :key="x.id_pengumuman" class="justify-center">
          <v-col md="8">
              <h1 class="text-center">{{ x.judul_pengumuman }}</h1>
              <hr>
              <div class="pengumuman mt-4">
                  {{ x.isi_pengumuman }}
              </div>
              <hr class="mt-4">
              <div class="mt-4">Di Publikasikan : {{x.tgl_pengumuman}} oleh <strong class="date">{{ x.nama_lengkap }}</strong></div>
          </v-col>
      </v-row>
  </v-container>
  <Bottom/>
</template>

<script>
import { defineComponent } from "vue";
import axios from '../url/url'
// Components
import Navbar from "../components/Navbar.vue";
import Bottom from "../components/Bottom.vue";
export default defineComponent({
  name: "Home",
  components: {
    Navbar,Bottom
  },
  data()
  {
        return{
            result:[],
        }
  },
  created()
  {
      this.getAll();
  },
  methods:{
      async getAll()
      {
            const id = this.$route.params.id
            await axios.get(`Pengumuman/getPost?id=${id}`).then((response)=>{
                this.result = response.data.data
            }).catch((error)=>{
                console.log(error);
            })
      }
  }



});
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap');
    .pengumuman{
        font-family: 'Quicksand', sans-serif;
        text-align: justify;
        font-weight: 90px;
        
    }
    .date{
        font-style: italic;
    }
</style>