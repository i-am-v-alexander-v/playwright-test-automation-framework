class GenerateUtils {
  async randomString(length: number) {
    const allowCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789'

    let result = ''

    for (let i = 0; i < length; i++) {
      result += allowCharacters.charAt(Math.floor(Math.random() * allowCharacters.length))
    }

    return result
  }
}

export default new GenerateUtils()
