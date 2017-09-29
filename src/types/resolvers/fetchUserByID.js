import getInfo from "@/methods/people/getInfo"

async function fetchUserByID(userId = `me`) {
  try {
    const { person = {} } = await getInfo({ userId })

    const result = {
      id: person?.id,
      username: (person?.username)?._content,
      fullname: (person?.realname)?._content,
      bio: (person?.description)?._content,
      location: (person?.location)?._content,
      profile: (person?.profileurl)?._content,
      isPro: !!person?.isPro,
      icon: !!person?.iconfarm && !!person?.iconserver && !!person?.id
        ? `http://farm${person?.iconfarm}.staticflickr.com/${person?.iconserver}/buddyicons/${person?.id}.jpg`
        : `https://www.flickr.com/images/buddyicon.gif`,
      alias: person?.path_alias
    }

    info(`Successfully ran fetchUserByID`, { userId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchUserByID`, err)
  }
}

export default fetchUserByID
