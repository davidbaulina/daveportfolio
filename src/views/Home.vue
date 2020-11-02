<template>
  <Header />
  <Gallery />
</template>
<script>
import Header from '@/components/Header.vue';
import Gallery from '@/components/Gallery.vue';
export default {
  name: 'home',
  components: {
    Header,
    Gallery,
  },
};
</script>
