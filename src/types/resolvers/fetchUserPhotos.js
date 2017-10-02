import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getPhotos from "@/methods/people/getPhotos"

async function fetchUserPhotos({ flickr, userId = `` } = {}) {
  invariant(flickr, missingArgument({ flickr }))
  invariant(userId, missingArgument({ userId }))
  try {
    const extras = [
      `description`,
      `license`,
      `date_upload`,
      `date_taken`,
      `original_format`,
      `last_update`,
      `tags`,
      `views`,
      `media`
    ].join(`,`)
    let page = 1
    let total = 0
    const results = []

    do {
      const { photos = {} } = await getPhotos({ flickr, userId }, { extras, page: page++ })

      total = photos?.pages

      for (const res of photos?.photo || []) {
        results.push({
          id: res?.id,
          secret: res?.secret,
          server: res?.server,
          license: res?.license,
          owner: res?.owner,
          title: res?.title,
          caption: (res?.description)?._content,
          views: res?.views,
          format: res?.originalformat,
          media: res?.media,
          public: !!res?.ispublic,
          friends: !!res?.isfriend,
          family: !!res?.isfamily,
          posted: res?.dataupload,
          taken: res?.datetaken,
          updated: res?.lastupdate
        })
      }
    } while (page <= total)

    info(`Successfully ran fetchUserPhotos`, { userId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchUserPhotos`, err)
  }
}

export default fetchUserPhotos
