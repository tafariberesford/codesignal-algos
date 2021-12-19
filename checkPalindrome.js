function solution(inputString) {
  inputString.toLowerCase
  const reverse = inputString.split("").reverse().join("")
  
  if (reverse == inputString) {
    return true
  } else return false
}

console.log(solution("owo"))