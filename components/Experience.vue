<template>
    <section id="experience" class="pt-5 mx-3 mx-lg-0">
        <h1 class="text-center mb-4">{{ $t("experience.title") }}</h1>
        <div id="accordionFlushExample" class="accordion accordion-flush shadow-lg">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed bg-white rounded px-4 py-5 shadow-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                    >
                        {{ $t("experience.accordion_title-2") }}
                    </button>
                </h2>
                <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        <ul>
                            <li>{{ $t("experience.accordion_body1-1") }}</li>
                            <li>{{ $t("experience.accordion_body2-2") }}</li>
                        </ul>
                        <div class="text-center">
                            <a class="btn btn-button-grey rounded-pill text-white" href="#freelance">{{
                                $t("experience.see_more")
                            }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="accordionFlushExample" class="accordion accordion-flush">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed bg-white rounded px-4 py-5 shadow-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                    >
                        {{ $t("experience.accordion_title") }}
                    </button>
                </h2>
                <div
                    id="flush-collapseSix"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        <ul>
                            <li>{{ $t("experience.accordion_body1") }}</li>
                            <li>{{ $t("experience.accordion_body2") }}</li>
                            <li>{{ $t("experience.accordion_body3") }}</li>
                            <li>{{ $t("experience.accordion_body4") }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
