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
            <section id="experience"></section>
            <section id="studies"></section>
            <section id="realisations"></section>
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
</script>
