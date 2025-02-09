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
                        <a class="nav-link text-white" href="#freelance">Freelance</a>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <mask id="circleFlagsFr0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                                <g mask="url(#circleFlagsFr0)">
                                    <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
                                    <path fill="#0052b4" d="M0 0h167v512H0z" />
                                    <path fill="#d80027" d="M345 0h167v512H345z" />
                                </g>
                            </svg>
                            <span>FR</span>
                        </a>
                        <a
                            :class="locale === 'en' ? 'active' : ''"
                            class="d-flex gap-1 align-items-center text-decoration-none text-white pointer-event"
                            @click.prevent.stop="setLocale('en')"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                                <mask id="circleFlagsUk0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
                                <g mask="url(#circleFlagsUk0)">
                                    <path
                                        fill="#eee"
                                        d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z"
                                    />
                                    <path
                                        fill="#0052b4"
                                        d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"
                                    />
                                    <path
                                        fill="#d80027"
                                        d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z"
                                    />
                                </g>
                            </svg>
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
