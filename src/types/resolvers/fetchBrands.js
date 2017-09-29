import getBrands from "@/methods/cameras/getBrands"

async function fetchBrands() {
  try {
    const { brands = {} } = await getBrands()
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
