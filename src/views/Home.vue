<template>
  <Navbar/>
  <Pengumuman/>
  <Bottom/>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Navbar from "../components/Navbar.vue";
import Pengumuman from "../components/ListPengumuman.vue";
import Bottom from "../components/Bottom.vue";
export default defineComponent({
  name: "Home",
  components: {
    Navbar,Pengumuman,Bottom
  },
});
</script>
