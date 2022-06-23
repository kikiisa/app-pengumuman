<template>
  <Navbar/>
  <v-container>
      <v-row>
          <v-col md="12">

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
  created()
  {
    console.log(this.$route.params.id)
  },
  methods:{
      async getAll()
      {
          await axios.get("").then((response)=>{
              console.log(response)
          }).catch((error)=>{
              console.log(error)
          })
      }
  }



});
</script>