<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
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

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="row">
        <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
          <h4>
            <i class="fa-solid fa-edit"></i>
            <span class="ml-10">แบบฟอร์มเพิ่มใบเสร็จ</span>
          </h4>
        </div>

        <div class="col-12">
          <div class="card" style="border: none">
            <div class="card-body">
              <div class="form-group mt-10 mb-20 text-end">
                <button class="btn btn-primary" @click="loadLast">
                  ใช้ข้อมูลผู้ส่งล่าสุด
                </button>
              </div>
              <div class="form-group row mt-10">
                <label for="post_company_id" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>บริษัทขนส่ง :
                </label>
                <div class="col-sm-9">
                  <v-select
                    label="name"
                    placeholder="บริษัทขนส่ง"
                    :options="selectOptions.post_companies"
                    id="slt-post-company-id"
                    v-model="item.post_company_id"
                    class="form-control v-select-no-border"
                    :clearable="true"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="send-date" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>วันที่ส่ง :
                </label>
                <div class="col-sm-9">
                  <VueDatePicker
                    v-model="item.send_date"
                    :enable-time-picker="false"
                    locale="th"
                    auto-apply
                    :format="format"
                  >
                    <template #year-overlay-value="{ text }">
                      {{ parseInt(text) + 543 }}
                    </template>
                    <template #year="{ year }">
                      {{ year + 543 }}
                    </template>
                  </VueDatePicker>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="send_name" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ผู้ส่ง :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-send-name"
                    v-model="item.send_name"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="receive_name" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ผู้รับ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-receive-name"
                    v-model="item.receive_name"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="receive_address" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ที่อยู่ผู้รับ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-receive-address"
                    v-model="item.receive_address"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="tracking_id" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>เลขพัสดุ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-tracking-id"
                    v-model="item.tracking_id"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="weight" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>น้ำหนัก(KG) :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-weight"
                    v-model="item.weight"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="price" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ราคา :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-price"
                    v-model="item.price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-20">
          <div class="contact__btn-2 text-center">
            <button class="btn btn-warning" @click="onSubmit">Submit</button>
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
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const item = ref({
  post_company_id: {
    id: 1,
    value: 1,
    name: "Kerry",
  },
  send_date: dayjs(),
});

const selectOptions = ref({
  publishes: booking_data.data().publishes,
  post_companies: booking_data.data().post_companies,
});

const format = (date) => {
  const day = dayjs(date).locale("th").format("DD");
  const month = dayjs(date).locale("th").format("MMM");
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
};

// Event
const onSubmit = async () => {
  if (
    item.value.post_company_id == null ||
    item.value.post_company_id.value == null
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  let type_object = {
    text_success: "เพิ่มรายการเสร็จสิ้น",
    method: "post",
    url: runtimeConfig.public.apiBase + "/bill/",
  };

  let data = {
    ...item.value,
    post_company_id:
      item.value.post_company_id == null
        ? undefined
        : item.value.post_company_id.value,
    send_date:
      item.value.send_date != ""
        ? dayjs(item.value.send_date).format("YYYY-MM-DD")
        : dayjs().format("YYYY-MM-DD"),

    is_publish: 1,
  };

  await $fetch(type_object.url, {
    method: type_object.method,
    body: data,
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast(type_object.text_success, "success");
        router.push({ path: "/admin/bill" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

const loadLast = async () => {
  await $fetch(runtimeConfig.public.apiBase + "/bill/", {
    method: "get",
    params: {
      perPage: 1,
    },
  })
    .then((res) => {
      if (res.msg == "success") {
        item.value.post_company_id = selectOptions.value.post_companies.find((x) => x.value == res.data[0].post_company_id);
        item.value.send_date = res.data[0].send_date;
        item.value.send_name = res.data[0].send_name;
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

onMounted(() => {});
</script>
