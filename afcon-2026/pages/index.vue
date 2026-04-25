<template>
    <div>
        <header class="text-center mb-12 space-y-4">
            <div
                class="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-2">
                MAROC 2026
            </div>
            <h1
                class="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                Quarts de finale
            </h1>
        </header>

        <p v-if="matchStore.loading" class="text-slate-400 text-center">Chargement des matchs...</p>

        <p v-else-if="matchStore.error" class="text-red-400 text-center">{{ matchStore.error }}</p>

        <div class="space-y-6" v-else-if="paginatedMatches.length">
            <MatchCard v-for="match in paginatedMatches" :key="match.id" :match="match" />
        </div>

        <p v-else class="text-slate-400 text-center">API reached limit.</p>

        <Pagination v-if="totalPages > 1" :currentPage="currentPage" :totalPages="totalPages" @changePage="updatePage" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMatchStore } from '~/stores/matchStore'

const matchStore = useMatchStore()
const itemsPerPage = 2
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(matchStore.matches.length / itemsPerPage))
const paginatedMatches = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return matchStore.matches.slice(start, start + itemsPerPage)
})

const updatePage = (newPage: number) => {
    currentPage.value = newPage
}

onMounted(async () => {
    await matchStore.loadMatches()
})
</script>