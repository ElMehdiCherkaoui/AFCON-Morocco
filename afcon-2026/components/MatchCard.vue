<template>
    <NuxtLink :to="`/match/${match.id}`" class="block group outline-none">
        <div
            class="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] overflow-hidden">

            <div
                class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>

            <div class="relative z-10">
                <div
                    class="flex justify-between items-center text-xs font-medium text-slate-400 uppercase tracking-wider mb-6">
                    <span>📅 {{ match.date }} • {{ match.time }}</span>
                    <span class="flex items-center gap-1">📍 {{ match.stadium }}</span>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex-1 text-right text-xl md:text-2xl font-bold">{{ match.homeTeam }}</div>

                    <div
                        class="px-6 py-3 mx-4 bg-slate-950 rounded-xl border border-slate-800 shadow-inner flex items-center justify-center min-w-[120px]">
                        <span class="text-3xl font-black text-white tracking-widest">{{ match.homeScore }} - {{
                            match.awayScore }}</span>
                    </div>

                    <div class="flex-1 text-left text-xl md:text-2xl font-bold">{{ match.awayTeam }}</div>
                </div>

                <div class="text-center mt-6 h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
                    <span class="text-sm font-semibold text-emerald-400 flex items-center justify-center gap-2">
                        Voir les détails du match <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">

import Match from '~/stores/matchStore'
defineProps<{ match: Match }>()
</script>