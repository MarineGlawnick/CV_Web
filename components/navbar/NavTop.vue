<template>
    <nav class="navbar navbar-expand-lg bg-nav bg-opacity-50">
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
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a aria-current="page" class="nav-link active" href="#"
                            ><img alt="Icon de maison" src="@/assets/icons/home.svg"
                        /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">A propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Compétences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Expérience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Parcours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Réalisations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactFooter">Contact</a>
                    </li>
                    <li class="d-flex justify-content-between gap-3 ps-3">
                        <a
                            :class="locale === 'fr' ? 'active' : ''"
                            class="d-flex gap-1 align-items-center text-decoration-none text-black"
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
                            class="d-flex gap-1 align-items-center text-decoration-none text-black"
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
