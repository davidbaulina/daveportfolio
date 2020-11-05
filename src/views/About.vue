<template>
    <Header />
    <section>
        <div class="container">
      <h1 class="title">About</h1>
      <h2 class="subtitle">
        A simple <strong>Vue</strong> project taking advantage of the <strong>vue-router</strong> and with <strong>Bulma</strong> as CSS framework.
      </h2>
    </div>
    </section>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  name: 'about',
  components: {
    Header,
  },
};
</script>

<style>
  section {
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }
</style>