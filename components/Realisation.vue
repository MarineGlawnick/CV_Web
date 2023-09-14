<template>
    <div id="real-part" class="mx-2 mx-lg-0">
        <h1 class="text-center my-4">Mes réalisations</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 real-grid justify-content-lg-center m-0 w-100">
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
            btnSrc2:
                "https://precious-hummingbird-f6c326.netlify.app/?fbclid=IwAR2pX9c8Cc34hChtnloTzFv9O5VeNvoH0qysCjYeaiZLcTXq_oQVXGDlpzQ#",
            width: "w-50",
            description: "HTML5 et CSS3",
        },
        {
            name: "OhMyFood Project avec OpenClassrooms",
            src: useAssets("ohmyfood@2x.svg"),
            alt: "OhMyFood logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_OhMyFood",
            btnSrc2: "https://marineglawnick.github.io/OpenClassrooms_OhMyFood/",
            width: "w-75",
            description: "HTML5, CSS3 et SASS",
        },
        {
            name: "Agence La Panthère avec OpenClassrooms",
            src: useAssets("agence-la-panthere.svg"),
            alt: "Logo Panthère",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_LaPanthere_VersionCorrige",
            btnSrc2: "https://marineglawnick.github.io/OpenClassrooms_LaPanthere_VersionCorrige/",
            width: "w-75",
            description: "HTML5 et CSS3",
        },
        {
            name: "Kanap avec OpenClassrooms",
            src: useAssets("logo-kanap.png"),
            alt: "Logo Kanap",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_Kanap",
            width: "w-50",
            description: "HTML5 et JavaScript",
        },
        {
            name: "Piiquante avec OpenClassrooms",
            src: useAssets("PiiquanteLogo.png"),
            alt: "Piiquante logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_Piquante",
            width: "w-100",
            description: "Node.js, Express.js et MangoDB",
        },
        {
            name: "Kasa avec OpenClassrooms",
            src: useAssets("logo_header.svg"),
            alt: "Kasa logo",
            btnSrc: "https://github.com/MarineGlawnick/OpenClassrooms_Kasa",
            btnSrc2: "https://fluffy-mousse-36cfbe.netlify.app/",
            width: "w-50",
            description: "HTML5, CSS3, SASS et React",
        },
    ]
})
</script>
