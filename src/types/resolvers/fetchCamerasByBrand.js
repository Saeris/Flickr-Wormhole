import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getBrandModels from "@/methods/cameras/getBrandModels"

async function fetchCamerasByBrand({ flickr, brand = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(brand, missingArgument({ brand }))
  try {
    const { cameras = {} } = await getBrandModels({ flickr, brand })
    const results = []

    for (const res of cameras?.camera || []) {
      results.push({
        id: res?.id,
        name: (res?.name)?._content,
        brand: brand,
        megapixels: ((res?.details)?.megapixels)?._content || null,
        zoom: ((res?.details)?.zoom)?._content || null,
        lcdSize: ((res?.details)?.lcd_screen_size)?._content || null,
        storage: res?.details?.memory_type?._content.split(`, `) || [],
        images: Object.values(res?.images || {}).map(image => decodeURI(image._content)) || []
      })
    }

    info(`Successfully ran fetchCamerasByBrand`, { brand, results })
    return results
  } catch (err) {
    error(`Failed to run fetchCamerasByBrand`, err)
  }
}

export default fetchCamerasByBrand
