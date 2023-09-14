<template>
    <div>
        <h1 class="text-center">Mes réalisations</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 realisation justify-content-center">
            <RealCard :real="realisations[0]" />
            <RealCard :real="realisations[1]" />
            <RealCard :real="realisations[2]" />
            <RealCard :real="realisations[3]" />
            <RealCard :real="realisations[4]" />
            <RealCard :real="realisations[5]" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import RealCard from "~/components/cards/RealCard.vue"
import { IRealisationCardProperties } from "~/types/IRealisationCardProperties"
import useAssets from "~/composables/useAssets"

const realisations = computed((): IRealisationCardProperties => {
    return [
        {
            name: "Booki Project avec OpenClassrooms",
            src: useAssets("logo-booki.svg"),
            alt: "Booki logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_BookiProject",
        },
        {
            name: "OhMyFood Project avec OpenClassrooms",
            src: useAssets("ohmyfood@2x.svg"),
            alt: "OhMyFood logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_OhMyFood",
        },
        {
            name: "Agence La Panthère avec OpenClassrooms",
            src: useAssets("agence-la-panthere.svg"),
            alt: "Logo Panthère",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_LaPanthere_VersionCorrige",
        },
        {
            name: "Kanap avec OpenClassrooms",
            src: useAssets("logo-kanap.png"),
            alt: "Logo Kanap",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_Kanap",
        },
        {
            name: "Piiquante avec OpenClassrooms",
            src: useAssets("PiiquanteLogo.png"),
            alt: "Piiquante logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_Piquante",
        },
        {
            name: "Kasa avec OpenClassrooms",
            src: useAssets("logo_header.svg"),
            alt: "Kasa logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_Kasa",
        },
    ]
})
</script>
