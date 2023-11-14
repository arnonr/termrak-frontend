<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12" v-if="item != null">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <NuxtLink href="/admin/bill"> รายการใบเสร็จ </NuxtLink></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="postbox__area pt-40 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="postbox__wrapper" v-if="item != null">
            <!-- Image -->
            <!-- <div class="postbox__top">
                
              </div> -->
            <!-- Content -->
            <div class="postbox__main">
              <div class="row">
                <div class="col-lg-12">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__details-content-wrapper">
                      <div class="text-end">
                        <NuxtLink
                          :to="{
                            name: 'admin-about-us-edit-id',
                            params: { id: item.id },
                          }"
                          class="btn btn-warning"
                          >Edit</NuxtLink
                        >
                      </div>
                    </div>

                    <div class="mt-30 mb-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-book"></i>
                        <span class="ml-10">รายละเอียด</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20">
                      <div class="row">
                        <div class="col-12">
                          <span class="fw-bold">ค่ายขนส่ง : </span>
                          <span>{{
                            selectOptions.post_companies[item.post_company_id - 1].name
                          }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">เลขพัสดุ : </span>
                          <span>{{ item.tracking_id }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ชื่อผู้ส่ง : </span>
                          <span>{{ item.send_name }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">วันที่ส่ง : </span>
                          <span>{{
                            dayjs(item.send_date)
                              .locale("th")
                              .format("DD MMM BB")
                          }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ชื่อผู้รับ : </span>
                          <span>{{ item.receive_name }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ที่อยู่ : </span>
                          <span>{{ item.receive_address }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">น้ำหนัก : </span>
                          <span>{{ item.weight }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ราคา : </span>
                          <span>{{ item.price }}.00 บาท</span>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const selectOptions = ref({
  post_companies: booking_data.data().post_companies,
});

const item = ref(null);

// Fetch
const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/bill/${route.params.id}`,
    {
      params: {
        lang: "th",
      },
    }
  ).catch((error) => error.data);

  item.value = data.data;
};

onMounted(() => {
  fetchItem();
});

// Event

useHead({
  title: "Bill",
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
