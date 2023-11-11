<template>
  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="row">
      </div>
    </div>
    <div class="container" v-if="items.length != 0">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <!-- <div class="col-xl-12"> -->
                <NewsListItem
                  v-for="(it, i) in items"
                  class="col-lg-4"
                  :key="i"
                  :item="{
                    link: 'services/',
                    id: it.id,
                    title: it.title,
                    file: it.service_file,
                    created: it.created_service,
                  }"
                />
            <!-- </div> -->
            <div class="col-xxl-12">
              <div class="tp-pagination mt-30">
                <blog-pagination
                  :totalPage="totalPage"
                  :currentPage="currentPage"
                  @update:currentPage="currentPage = $event"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
// Import
import NewsListItem from "~/components/list/GridItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
// Variable
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(12);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
  is_publish: 1,
});

const selectOptions = ref({
  perPage: [
    { title: "20", value: 20 },
    { title: "40", value: 40 },
    { title: "60", value: 60 },
  ],
  years: [],
  months: [
    { title: "มกราคม", title_en: "January", value: "01" },
    { title: "กุมภาพันธ์", title_en: "February", value: "02" },
    { title: "มีนาคม", title_en: "March", value: "03" },
    { title: "เมษายน", title_en: "April", value: "04" },
    { title: "พฤษภาคม", title_en: "May", value: "05" },
    { title: "มิถุนายน", title_en: "June", value: "06" },
    { title: "กรกฎาคม", title_en: "July", value: "07" },
    { title: "สิงหาคม", title_en: "August", value: "08" },
    { title: "กันยายน", title_en: "September", value: "09" },
    { title: "ตุลาคม", title_en: "October", value: "10" },
    { title: "ฑฤศจิกายน", title_en: "November", value: "11" },
    { title: "ธันวาคม", title_en: "December", value: "12" },
  ],
});

let year = dayjs().year();

for (let i = 0; i <= 9; i++) {
  selectOptions.value.years.push({
    title: year - i + 543,
    title_en: year - i,
    value: year - i,
  });
}

// Function Fetch
if (route.query.page) {
  currentPage.value = route.query.page;
}

const { data: res } = await useAsyncData("services", async () => {
  let params = {
    ...search.value,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: useCookie("lang").value,
  };

  let data = await $fetch(`${runtimeConfig.public.apiBase}/services`, {
    params: params,
  });
  items.value = data.data;
  totalPage.value = data.totalPage;
  totalItems.value = data.totalData;
  return data;
});

items.value = res.value.data;
totalPage.value = res.value.totalPage;
totalItems.value = res.value.totalData;

watch(
  [currentPage, search],
  () => {
    router.replace({
      name: "services",
      query: { page: currentPage.value },
    });
    refreshNuxtData("services");
  },
  { deep: true }
);

onMounted(() => {});

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

useHead({
  title:
    "บริการ ศูนย์ปฏิบัติการเทคโนโลยีอิเล็กทรอนิกส์อัจฉริยะและนวัตกรรมดิจิทัล",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
