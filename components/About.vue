<template>
    <section id="about">
        <h1 class="text-center">{{ $t("about.me") }}</h1>
        <div class="d-flex flex-column align-items-center">
            <p class="presentation lh-lg">
                {{ $t("about.presentation1") }}<br />
                {{ $t("about.presentation2") }}
                <br />
            </p>

            <table class="mt-2">
                <tbody>
                    <tr>
                        <th class="pe-3">Age</th>
                        <th class="fw-normal">{{ calculateAge }}</th>
                    </tr>
                    <tr>
                        <th class="pe-3">{{ $t("about.nationality") }}</th>
                        <th class="fw-normal">{{ $t("about.french") }}</th>
                    </tr>
                    <tr>
                        <th class="pe-3">{{ $t("about.residence") }}</th>
                        <th class="fw-normal">Aix-en-Provence (13)</th>
                    </tr>
                    <tr>
                        <th>{{ $t("about.social") }}</th>
                        <th class="d-flex flex-row gap-3">
                            <a href="https://www.linkedin.com/in/marine-glawnick/" target="_blank">
                                <img alt="Linkedin logo" src="@/assets/icons/linkedin.svg" width="30" />
                            </a>
                            <a href="https://github.com/MarineGlawnick" target="_blank">
                                <img alt="Github logo" src="@/assets/icons/github.svg" width="30" />
                            </a>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script lang="ts" setup>
const calculateAge = computed(() => {
    const currentDate = new Date()
    const birthDate = new Date("1996/04/18")
    const difference = currentDate - birthDate
    return Math.floor(difference / 31557600000)
})
</script>
