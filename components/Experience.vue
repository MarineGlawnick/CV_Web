<template>
    <section id="experience">
        <h1 class="text-center mb-4">Mon expérience</h1>
        <div id="accordionFlushExample" class="accordion accordion-flush">
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
                        Développeuse web en alternance chez Seela - 2022-23
                    </button>
                </h2>
                <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse bg-opacity-25 bg-white"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body lh-lg">
                        <ul>
                            <li>Maintenance des produits proposés par l'entreprise</li>
                            <li>Création du site vitrine de l'entreprise</li>
                            <li>Participation à des POCS</li>
                            <li>Stack: Nuxt 2 et 3, Bootstrap, Tailwind, UnoCSS, TypeScript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
