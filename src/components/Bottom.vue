<template>
  <v-bottom-navigation :value="value" color="primary" grow>
    <v-btn>
      <span>Login</span>
    </v-btn>
    <v-btn @click="this.$router.push('/')">
      <span>Home</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>