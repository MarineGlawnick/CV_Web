<template>
    <div>
        <NavTop />
        <main>
            <Header />
            <div id="scroll" class="d-flex justify-content-center">
                <a href="#about">
                    <img alt="Bottom arrow" src="@/assets/icons/bottom_arrow.svg" width="50" />
                </a>
            </div>
            <About />
            <Skills />
            <Studies />
            <Experience />
            <Realisation />
        </main>
        <ContactFooter />
    </div>
</template>
<script setup>
import Header from "~/components/Header.vue"
import NavTop from "~/components/navbar/NavTop.vue"
import About from "~/components/About.vue"
import Skills from "~/components/Skills.vue"
import ContactFooter from "~/components/ContactFooter.vue"
import Realisation from "~/components/Realisation.vue"

useHead({
    title: "Marine Glawnick - Développeuse Web",
    meta: [
        {
            name: "description",
            content: "Je m'appelle Marine Glawnick, je suis développeuse web à Aix-en-Provence et ses alentours.",
        },
    ],
})
</script>
