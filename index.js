class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // const Array = string.split("");
    // const newArray = [];
    // for (let i = 0; i < Array.length; i++) {
    //   if ((Array[i] >= 65 && Array[i] <= 90) || (Array[i] >= 97 && Array[i] <= 122) || (Array[i] == 32) || (Array[i] == 39) || (Array[i] == 45)) {
    //     newArray.push(newArray[i]);
    //   } else {
    //     continue;
    //   }
    // }
    // string = newArray.toString;
    // return string;
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(array[i]))
      } else {
        if (except.includes(array[i])) {
          result.push(array[i])
        } else {
          result.push(this.capitalize(array[i]))
        }
      }

    }
    return result.join(" ");
  }
}

Formatter.sanitize("hello world")