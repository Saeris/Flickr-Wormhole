import Flickr from "@/flickr"

export default function placesForTags(
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
  return flickr.fetchResource(
    `flickr.places.placesForTags`,
    { placeTypeId },
    {
      tags,
      tagsMode,
      machineTags,
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
