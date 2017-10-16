import Flickr from "@/flickr"

export default function setDates(
  { flickr = Flickr, photoId = `` } = {},
  { datePosted = ``, dateTaken = ``, dateTakenGranularity = `` } = {}
) {
  return flickr.fetchResource(
    `flickr.photos.setDates`,
    { photoId },
    { datePosted, dateTaken, dateTakenGranularity },
    `write`
  )
}
