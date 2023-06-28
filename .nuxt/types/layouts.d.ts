import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "app" | "default" | "landing"
declare module "C:/Users/user/source/repos/ingenium/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}