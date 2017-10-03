import { invariant, missingArgument } from "@/utilities"
import { User } from "@/models"
import getInfo from "@/methods/people/getInfo"

async function fetchUserByID({ flickr, userId = `me` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  try {
    const { person = {} } = await getInfo({ flickr, userId })
    const result = new User(person)

    info(`Successfully ran fetchUserByID`, { userId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchUserByID`, err)
  }
}

export default fetchUserByID
