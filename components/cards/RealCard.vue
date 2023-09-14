<template>
    <div class="card real-card p-0 bg-white">
        <div class="card-body p-0">
            <div class="ratio d-flex align-items-center justify-content-center h-100 w-100">
                <img :alt="real.alt" :src="real.src" class="img-fluid position-relative h-auto" :class="real.width" />
                <div class="description d-flex flex-column justify-content-center align-items-center gap-3">
                    <div class="d-flex gap-3">
                        <a :href="real.btnSrc" target="_blank"><img src="@/assets/icons/github.svg" width="40" /></a>
                        <a v-if="real.btnSrc2" :href="real.btnSrc2" target="_blank"
                            ><img src="@/assets/icons/box-arrow-up-right.svg" width="40"
                        /></a>
                    </div>
                    <div class="text-center">
                        <p class="fs-12">
                            <span class="fw-bold">{{ $t("realisation.language") }} </span><br />{{ real.description }}
                        </p>
                        <p class="fw-bold m-0">{{ real.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue"
import { IRealisationCardProperties } from "~/types/IRealisationCardProperties"

defineProps({
    real: {
        type: Object as PropType<IRealisationCardProperties>,
        required: true,
    },
})
</script>
