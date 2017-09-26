import getBrands from "@/methods/cameras/getBrands"

export default async function fetchBrands() {
  try {
    const results = []
    const data = await getBrands()

    if (!!data.brands && !!data.brands.brand) {
      for (const res of data.brands.brand) {
        results.push({
          id: res.id,
          name: res.name
        })
      }
    }

    info(`Successfully ran fetchBrands`, { results })
    return results
  } catch (err) {
    error(`Failed to run fetchBrands`, err)
  }
}
