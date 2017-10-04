import { invariant, missingArgument } from "@/utilities"
import { Camera } from "@/models"
import getBrandModels from "@/methods/cameras/getBrandModels"

async function fetchCamerasByBrand({ brand = `` } = {}) {
  invariant(brand, missingArgument({ brand }))
  try {
    const { cameras = {} } = await getBrandModels({ brand })
    const results = cameras?.camera?.map(data => new Camera({ brand, ...data })) || []

    info(`Successfully ran fetchCamerasByBrand`, { brand, results })
    return results
  } catch (err) {
    error(`Failed to run fetchCamerasByBrand`, err)
  }
}

export default fetchCamerasByBrand
