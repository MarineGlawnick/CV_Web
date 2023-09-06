<template>
    <div>
        <NavbarNavTop />
        <Header />
        <div id="scroll" class="d-flex justify-content-center">
            <a href="#about">
                <img alt="Bottom arrow" src="@/assets/icons/bottom_arrow.svg" width="50" />
            </a>
        </div>
        <Skills />
        <section id="skills"></section>
        <section id="experience"></section>
        <section id="studies"></section>
        <section id="realisations"></section>
        <section id="footerContact"></section>
    </div>
</template>
<script setup>
import Header from "~/components/Header.vue"
</script>
