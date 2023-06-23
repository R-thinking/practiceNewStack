<template>
  <div class="home">
    <div v-if="isModal" class="container">
      <p>modal</p>
    </div>
    <button @click="isModal = true">showModal</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      isModal: false,
    };
  },
};
</script>
