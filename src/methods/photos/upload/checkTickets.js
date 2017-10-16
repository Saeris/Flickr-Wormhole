import Flickr from "@/flickr"

export default function checkTickets({ flickr = Flickr, tickets = `` } = {}) {
  return flickr.fetchResource(`flickr.photos.upload.checkTickets`, { tickets })
}
