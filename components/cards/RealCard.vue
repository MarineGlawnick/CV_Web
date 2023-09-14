<template>
    <div class="card real p-0">
        <div class="card-body p-0">
            <div class="ratio">
                <img :alt="real.alt" :src="real.src" class="img-fluid position-relative" width="200" />
                <div class="description bg-white d-flex justify-content-center align-items-center h-100">
                    <a :href="real.btnSrc"><img src="@/assets/icons/github.svg" width="50" /> </a>
                    <p>{{ real.name }}</p>
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
