<template>
    <section id="contactFooter" class="bg-nav px-5 py-3">
        <h2 class="text-center text-white fs-20 fw-bolder">{{ $t("footer.contact") }}</h2>
        <p class="text-center text-white fs-16">
            {{ $t("footer.currently") }}<br />
            <strong>{{ $t("footer.dev") }}</strong>
        </p>
        <div class="row row-cols-1 row-cols-md-3 g-5">
            <div class="col">
                <div
                    class="bg-white border border-0 rounded d-flex flex-column align-items-center h-100 shadow py-3 contact-card gap-2"
                >
                    <img alt="Telephone logo" src="@/assets/icons/telephone.svg" width="50" />
                    <span class="fw-bolder">+33615433499</span>
                </div>
            </div>
            <div class="col">
                <div
                    class="bg-white border border-0 rounded d-flex flex-column align-items-center h-100 shadow py-3 contact-card gap-2"
                >
                    <img alt="Enveloppe logo" src="@/assets/icons/envelope-at.svg" width="50" />
                    <a class="text-decoration-none text-black fw-bolder" href="mailto:marine.glawnick@gmail.com"
                        >marine.glawnick@gmail.com</a
                    >
                </div>
            </div>
            <div class="col">
                <div
                    class="bg-white border border-0 rounded d-flex flex-column align-items-center justify-content-center h-100 shadow contact-card address-card"
                >
                    <span>{{ $t("footer.meet") }}</span>
                    <span class="text-center">{{ $t("footer.address") }}</span>
                </div>
            </div>
        </div>
        <p class="m-0 text-center text-white fs-12 pt-5">Marine Glawnick @ 2023 - Tous droit réservés</p>
    </section>
</template>
<script lang="ts" setup></script>
