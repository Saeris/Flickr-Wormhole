import { invariant, missingArgument } from "@/utilities"
import { Brand } from "@/models"
import getBrands from "@/methods/cameras/getBrands"

async function fetchBrands({ flickr } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  try {
    const { brands = {} } = await getBrands({ flickr })
    const results = brands?.brand?.map(data => new Brand(data)) || []

    info(`Successfully ran fetchBrands`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchBrands`, err)
  }
}

export default fetchBrands
