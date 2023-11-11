<template>
  <HomeBanner />
  <HomeProject />
  <HomeNews />
</template>

<script setup>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

useHead({
  title: "ศูนย์ปฏิบัติการเทคโนโลยีอิเล็กทรอนิกส์อัจฉริยะและนวัตกรรมดิจิทัล",
  meta: [
    {
      name: "Technology Center For Smart Electronic and Digital Innovation",
      content: "",
    },
  ],
});

if (process.client) {
  if (localStorage.getItem("login")) {
    useToast("เข้าสู่ระบบเสร็จสิ้น", "success");
    localStorage.removeItem("login");
  }
}

definePageMeta({
  middleware: "auth",
});
</script>

<script>

export default {
  mixins: [SalScrollAnimationMixin],
};
</script>
