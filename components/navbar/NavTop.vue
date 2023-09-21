<template>
    <nav class="navbar navbar-expand-lg bg-nav bg-opacity-50 position-fixed top-0 w-100 z-3 custom-nav">
        <div class="container-fluid">
            <button
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler"
                data-bs-target="#navbarContent"
                data-bs-toggle="collapse"
                type="button"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" class="collapse navbar-collapse justify-content-end align-content-center">
                <ul class="navbar-nav text-lg-start text-center fw-normal">
                    <li class="nav-item">
                        <a aria-current="page" class="nav-link active" href="#"
                            ><img alt="Icon de maison" src="@/assets/icons/home.svg"
                        /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#about">{{ $t("navtop.about") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#skills">{{ $t("navtop.skills") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#studies">{{ $t("navtop.studies") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#experience">{{ $t("navtop.experience") }}</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-white" href="#real-part">{{ $t("navtop.realisations") }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#contactFooter">Contact</a>
                    </li>
                    <li class="d-flex justify-content-lg-between justify-content-center gap-3 ps-lg-3">
                        <a
                            :class="locale === 'fr' ? 'active' : ''"
                            class="d-flex gap-1 align-items-center text-decoration-none text-white pointer-event"
                            @click.prevent.stop="setLocale('fr')"
                        >
                            <img
                                alt="French flag"
                                class="border border-0 rounded-circle"
                                src="@/assets/icons/fr.svg"
                                width="20"
                            />
                            <span>FR</span>
                        </a>
                        <a
                            :class="locale === 'en' ? 'active' : ''"
                            class="d-flex gap-1 align-items-center text-decoration-none text-white pointer-event"
                            @click.prevent.stop="setLocale('en')"
                        >
                            <img
                                alt="British flag"
                                class="border border-0 rounded-circle"
                                src="@/assets/icons/gb.svg"
                                width="20"
                            />
                            <span>EN</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang="ts" setup>
const { locale, setLocale } = useI18n()
</script>
