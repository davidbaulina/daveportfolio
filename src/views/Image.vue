<template>
    <div>
        <Gallery />
        <Image />
    </div>
</template>
<script>
import Image from '@/components/Image.vue';
import Gallery from '@/components/Gallery.vue';
export default {
  name: 'image',
  components: {
    Gallery,
    Image,
  },
};
</script>