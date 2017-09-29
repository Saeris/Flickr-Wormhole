import getInfo from "@/methods/photos/licenses/getInfo"

async function fetchLicenses() {
  try {
    const { licenses = {} } = await getInfo()
    const results = []

    for (const res of licenses?.license || []) {
      results.push({
        id: res?.id,
        name: res?.name,
        url: res?.url
      })
    }

    info(`Successfully ran fetchLicenses`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchLicenses`, err)
  }
}

export default fetchLicenses
