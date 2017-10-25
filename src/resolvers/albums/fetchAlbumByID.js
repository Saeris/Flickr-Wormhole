// @flow
import { Flickr } from "@/flickr"
import { invariant, missingArgument } from "@/utilities"
import { Album } from "@/models"
import getInfo from "@/methods/photosets/getInfo"

async function fetchAlbumByID<Required: { flickr: Flickr, userId: string, photosetId: string}>(
  { flickr, userId = ``, photosetId = `` }: Required
): Album {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  invariant(photosetId, missingArgument({ photosetId }))
  try {
    const { photoset = {} } = await getInfo({ flickr, userId, photosetId })
    const result = new Album(photoset)

    info(`Successfully ran fetchAlbumByID`, { userId, photosetId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchAlbumByID`, err)
  }
}

export default fetchAlbumByID
