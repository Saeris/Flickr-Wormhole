import Flickr from "@/flickr"

export default async function subscribe(
  { apiKey = Flickr.apiKey, topic = ``, callback = ``, verify = `` } = {},
  {
    verifyToken = ``,
    leaseSeconds = 0,
    lat = ``,
    lon = ``,
    radius = ``,
    radiusUnits = ``,
    accuracy = ``,
    nsids = ``,
    tags = ``,
    placeIds = ``,
    woeIds = ``
  } = {}
) {
  return await Flickr.fetchResource(
    `flickr.push.subscribe`,
    { apiKey, topic, callback, verify },
    { verifyToken, leaseSeconds, lat, lon, radius, radiusUnits, accuracy, nsids, tags, placeIds, woeIds },
    `read`
  )
}
