<template>
  <v-app>
    <v-col>
      <v-row>
        <p class="text-uppercase" style="font-size:40px;">we are</p>
      </v-row>
      <v-row>
        <p class="text-uppercase">creative</p>
      </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <div class="line"></div>
        <v-btn></v-btn>
      </v-row>
    </v-col>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.line {
  margin: 10px auto 40px;
  width: 200px;
  height: 10px;
  background: linear-gradient(to right, #27a6e3 0%, #6200ab 100%);
}
</style>
