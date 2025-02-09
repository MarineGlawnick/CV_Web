<template>
    <div id="freelance" class="pt-5 mx-3 mx-lg-0 flex-column d-flex gap-3">
        <h1 class="text-center mb-4">{{ $t("freelance.title") }}</h1>

        <div class="d-flex flex-column align-items-center border rounded bg-white gap-3 p-3 shadow-lg">
            <h2 class="custom-font text-dark-pink">Le cabinet d'osteopathie de la Roche-des-Arnauds</h2>
            <div id="carouselExample" class="carousel slide w-75">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="6"
                        aria-label="Slide 7"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/img/lrda_1.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/lrda_2.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/lrda_3.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/lrda_4.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/lrda_5.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/lrda_6.webp" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/lrda_7.webp" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="d-flex flex-column gap-3">
                <div>
                    <h2 class="custom-font text-dark-pink">{{ $t("freelance.context") }}</h2>
                    <ul>
                        <li>{{ $t("freelance.context_1") }}</li>
                        <li>{{ $t("freelance.context_2") }}</li>
                        <li>{{ $t("freelance.context_3") }}</li>
                        <li>{{ $t("freelance.context_4") }}</li>
                    </ul>
                </div>
                <div>
                    <h2 class="custom-font text-dark-pink">{{ $t("freelance.functionality") }}</h2>
                    <ul>
                        <li>{{ $t("freelance.functionality_1") }}</li>
                        <li>{{ $t("freelance.functionality_2") }}</li>
                        <li>{{ $t("freelance.functionality_3") }}</li>
                        <li>{{ $t("freelance.functionality_4") }}</li>
                        <li>{{ $t("freelance.functionality_5") }}</li>
                        <li>{{ $t("freelance.functionality_6") }}</li>
                    </ul>
                </div>
                <div class="text-center">
                    <a
                        href="http://www.cabinetosteopathielrda.fr"
                        target="_blank"
                        class="btn bg-dark-pink rounded-pill text-white"
                        >{{ $t("freelance.see_website") }}</a
                    >
                </div>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center border rounded bg-white gap-3 p-3 shadow-lg">
            <h2 class="custom-font text-dark-pink">Dashin Training Ground</h2>
            <div id="carouselExample2" class="carousel slide w-75">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="6"
                        aria-label="Slide 7"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="7"
                        aria-label="Slide 8"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="8"
                        aria-label="Slide 9"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="9"
                        aria-label="Slide 10"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="@/assets/img/dtg1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg3.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg4.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg5.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg6.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg7.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg8.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg9.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/img/dtg10.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample2"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample2"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="d-flex flex-column gap-3">
                <div>
                    <h2 class="custom-font text-dark-pink">{{ $t("freelance.context") }}</h2>
                    <ul>
                        <li>{{ $t("freelance.dtg_context_1") }}</li>
                        <li>{{ $t("freelance.dtg_context_2") }}</li>
                        <li>{{ $t("freelance.dtg_context_3") }}</li>
                        <li>{{ $t("freelance.dtg_context_4") }}</li>
                    </ul>
                </div>
                <div>
                    <h2 class="custom-font text-dark-pink">{{ $t("freelance.functionality") }}</h2>
                    <ul>
                        <li>{{ $t("freelance.dtg_functionality_1") }}</li>
                        <li>{{ $t("freelance.dtg_functionality_2") }}</li>
                        <li>{{ $t("freelance.dtg_functionality_3") }}</li>
                        <li>{{ $t("freelance.dtg_functionality_4") }}</li>
                        <li>{{ $t("freelance.dtg_functionality_5") }}</li>
                        <li>{{ $t("freelance.dtg_functionality_6") }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
