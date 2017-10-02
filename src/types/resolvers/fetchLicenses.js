import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getInfo from "@/methods/photos/licenses/getInfo"

async function fetchLicenses({ flickr } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  try {
    const { licenses = {} } = await getInfo({ flickr })
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
