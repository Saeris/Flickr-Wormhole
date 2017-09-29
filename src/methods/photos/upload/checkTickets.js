import Flickr from "@/flickr"

async function checkTickets({ apiKey = Flickr.apiKey, tickets = `` } = {}) {
  return await Flickr.fetchResource(`flickr.photos.upload.checkTickets`, { apiKey, tickets })
}

export default checkTickets
