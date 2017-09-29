import getBrands from "@/methods/cameras/getBrands"

async function fetchBrands() {
  try {
    const results = []
    const data = await getBrands()

    for (const res of data?.brands?.brand) {
      results.push({
        id: res.id,
        name: res.name
      })
    }

    info(`Successfully ran fetchBrands`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchBrands`, err)
  }
}

export default fetchBrands
