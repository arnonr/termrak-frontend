<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12" v-if="item != null">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> เครื่องมือวิทยาศาสตร์ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <NuxtLink href="/admin/equipment"> รายการเครื่องมือ</NuxtLink>
              </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> {{ item.title }} </span>
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
                            name: 'admin-equipment-edit-id',
                            params: { id: item.id },
                          }"
                          class="btn btn-warning"
                          >Edit</NuxtLink
                        >

                        <button
                          class="btn btn-danger ml-5"
                          @click="onConfirmDelete(item.id)"
                        >
                          Delete
                        </button>
                      </div>

                      <h3>{{ item.title_en }}</h3>
                      <h3>{{ item.title_th }}</h3>
                    </div>

                    <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-microscope"></i>
                        <span class="ml-10">{{ $t("Equipment Detail") }}</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20">
                      <div
                        v-html="item.detail == null ? '' : item.detail"
                      ></div>
                    </div>

                    <div class="postbox__thumb m-img mt-20">
                      <div
                        class="news_gallery mt-2"
                        v-if="equipmentGallery.length != 0"
                      >
                        <div class="container-fluid g-0">
                          <div class="row gx-0">
                            <div class="col-xxl-12">
                              <div class="portfolio__slider-6">
                                <ClientOnly>
                                  <Swiper
                                    :slidesPerView="1"
                                    :spaceBetween="10"
                                    :loop="true"
                                    :thumbs="{ swiper: thumbsSwiper }"
                                    :navigation="true"
                                    :modules="modules"
                                    :speed="5000"
                                    :autoplay="{
                                      delay: 5000,
                                      disableOnInteraction: true,
                                    }"
                                    class="mySwiper2 mb-10"
                                  >
                                    <SwiperSlide
                                      v-for="ng in equipmentGallery"
                                      :key="ng.id"
                                    >
                                      <img
                                        :src="ng.equipment_gallery_file"
                                        style="width: 100%"
                                      />
                                    </SwiperSlide>
                                  </Swiper>

                                  <Swiper
                                    @swiper="setThumbsSwiper"
                                    :spaceBetween="10"
                                    :slidesPerView="4"
                                    :freeMode="true"
                                    :watchSlidesProgress="true"
                                    :modules="modules"
                                    class="mySwiper"
                                  >
                                    <SwiperSlide
                                      v-for="ng in equipmentGallery"
                                      :key="ng.id"
                                    >
                                      <img
                                        :src="ng.equipment_gallery_file"
                                        style="width: 100%; cursor: pointer"
                                      />
                                    </SwiperSlide>
                                  </Swiper>
                                </ClientOnly>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-coins"></i>
                        <span class="ml-10">{{ $t("Rate") }}</span>
                      </h4>
                    </div>

                    <div v-if="item.rate_file != null" class="w-img mt-30">
                      <img :src="item.rate_file" alt="" />
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
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const modules = [Autoplay, FreeMode, Navigation, Pagination, Scrollbar, Thumbs];

const equipmentGallery = ref([]);
const thumbsSwiper = ref(null);

const item = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// Fetch
const fetchGallery = async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/equipment-gallery`, {
    params: {
      is_publish: 1,
      equipment_id: route.params.id,
    },
  }).catch((error) => error.data);

  equipmentGallery.value = data.data;
};

const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/equipment/${route.params.id}`,
    {
      params: {
        lang: useCookie("lang").value,
      },
    }
  ).catch((error) => error.data);

  item.value = data.data;
};

onMounted(() => {
  fetchGallery();
  fetchItem();
});

// Event
const onConfirmDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Cancle it!",
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(id);
    }
  });
};

const onDelete = async (id) => {
  await $fetch(`${runtimeConfig.public.apiBase}/equipment/${id}`, {
    method: "delete",
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast("ลบรายการเสร็จสิ้น", "success");
        router.push({ path: "/admin/equipment" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

useHead({
  title: "Equipment",
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
