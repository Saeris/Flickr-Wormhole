import Flickr from "@/flickr"

async function placesForTags(
  { flickr = Flickr, placeTypeId = `` } = {},
  {
    tags = ``,
    tagsMode = ``,
    machineTags = ``,
    machineTagsMode = ``,
    minUploadDate = ``,
    maxUploadDate = ``,
    minTakenDate = ``,
    maxTakenDate = ``,
    threshold = ``,
    placeId = ``,
    woeId = ``
  } = {}
) {
  return await flickr.fetchResource(
    `flickr.places.placesForTags`,
    { placeTypeId },
    {
      tags,
      tagsMode,
      machinetags,
      machineTagsMode,
      minUploadDate,
      maxUploadDate,
      minTakenDate,
      maxTakenDate,
      threshold,
      placeId,
      woeId
    }
  )
}

export default placesForTags
