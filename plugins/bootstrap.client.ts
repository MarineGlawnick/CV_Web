import Collapse from "bootstrap/js/dist/collapse"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.provide("Collapse", Collapse)
})
