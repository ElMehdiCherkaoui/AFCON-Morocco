import { defineEventHandler } from "h3";
import axios from "axios";

export default defineEventHandler(async () => {
  try {

    const fixturesRes = await axios.get(
      "https://football-api-3cd42a.dockhosting.dev/api/fixtures?league=200&season=2024"
    );

    const topScorersRes = await axios.get(
      "https://football-api-3cd42a.dockhosting.dev/api/topscorers?league=200&season=2024"
    );

    const fixtures = fixturesRes.data.response
    const topScorers = topScorersRes.data.response;

    return fixtures.map((fixture: any) => {
      let manOfTheMatch = "Non disponible";

      for (const scorer of topScorers) {
        const scorerTeamId = scorer.statistics[0].team.id;
        const scorerName = scorer.player.name;

        if (
          scorerName &&
          (scorerTeamId === fixture.teams.home.id ||
            scorerTeamId === fixture.teams.away.id)
        ) {
          manOfTheMatch = scorerName;
          break;
        }
      }

      return {
        ...fixture,
        manOfTheMatch,
      };
    });
  } catch (error) {
    console.error("Error fetching matches:", error);
    return [];
  }
});
