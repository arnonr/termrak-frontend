import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "layout-eight" | "layout-eleven" | "layout-five" | "layout-four" | "layout-nine" | "layout-one" | "layout-seven" | "layout-six" | "layout-ten" | "layout-three" | "layout-twelve" | "layout-two" | "default"
declare module "/Applications/MAMP/htdocs/sicc/sicc-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}