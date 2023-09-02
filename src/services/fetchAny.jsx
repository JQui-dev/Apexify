export const fetchAny = async ({ param }) => {
  const LINK = `https://ergast.com/api/f1/${param}.json`
  console.log(LINK)
  try {
    const fetched = await fetch(LINK)
    const res = await fetched.json()
    const races = res.MRData.RaceTable.Races[0]
    console.log('FETCHED: ', races)
    return {
      cID: races.Circuit.circuitId,
      cName: races.Circuit.circuitName,
      round: races.round,
      date: races.date,
      time: races.time,
      country: races.Circuit.Location.country
    }
  } catch (error) {
    console.log('Error fetching')
  }
}
