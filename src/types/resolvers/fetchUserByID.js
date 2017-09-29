import getInfo from "@/methods/people/getInfo"

async function fetchUserByID(userId = `me`) {
  try {
    const data = await getInfo({ userId })

    const result = !!data.person
      ? {
        id: data.person.id,
        username: data.person.username._content,
        fullname: data.person.realname._content,
        bio: data.person.description._content,
        location: data.person.location._content,
        profile: data.person.profileurl._content,
        isPro: !!data.person.isPro,
        iconServer: data.person.iconserver,
        iconFarm: data.person.iconfarm,
        alias: data.person.path_alias
      }
      : {}

    info(`Successfully ran fetchUserByID`, { userId, result })
    return result
  } catch (err) {
    error(`Failed to run fetchUserByID`, err)
  }
}

export default fetchUserByID
