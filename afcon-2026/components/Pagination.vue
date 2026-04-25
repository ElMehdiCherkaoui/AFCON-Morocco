<template>
    <div class="flex justify-center items-center gap-6 mt-10">
        <button
            class="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            :disabled="currentPage === 1" @click="$emit('changePage', currentPage - 1)">
            <span>←</span> Précédent
        </button>

        <div class="text-sm font-medium text-slate-400">
            Page <span class="text-white font-bold">{{ currentPage }}</span> sur {{ totalPages }}
        </div>

        <button
            class="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            :disabled="currentPage === totalPages" @click="$emit('changePage', currentPage + 1)">
            Suivant <span>→</span>
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{ currentPage: number; totalPages: number }>()
defineEmits(['changePage'])
</script>

