import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getBrandModels from "@/methods/cameras/getBrandModels"

async function fetchCamerasByBrand(brand = ``) {
  invariant(brand, missingArgument({brand}))
  try {
    const results = []

    const data = await getBrandModels({ brand })

    if (!!data.cameras && !! data.cameras.camera) {
      for (const res of data.cameras.camera) {
        results.push({
          id: res.id,
          name: res.name._content,
          brand: brand,
          megapixels: (!!res.details && !!res.details.megapixels)
            ? res.details.megapixels._content
            : null,
          zoom: (!!res.details && !!res.details.zoom)
            ? res.details.zoom._content
            : null,
          lcdSize: (!!res.details && !!res.details.lcd_screen_size)
            ? res.details.lcd_screen_size._content
            : null,
          storage: (!!res.details && !!res.details.memory_type)
            ? res.details.memory_type._content.split(`, `)
            : [],
          images: !!res.images
            ? Object.values(res.images).map(image => decodeURI(image._content))
            : []
        })
      }
    }

    info(`Successfully ran fetchCamerasByBrand`, { brand, results })
    return results
  } catch (err) {
    error(`Failed to run fetchCamerasByBrand`, err)
  }
}

export default fetchCamerasByBrand
