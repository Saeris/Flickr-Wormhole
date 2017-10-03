import { invariant, missingArgument } from "@/utilities"
import { License } from "@/models"
import getInfo from "@/methods/photos/licenses/getInfo"

async function fetchLicenses({ flickr } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  try {
    const { licenses = {} } = await getInfo({ flickr })
    const results = licenses?.license?.map(data => new License(data)) || []

    info(`Successfully ran fetchLicenses`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchLicenses`, err)
  }
}

export default fetchLicenses
