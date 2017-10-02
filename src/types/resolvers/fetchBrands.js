import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getBrands from "@/methods/cameras/getBrands"

async function fetchBrands({ flickr } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  try {
    const { brands = {} } = await getBrands({ flickr })
    const results = []

    for (const res of brands?.brand || []) {
      results.push({
        id: res?.id,
        name: res?.name
      })
    }

    info(`Successfully ran fetchBrands`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchBrands`, err)
  }
}

export default fetchBrands
