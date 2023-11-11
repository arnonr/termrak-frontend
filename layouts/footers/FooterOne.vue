<template>
  <footer>
    <div
      :class="`footer__area ${style_2 ? 'footer__style-3' : ''}`"
      :data-bg-color="`footer-bg-${style_2 ? 'grey-4' : 'black'}`"
    >
      <div class="footer__top footer__top-5">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="footer__widget footer__widget-5 mb-50 footer-col-5-1">
                <div class="footer__widget-content">
                  <div class="footer__info">
                    <h4>
                      ศูนย์ปฏิบัติการเทคโนโลยีอิเล็กทรอนิกส์อัจฉริยะและนวัตกรรมดิจิทัล
                    </h4>
                    <h4>อุทยานเทคโนโลยี มจพ.</h4>

                    <p style="font-size: 1em">
                      <span>
                        Technology Center For Smart Electronic and Digital
                        Innovation
                      </span>
                      <br />
                      <span>Technopark KMUTNB</span>
                    </p>

                    <p style="font-size: 1em">
                      <span> 1518 ถนนประชาราษฎร์ 1 แขวงวงศ์สว่าง </span>
                      <br />
                      <span>เขตบางซื่อ กรุงเทพมหานคร 10800</span>
                    </p>

                    <p style="font-size: 1em">
                      <span> โทรศัพท์ 02-555-2000 ต่อ 4225 </span>
                      <br />
                      <span>แฟกซ์ 02-587-8259</span>
                    </p>

                    <!-- <a
                      href="https://www.facebook.com/profile.php?id=100066870041599"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0,0,256,256"
                        >
                          <g
                            fill="#56cbff"
                            fill-rule="nonzero"
                            stroke="none"
                            stroke-width="1"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="10"
                            stroke-dasharray=""
                            stroke-dashoffset="0"
                            font-family="none"
                            font-weight="none"
                            font-size="none"
                            text-anchor="none"
                            style="mix-blend-mode: normal"
                          >
                            <g transform="scale(5.12,5.12)">
                              <path
                                d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <div
                        class="ml-10 bg-primary pl-10 pr-10 mt-1 d-inline-block"
                        style="
                          vertical-align: top;
                          color: rgb(0, 0, 0) !important;
                          border-radius: 1em;
                        "
                      >
                        ศูนย์เครื่องมือวิทยาศาสตร์และคอมพิวเตอร์สมรรถนะสูง-SICC
                      </div>
                    </a> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div class="footer__widget footer__widget-5 mb-50 footer-col-5-3">
                <div class="footer__widget-content">
                  <div class="footer__info">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1085.1689117371757!2d100.51197210526158!3d13.823616651441048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b9fec733295%3A0xabfe9c6fbd6d88d7!2z4Lit4Li44LiX4Lii4Liy4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li1IOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4nuC4o-C4sOC4iOC4reC4oeC5gOC4geC4peC5ieC4suC4nuC4o-C4sOC4meC4hOC4o-C5gOC4q-C4meC4t-C4rSAoS01VVE5CIFRFQ0hOTyBQQVJLKQ!5e0!3m2!1sen!2sth!4v1699603171939!5m2!1sen!2sth"
                      width="100%"
                      height="300"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 text-center">
              <div class="footer__copyright-5">
                <p>
                  © {{ new Date().getFullYear() + 543 }}
                  ศูนย์ปฏิบัติการเทคโนโลยีอิเล็กทรอนิกส์อัจฉริยะและนวัตกรรมดิจิทัล
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from "~~/components/social/Social.vue";

export default {
  components: { Social },
  props: {
    style_2: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.footer__style-3 .footer__bottom-5 {
  padding-top: 27px;
  padding-bottom: 20px;
  border-top: 1px solid #e1e1ec;
  background-color: var(--tp-theme-1);
}

.footer__style-3 .footer__copyright-5 p {
  color: #fff;
}

.footer__style-3 .footer__widget ul li a:hover {
  color: var(--tp-theme-1);
}

.footer__style-3 .footer__widget-title {
  color: var(--tp-theme-1);
}

.footer__top-5 {
  padding-top: 50px;
  padding-bottom: 0px;
}

.footer-col-5-3 {
  padding-left: 0px;
  padding-right: 100px;
}
/* .bg-primary{
    background-color: #56cbff;
} */

/* .footer__info-icon span {
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 46px;
    text-align: center;
    border: 1.5px solid var(--tp-theme-4);
    font-size: 18px;
    color: var(--tp-theme-4);
    border-radius: 50%;
    margin-right: 10px;
} */
</style>
