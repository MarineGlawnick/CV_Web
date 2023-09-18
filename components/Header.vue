<template>
    <section id="header">
        <div class="d-flex flex-lg-row flex-column align-items-center gap-4 justify-content-center">
            <div>
                <img
                    alt="Profile picture"
                    class="rounded-circle"
                    src="@/assets/img/profile_picture_cropped.webp"
                    width="300"
                />
            </div>
            <div>
                <h1>Marine Glawnick</h1>
                <h2 id="job" class="fs-6" :class="locale === 'en' ? 'job_en' : ''">{{ $t("header.dev") }}</h2>
                <div class="d-flex gap-3 justify-content-center my-3">
                    <a
                        target="_blank"
                        class="btn btn-button-grey rounded-pill text-white"
                        href="https://drive.google.com/file/d/1KR_UNJzoOqmzjJhO6zIz5EATi-HduYUJ/view?usp=sharing"
                    >
                        {{ $t("header.download") }}
                    </a>
                    <a class="btn btn-button-grey rounded-pill text-white" href="mailto:marine.glawnick@gmail.com">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
const { locale } = useI18n()
</script>
