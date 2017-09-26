import Flickr from "@/flickr"

export default async function checkTickets({ apiKey = Flickr.apiKey, tickets = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.upload.checkTickets`, { apiKey, tickets })
}
