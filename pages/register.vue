<template>
  <div>
    <register-area />
  </div>
</template>

<script>
import RegisterArea from "~~/components/login-register/RegisterArea.vue";

export default {
  components: {
    RegisterArea,
  },
  setup() {
    useHead({
      title: "สมัครสมาชิก",
    });
  },
};
</script>
<script setup>
// definePageMeta({
//   layout: false,
// });
</script>
