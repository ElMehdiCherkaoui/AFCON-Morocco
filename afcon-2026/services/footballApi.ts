import axios from 'axios'

export const fetchMatches = async () => {
  const response = await axios.get('/api/matches')
  const data = response.data

  return data.map((item: any) => {
    const dateValue = new Date(item.fixture.date)

    return {
      id: String(item.fixture.id ?? ''),
      date: dateValue.toLocaleDateString('en-US'),
      time: dateValue.toLocaleTimeString('en-US'),
      stadium: item.fixture.venue.name ?? 'Non disponible',
      homeTeam: item.teams.home.name ?? 'Non disponible',
      awayTeam: item.teams.away.name ?? 'Non disponible',
      homeScore: item.goals.home ?? 0,
      awayScore: item.goals.away ?? 0,
      manOfTheMatch: item.manOfTheMatch ?? 'Non disponible',
    }
  })
}
