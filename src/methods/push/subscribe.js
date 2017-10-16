import Flickr from "@/flickr"

export default function subscribe(
  { flickr = Flickr, topic = ``, callback = ``, verify = `` } = {},
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
  return flickr.fetchResource(
    `flickr.push.subscribe`,
    { topic, callback, verify },
    { verifyToken, leaseSeconds, lat, lon, radius, radiusUnits, accuracy, nsids, tags, placeIds, woeIds },
    `read`
  )
}
