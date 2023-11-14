<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4 no-print">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> ระบบออกใบเสร็จ </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 no-print">
    <div class="container">
      <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
        <h4>
          <i class="fa-solid fa-search"></i>
          <span class="ml-10">ค้นหา</span>
        </h4>
      </div>

      <div class="row">
        <div class="col-12 col-lg-4">
          <input
            class="form-control"
            v-model="search.send_name"
            name="send_name"
            type="text"
            placeholder="ชื่อผู้ส่ง"
          />
        </div>

        <div class="col-12 col-lg-4">
          <input
            class="form-control"
            v-model="search.receive_name"
            name="receive_name"
            type="text"
            placeholder="ชื่อผู้รับ"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40 no-print">
    <div class="container">
      <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
        <h4>
          <i class="fa-regular fa-news"></i>
          <span class="ml-10">รายการใบเสร็จ</span>
        </h4>
      </div>
      <div class="mb-30">
        <button
          type="button"
          class="btn btn-warning"
          @click="
            () => {
              $router.push({ path: '/admin/bill/add' });
            }
          "
        >
          <i class="fa-regular fa-plus"></i>
          ADD
        </button>

        <button type="button" class="btn btn-success ml-10" @click="onPrint()">
          <i class="fa-regular fa-print"></i>
          PRINT
        </button>
      </div>

      <div class="row gx-2 grid">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-admin">
              <thead>
                <tr>
                  <th class="text-center">เลือก</th>
                  <th class="text-center">วันที่ส่ง</th>
                  <th class="text-center">เลขพัสดุ</th>
                  <th class="text-center">ผู้ส่ง</th>
                  <th class="text-center">ผู้รับ</th>
                  <th class="text-center">ที่อยู่</th>
                  <th class="text-center">ค่าย</th>
                  <th class="text-center">น้ำหนัก (KG)</th>
                  <th class="text-center">ราคา</th>
                  <th class="text-center" style="min-width: 150px">จัดการ</th>
                </tr>
              </thead>
              <tbody v-if="items.length != 0">
                <tr v-for="(it, idx) in items" :key="idx">
                  <td class="text-center">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="'equipment-method-no-' + it.id"
                      :checked="false"
                      @click="onSelectMethod(it, $event.target.checked)"
                    />
                  </td>
                  <td class="text-center">
                    {{ dayjs(it.send_date).locale("th").format("DD MMM BB") }}
                  </td>
                  <td class="text-center">{{ it.tracking_id }}</td>
                  <td class="text-center">{{ it.send_name }}</td>
                  <td class="text-center">
                    {{ it.receive_name }}
                  </td>
                  <td class="text-center">
                    {{ it.receive_address }}
                  </td>
                  <td class="text-center">
                    {{
                      selectOptions.post_companies[it.post_company_id - 1].name
                    }}
                  </td>
                  <td class="text-center">
                    {{ it.weight }}
                  </td>
                  <td class="text-center">{{ it.price }}.00</td>
                  <td class="text-center">
                    <!-- <NuxtLink
                      @click="onPrintItem(it)"
                      class="btn btn-success text-uppercase"
                    >
                      <i class="fa-regular fa-print"></i>
                    </NuxtLink> -->

                    <NuxtLink
                      :to="{
                        name: 'admin-bill-edit-id',
                        params: { id: it.id },
                      }"
                      class="btn btn-warning text-uppercase ml-10"
                    >
                      <i class="fa-regular fa-edit"></i>
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
  </section>

  <div id="print">
    <div style="width: 200px !important; font-family: Arial, Helvetica, sans-serif">
      <div class="text-center">ใบเสร็จ</div>
      <div class="text-center">
        <span>เติมรัก รับส่งพัสดุ ท่าอิฐ</span><br />
        <span>8/1 ท่าอิฐ ไทรม้า นนทบุรี 11000</span><br />
        <span>เบอร์ติดต่อ 0986104520</span>
        <hr style="border-top: 2px #000 solid" />
      </div>
      <div v-for="(it, idx) in selectItem" :key="idx">
        <span>{{ idx+1 }}. {{ it.post_company_id }}</span>
        <span class="text-end" style="float: right">{{ it.price }}.00</span
        ><br />
        <span>เลขพัสดุ: </span>
        <span>{{ it.tracking_id }}</span
        ><br />
        <span>น้ำหนัก: </span>
        <span>{{ it.weight }} กก.</span><br />
        <span>ผู้ส่ง: </span>
        <span>{{ it.send_name }}</span
        ><br />
        <span>ผู้รับ: </span>
        <span>{{ it.receive_name }}</span
        ><br />
        <span>ปลายทาง: </span>
        <span>{{ it.receive_address }}</span
        ><br />
        <hr style="border-top: 2px #000 solid" />
      </div>
      <div class="text-center">
        <span>จำนวน {{ count_item }} รายการ</span><br />
        <span>รวมราคา {{ total_price }} บาท</span><br />
        <span>วันที่ {{ date }} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// import tableItem from "~/components/list/TableItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
