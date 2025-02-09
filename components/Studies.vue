<template>
    <section id="studies" class="pt-5 mx-3 mx-lg-0">
        <h1 class="text-center mb-4">{{ $t("studies.title") }}</h1>
        <div id="accordionFlushExample" class="accordion accordion-flush shadow-lg">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed bg-white rounded px-4 py-5 shadow-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        {{ $t("studies.accordion_title1") }}
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        {{ $t("studies.accordion_body1") }}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed bg-white rounded px-4 py-5 shadow-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        {{ $t("studies.accordion_title2") }}
                    </button>
                </h2>
                <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        {{ $t("studies.accordion_body2") }}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed bg-white rounded px-4 py-5 shadow-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                    >
                        {{ $t("studies.accordion_title3") }}
                    </button>
                </h2>
                <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        {{ $t("studies.accordion_body3") }}
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button
                        class="accordion-button collapsed bg-white rounded px-4 py-5 shadow-sm"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                    >
                        {{ $t("studies.accordion_title4") }}
                    </button>
                </h2>
                <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        {{ $t("studies.accordion_body4") }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
