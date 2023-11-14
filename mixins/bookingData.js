export default {
  data() {
    return {
      member_statuses: [
        {
          id: 1,
          value: 1,
          name_th: "บุคลากรคณะวิทยาศาสตร์ มจพ.",
          name_en: "บุคลากรคณะวิทยาศาสตร์ มจพ.",
        },
        {
          id: 2,
          value: 2,
          name_th: "บุคลากรภายในมหาวิทยาลัย",
          name_en: "บุคลากรภายในมหาวิทยาลัย",
        },
        {
          id: 3,
          value: 3,
          name_th: "บุคลากรมหาวิทยาลัยภายนอก",
          name_en: "บุคลากรมหาวิทยาลัยภายนอก",
        },
        {
          id: 4,
          value: 4,
          name_th: "หน่วยงาน ราชการ/รัฐวิสหกิจ",
          name_en: "หน่วยงาน ราชการ/รัฐวิสหกิจ",
        },
        {
          id: 5,
          value: 5,
          name_th: "เอกชน",
          name_en: "เอกชน",
        },
      ],
      period_times: [
        {
          id: 1,
          value: 1,
          name_th: "รอบเช้า (9.00- 12.00)",
          name_en: "9.00- 12.00",
        },
        {
          id: 2,
          value: 2,
          name_th: "รอบบ่าย (13.00- 16.00)",
          name_en: "13.00- 16.00",
        },
        {
          id: 3,
          value: 3,
          name_th: "เต็มวัน (9.00- 16.00)",
          name_en: "9.00- 16.00",
        },
      ],
      booking_statuses: [
        {
          id: 1,
          value: 1,
          name_th: "รออนุมัติ",
          name_en: "Wating",
          color: "info",
        },
        {
          id: 2,
          value: 2,
          name_th: "อนุมัติ",
          name_en: "Approved",
          color: "success",
        },
        {
          id: 3,
          value: 3,
          name_th: "ปฏิเสธ",
          name_en: "Rejected",
          color: "danger",
        },
        {
          id: 4,
          value: 4,
          name_th: "ยกเลิก",
          name_en: "Cancled",
          color: "danger",
        },
        // {
        //   id: 5,
        //   value: 5,
        //   name_th: "แก้ไข",
        //   name_en: "Edit",
        // },
      ],
      member_statuses: [
        {
          id: 1,
          value: 1,
          name_th: "บุคลากรคณะวิทยาศาสตร์ มจพ.",
          name_en: "บุคลากรคณะวิทยาศาสตร์ มจพ.",
        },
        {
          id: 2,
          value: 2,
          name_th: "บุคลากรภายในมหาวิทยาลัย",
          name_en: "บุคลากรภายในมหาวิทยาลัย",
        },
        {
          id: 3,
          value: 3,
          name_th: "บุคลากรมหาวิทยาลัยภายนอก",
          name_en: "บุคลากรมหาวิทยาลัยภายนอก",
        },
        {
          id: 4,
          value: 4,
          name_th: "หน่วยงาน ราชการ/รัฐวิสหกิจ",
          name_en: "หน่วยงาน ราชการ/รัฐวิสหกิจ",
        },
        {
          id: 5,
          value: 5,
          name_th: "เอกชน",
          name_en: "เอกชน",
        },
      ],
      publishes: [
        {
          id: 0,
          value: 0,
          name_th: "none",
          name_en: "none",
          color: "warning",
        },
        {
          id: 1,
          value: 1,
          name_th: "publish",
          name_en: "publish",
          color: "success",
        },
      ],
      user_statuses: [
        {
          id: 0,
          value: 0,
          name_th: "Block",
          name_en: "Block",
          color: "danger",
        },
        {
          id: 1,
          value: 1,
          name_th: "รอยืนยันอีเมล",
          name_en: "รอยืนยันอีเมล",
          color: "warning",
        },
        {
          id: 2,
          value: 2,
          name_th: "ยืนยันอีเมลเรียบร้อย",
          name_en: "ยืนยันอีเมลเรียบร้อย",
          color: "success",
        },
      ],
      post_companies: [
        {
          id: 1,
          value: 1,
          name: "Kerry",
        },
        {
          id: 2,
          value: 2,
          name: "Ninja",
        },
        {
          id: 3,
          value: 3,
          name: "DHL",
        },
        {
          id: 4,
          value: 4,
          name: "Shopee",
        },
        {
          id: 5,
          value: 5,
          name: "Flash",
        },
        {
          id: 6,
          value: 6,
          name: "EMS",
        },
      ],
      //   froala_config: {
      //     height: 300,
      //     // inlineMode: false,
      //     pastePlain: true,
      //     paragraphy: false,
      //     quickInsertEnabled: false,
      //     toolbarButtons: [
      //       "undo",
      //       "redo",
      //       "fullscreen",
      //       "|",
      //       "fontSize",
      //       "color",
      //       "bold",
      //       "italic",
      //       "underline",
      //       "inlineClass",
      //       "|",
      //       "paragraphFormat",
      //       "align",
      //       "outdent",
      //       "indent",
      //       "|",
      //       "formatOL",
      //       "formatUL",
      //       "quote",
      //       "-",
      //       "insertLink",
      //       "insertImage",
      //       "insertVideo",
      //       "insertFile",
      //       "insertTable",
      //       "|",
      //       "fontAwesome",
      //       "insertHR",
      //       "selectAll",
      //       "clearFormatting",
      //       "|",
      //       "print",
      //       "getPDF",
      //       "html",
      //     ],
      //     // Change buttons for XS screen.
      //     toolbarButtonsXS: [
      //       ["undo", "redo"],
      //       ["bold", "italic", "underline"],
      //     ],
      //     placeholderText: "",
      //     attribution: false,
      //     key: "enter-your-license-key-here",
      //     disableRightClick: true,
      //     imageUploadURL: `${process.env.NUXT_PUBLIC_API_BASE}/froala/image`,
      //     imageAllowedTypes: ["jpeg", "jpg", "png"],
      //     fileUploadURL: `${process.env.NUXT_PUBLIC_API_BASE}/froala/document`,
      //     videoUploadURL: `${process.env.NUXT_PUBLIC_API_BASE}/froala/video`,
      //     // fileUpload: false,
      //     // imageUpload: false,
      //     imagePaste: false,
      //     imagePasteProcess: false,
      //     imageResize: true,
      //     crossDomain: true,
      //   },

      froala_config: function () {
        const runtimeConfig = useRuntimeConfig();
        return {
          height: 300,
          // inlineMode: false,
          pastePlain: true,
          paragraphy: false,
          quickInsertEnabled: false,
          toolbarButtons: [
            "undo",
            "redo",
            "fullscreen",
            "|",
            "fontSize",
            "color",
            "bold",
            "italic",
            "underline",
            "inlineClass",
            "|",
            "paragraphFormat",
            "align",
            "outdent",
            "indent",
            "|",
            "formatOL",
            "formatUL",
            "quote",
            "-",
            "insertLink",
            "insertImage",
            "insertVideo",
            "insertFile",
            "insertTable",
            "|",
            "fontAwesome",
            "insertHR",
            "selectAll",
            "clearFormatting",
            "|",
            "print",
            "getPDF",
            "html",
          ],
          // Change buttons for XS screen.
          toolbarButtonsXS: [
            ["undo", "redo"],
            ["bold", "italic", "underline"],
          ],
          placeholderText: "",
          attribution: false,
          key: "enter-your-license-key-here",
          disableRightClick: true,
          imageUploadURL: `${runtimeConfig.public.apiBase}/froala/image`,
          imageAllowedTypes: ["jpeg", "jpg", "png"],
          fileUploadURL: `${runtimeConfig.public.apiBase}/froala/document`,
          videoUploadURL: `${runtimeConfig.public.apiBase}/froala/video`,
          // fileUpload: false,
          // imageUpload: false,
          imagePaste: false,
          imagePasteProcess: false,
          imageResize: true,
          crossDomain: true,
        };
      },
    };
  },
};
