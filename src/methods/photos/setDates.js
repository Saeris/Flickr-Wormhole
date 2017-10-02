import Flickr from "@/flickr"

async function setDates(
  { flickr = Flickr, photoId = `` } = {},
  { datePosted = ``, dateTaken = ``, dateTakenGranularity = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.setDates`,
    { photoId },
    { datePosted, dateTaken, dateTakenGranularity },
    `write`
  )
}

export default setDates
