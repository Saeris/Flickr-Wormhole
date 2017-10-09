import { invariant, missingArgument } from "@/utilities"
import { Person } from "@/models"
import getList from "@/methods/photos/people/getList"

async function fetchPeopleInPhoto({ flickr, photoId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(photoId, missingArgument({ photoId }))
  try {
    const { people = {} } = await getList({ flickr, photoId })
    const results = people?.person?.map(data => new Person({ photoId, ...data})) || []

    info(`Successfully ran fetchPeopleInPhoto`, { photoId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchPeopleInPhoto`, err)
  }
}

export default fetchPeopleInPhoto
