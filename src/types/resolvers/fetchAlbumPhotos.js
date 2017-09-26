import { missingArgument } from "@/config/errors"
import { invariant } from "@/utilities"
import getPhotos from "@/methods/photosets/getPhotos"

export default async function fetchAlbumPhotos(userId = ``, photosetId = ``) {
  invariant(userId, missingArgument({userId}))
  invariant(photosetId, missingArgument({photosetId}))
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
      const data = await getPhotos({ userId, photosetId }, { extras, page: page++ })
      console.log(data)

      if (!!data.photoset && !!data.photoset.pages && !!data.photoset.photo) {
        total = data.photoset.pages

        for (const res of data.photoset.photo) {
          results.push({
            id: res.id,
            secret: res.secret,
            server: res.server,
            license: res.license,
            owner: res.owner,
            title: res.title,
            caption: res.description._content,
            views: res.views,
            format: res.originalformat,
            media: res.media,
            public: !!res.ispublic,
            friends: !!res.isfriend,
            family: !!res.isfamily,
            posted: res.dataupload,
            taken: res.datetaken,
            updated: res.lastupdate
          })
        }
      }
    } while (page <= total)

    info(`Successfully ran fetchAlbumPhotos`, { userId, photosetId, results })
    return results
  } catch (err) {
    error(`Failed to run fetchAlbumPhotos`, err)
  }
}
