import Flickr from "@/flickr"

async function postPhoto(
  { apiKey = Flickr.apiKey, photoId = ``, title = ``, description = `` } = {},
  { blogId = ``, blogPassword = ``, service = `` } = {}
) {
  return await Flickr.fetchResource(
    `flickr.blogs.postPhoto`,
    { apiKey, photoId, title, description },
    { blogId, blogPassword, service },
    `write`
  )
}

export default postPhoto