import booking_data from "~~/mixins/bookingData";
// Variable

dayjs.extend(buddhistEra);
// const route = useRoute();
// const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(20);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({});
const selectItem = ref([]);
const total_price = ref(0);
const count_item = ref(0);
const date = ref(dayjs().locale("th").format("DD MMM BBBB"));

const selectOptions = ref({
  perPage: [
    { title: "20", value: 20 },
    { title: "40", value: 40 },
    { title: "60", value: 60 },
  ],
  publishes: booking_data.data().publishes,
  post_companies: booking_data.data().post_companies,
});

// Function Fetch
const fetchItems = async () => {
  let params = {
    ...search.value,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: "th",
  };

  let data = await $fetch(`${runtimeConfig.public.apiBase}/bill`, {
    params: params,
  }).catch((error) => error.data);

  items.value = data.data;
  totalPage.value = data.totalPage;
  totalItems.value = data.totalData;
};

// Watch
watch(
  [currentPage, search],
  () => {
    fetchItems();
  },
  { deep: true }
);

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// Event
const onSelectMethod = (it, event) => {
  if (event == true) {
    selectItem.value.push({
      id: it.id,
      tracking_id: it.tracking_id,
      post_company_id: selectOptions.value.post_companies.find(
        (x) => x.value == it.post_company_id
      ).name,
      weight: it.weight,
      send_name: it.send_name,
      receive_name: it.receive_name,
      receive_address: it.receive_address,
      send_date: dayjs(it.send_date).locale("th").format("DD MMM BBBB"),
      price: it.price,
    });
  } else {
    let filtered = selectItem.value.filter((x) => {
      return x.id != it.id;
    });

    selectItem.value = filtered;
  }
};

const onPrint = () => {
  total_price.value = 0;
  count_item.value = 0;
  date.value = dayjs();
  for (let i = 0; i < selectItem.value.length; i++) {
    total_price.value = total_price.value + selectItem.value[i].price;
    count_item.value = count_item.value + 1;
    date.value = selectItem.value[i].send_date;
  }
  setTimeout(() => {
    window.print();
  }, 1000);
};

// const onPrintItem = (it) => {
//   selectItem.value = [];
//   selectItem.value.push({
//     id: it.id,
//     tracking_id: it.tracking_id,
//     post_company_id: selectOptions.value.post_companies.find(
//       (x) => x.value == it.post_company_id
//     ).name,
//     weight: it.weight,
//     send_name: it.send_name,
//     receive_name: it.receive_name,
//     receive_address: it.receive_address,
//     send_date: dayjs(it.send_date).locale("th").format("DD MMM BBBB"),
//     price: it.price,
//   });

//   onPrint();
// };

onMounted(() => {
  fetchItems();
});

useHead({
  title: "รายการใบเสร็จ",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style lang="scss">
#print {
  display: none;
}
@media print {
  .no-print {
    display: none;
  }

  #print {
    display: inline !important;
  }
}
</style>
