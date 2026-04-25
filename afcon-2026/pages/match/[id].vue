<template>
    <div v-if="match" class="animate-fade-in">
        <button @click="$router.push('/')"
            class="group flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold transition-colors mb-8">
            <span class="group-hover:-translate-x-1 transition-transform">←</span> Retour aux matchs
        </button>

        <div class="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">

            <div class="text-center mb-10 border-b border-slate-800 pb-10">
                <h2 class="text-3xl md:text-5xl font-black mb-4">{{ match.homeTeam }} <span class="text-emerald-500">{{
                        match.homeScore }} - {{ match.awayScore }}</span> {{ match.awayTeam }}</h2>
                <p class="text-slate-400 text-sm font-medium">📅 {{ match.date }} à {{ match.time }} | 🏟️ {{
                    match.stadium }}</p>
            </div>

            <div
                class="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-2xl p-6 mb-10 flex items-center gap-4">
                <div class="text-4xl">🏆</div>
                <div>
                    <h4 class="text-xs uppercase tracking-wider text-amber-500/80 font-bold mb-1">Homme du match</h4>
                    <p class="text-xl font-bold text-amber-400">{{ match.manOfTheMatch }}</p>
                </div>
            </div>

            <p class="text-slate-400 text-sm">Buteurs et cartons: Non disponible.</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMatchStore } from '~/stores/matchStore'

const route = useRoute()
const matchStore = useMatchStore()
const matchId = route.params.id as string
const match = computed(() => matchStore.getMatchById(matchId))

onMounted(async () => {
    if (!matchStore.matches.length) {
        await matchStore.loadMatches()
    }
})
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>