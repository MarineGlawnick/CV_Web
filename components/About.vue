<template>
    <section id="about">
        <h1 class="text-center">À propos de moi</h1>
        <div class="d-flex flex-column align-items-center">
            <p class="presentation lh-lg">
                Développeuse web junior, je recherche un emploi après avoir passé 1 en alternance dans une entreprise
                spécialisée en formation en cybersécurité. Cette expérience m'a permis d'acquerir de l'autonomie et
                confiance en mes nouvelles compétences. <br />
                Issue d'un mileu litteraire, j'ai tout d'abord fait des études d'anglais. Cependant, ma formation a pris
                un tout autre tournant vers le monde de l'informatique. Animée par la passion du développement
                informatique, j'ai tout d'abord commencé ma formation de mon coté en découvrant le développement via des
                cours en ligne gratuits et des vidéos. Par la suite, j'ai réalisé une formation de développeuse web avec
                OpenClassrooms afin de renforcer et étoffer mon panel de compétences.
                <br />
            </p>

            <table class="mt-2">
                <tbody>
                    <tr>
                        <th class="pe-3">Age</th>
                        <th class="fw-normal">{{ calculateAge }}</th>
                    </tr>
                    <tr>
                        <th class="pe-3">Nationalité</th>
                        <th class="fw-normal">Française</th>
                    </tr>
                    <tr>
                        <th class="pe-3">Lieu de résidence</th>
                        <th class="fw-normal">Aix-en-Provence (13)</th>
                    </tr>
                    <tr>
                        <th>Réseaux pro</th>
                        <th class="d-flex flex-row gap-3 justify-content-evenly">
                            <a href="https://www.linkedin.com/in/marine-glawnick/" target="_blank">
                                <img alt="Linkedin logo" src="@/assets/icons/linkedin.svg" width="30" />
                            </a>
                            <a href="https://github.com/MarineGlawnick" target="_blank">
                                <img alt="Github logo" src="@/assets/icons/github.svg" width="30" />
                            </a>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script lang="ts" setup>
const calculateAge = computed(() => {
    const currentDate = new Date()
    const birthDate = new Date("1996/04/18")
    const difference = currentDate - birthDate
    return Math.floor(difference / 31557600000)
})
</script>
