import getInfo from "@/methods/photos/licenses/getInfo"

async function fetchLicenses() {
  try {
    const results = []
    const data = await getInfo()

    if (!!data.licenses && !!data.licenses.license) {
      for (const res of data.licenses.license) {
        results.push({
          id: res.id,
          name: res.name,
          url: res.url
        })
      }
    }

    info(`Successfully ran fetchLicenses`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchLicenses`, err)
  }
}

export default fetchLicenses
