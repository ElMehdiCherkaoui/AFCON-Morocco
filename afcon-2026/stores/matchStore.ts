import { defineStore } from "pinia";
import { fetchMatches } from "~/services/footballApi";

export const useMatchStore = defineStore("match", {
  state: () => ({
    matches: [] as any[],
    loading: false,
    error: "",
  }),
  getters: {
    getMatchById: (state) => (id: string) => {
      return state.matches.find((match) => match.id === id);
    },
  },
  actions: {
    async loadMatches() {
      this.loading = true;
      this.error = "";

      try {
        this.matches = await fetchMatches();
      } catch (error) {
        this.error = "Impossible de charger les matchs.";
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
