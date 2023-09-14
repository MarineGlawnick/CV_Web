<template>
    <section id="skills" class="mx-4 my-2">
        <h1 class="text-center mb-4">{{ $t("skills.skill") }}</h1>
        <div class="d-flex flex-column gap-4">
            <div class="shadow card p-2 bg-white border-0">
                <div class="card-body">
                    <h1 class="card-title">Front-end</h1>
                    <p>{{ $t("skills.integration") }}</p>
                    <div class="row row-cols-md-2 row-cols-1">
                        <div class="d-flex flex-column gap-1">
                            <span>HTML5</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 100%"></div>
                            </div>
                        </div>

                        <div class="d-flex flex-column gap-1">
                            <span>CSS3</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <span>JavaScript / TypeScript</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white border border-1 border-progress"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 80%"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <span>VueJS 3 / Nuxt 3</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <span>ReactJS</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white border border-1 border-progress"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 65%"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <span>SASS</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <span>Bootstrap</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 100%"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-1">
                            <span>Tailwind</span>
                            <div
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                class="progress bg-white border border-1 border-progress"
                                role="progressbar"
                            >
                                <div class="progress-bar bg-progress" style="width: 80%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card p-3 shadow bg-white border-0">
                <div class="card-body">
                    <h1 class="card-title">{{ $t("skills.environment") }}</h1>
                    <div class="d-flex flex-column gap-2">
                        <div class="d-flex gap-2">
                            <img alt="PC display logo" src="@/assets/icons/pc-display.svg" width="20" />
                            <span class="fw-bold">{{ $t("skills.system") }} </span>
                            <span>Windows, Ubuntu</span>
                        </div>
                        <div class="d-flex gap-2">
                            <img alt="Terminal logo" src="@/assets/icons/terminal.svg" width="20" />
                            <span class="fw-bold">Workflow : </span>
                            <span>Git, Github, Gitlab,Teams, Jira, NPM</span>
                        </div>
                        <div class="d-flex gap-2">
                            <img alt="Code slash logo" src="@/assets/icons/code-slash.svg" width="20" />
                            <span class="fw-bold">IDE : </span>
                            <span>Visual Studio Code, Pack JetBrains</span>
                        </div>
                        <div class="d-flex gap-2">
                            <img alt="Translate logo" src="@/assets/icons/translate.svg" width="20" />
                            <span class="fw-bold">{{ $t("skills.language") }}</span>
                            <span>{{ $t("skills.english") }}</span>
                        </div>
                        <div class="d-flex gap-2">
                            <img alt="Universal logo" src="@/assets/icons/universal-access.svg" width="20" />
                            <span class="fw-bold">{{ $t("skills.soft") }}</span>
                            <span>{{ $t("skills.qualities") }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup></script>
