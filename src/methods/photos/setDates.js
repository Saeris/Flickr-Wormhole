import Flickr from "@/flickr"

async function setDates(
  { apiKey = Flickr.apiKey, photoId = `` } = {},
  { datePosted = ``, dateTaken = ``, dateTakenGranularity = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.photos.setDates`,
    { apiKey, photoId },
    { datePosted, dateTaken, dateTakenGranularity },
    `write`
  )
}

export default setDates
