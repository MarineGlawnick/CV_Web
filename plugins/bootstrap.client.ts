import Collapse from "bootstrap/js/dist/collapse"
import Carousel from "bootstrap/js/dist/carousel"
import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.provide("Collapse", Collapse)
    nuxtApp.vueApp.provide("Carousel", Carousel)
})
