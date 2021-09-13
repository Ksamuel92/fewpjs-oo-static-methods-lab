class Formatter {
  static capitalize (string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return  string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize (string) {
  const arrayOfWords = string.split(" ");
  const titleizedArray = arrayOfWords.map((word, index) => {
    if (!(this.isInvalidForTitleize(word)) || (index === 0) ){
      return this.capitalize(word)
    } else {
      return word
    }
  })
  debugger
  return titleizedArray.join(" ")
}


 static isInvalidForTitleize (word) {
   const forbiddenWords = ["a", "an", "but", "from", "of", "the", "and", "for", "at", "by"]
    return (forbiddenWords.includes(word))
  }
}