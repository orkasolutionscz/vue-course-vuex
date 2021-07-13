<template>
  <button @click="addCounter">Add 2</button>
</template>

<script>
export default {
  methods: {
    addCounter() {
      this.$store.commit('increment');
    },
  },
};
</script>
