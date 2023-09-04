export const fetchAny = async ({ param }) => {
  const LINK = `http://ergast.com/api/f1/${param}.json`
  try {
    const res = await fetch(LINK)
    const data = await res.json()
    return data.MRData
  } catch (error) {
    console.error('Error: ', error)
  }
}
