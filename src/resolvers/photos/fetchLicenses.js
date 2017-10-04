import { License } from "@/models"
import getInfo from "@/methods/photos/licenses/getInfo"

async function fetchLicenses() {
  try {
    const { licenses = {} } = await getInfo()
    const results = licenses?.license?.map(data => new License(data)) || []

    info(`Successfully ran fetchLicenses`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchLicenses`, err)
  }
}

export default fetchLicenses
