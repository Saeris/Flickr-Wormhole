import Flickr from "@/flickr"

async function subscribe(
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
  return await flickr.fetchResource(
    `flickr.push.subscribe`,
    { topic, callback, verify },
    { verifyToken, leaseSeconds, lat, lon, radius, radiusUnits, accuracy, nsids, tags, placeIds, woeIds },
    `read`
  )
}

export default subscribe
