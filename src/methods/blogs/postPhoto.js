import Flickr from "@/flickr"

async function postPhoto(
  { flickr = Flickr, photoId = ``, title = ``, description = `` } = {},
  { blogId = ``, blogPassword = ``, service = `` } = {}
) {
  return await flickr.fetchResource(
    `flickr.blogs.postPhoto`,
    { photoId, title, description },
    { blogId, blogPassword, service },
    `write`
  )
}

export default postPhoto
