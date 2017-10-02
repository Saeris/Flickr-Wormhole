import Flickr from "@/flickr"

async function getNotInSet(
  { flickr = Flickr } = {},
  {
    minUploadDate = ``,
    maxUploadDate = ``,
    minTakenDate = ``,
    maxTakenDate = ``,
    privacyFilter = 0,
    media = `all`,
    extras = ``,
    page = 1,
    perPage = 100
  } = {}
) {
  return await flickr.fetchResource(
    `flickr.photos.getNotInSet`,
    {},
    { minUploadDate, maxUploadDate, minTakenDate, maxTakenDate, privacyFilter, media, extras, page, perPage },
    `read`
  )
}

export default getNotInSet
