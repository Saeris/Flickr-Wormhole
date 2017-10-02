import Flickr from "@/flickr"

async function checkTickets({ flickr = Flickr, tickets = `` } = {}) {
  return await flickr.fetchResource(`flickr.photos.upload.checkTickets`, { tickets })
}

export default checkTickets
