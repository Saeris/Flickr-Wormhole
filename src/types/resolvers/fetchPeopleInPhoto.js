import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getList from "@/methods/photos/people/getList"

async function fetchPeopleInPhoto(photoId = ``) {
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { people = {} } = await getList({ photoId })
    const results = []

    for (const res of people?.person || []) {
      results.push({
        person: res?.nsid,
        addedBy: res?.added_by,
        x: res?.x || null,
        y: res?.y || null,
        width: res?.w || null,
        height: res?.h || null
      })
    }

    info(`Successfully ran fetchPeopleInPhoto`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPeopleInPhoto`, err)
  }
}

export default fetchPeopleInPhoto
