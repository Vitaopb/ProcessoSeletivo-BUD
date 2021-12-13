const num = prompt("Digite um número: ")
const newNumber = num.split('')
let numbers = []

newNumber.forEach((item) => {
  numbers.push(Number(item))
})

function consecutiveNumbers(arrayNum) {
  const result = []
  for (let i = 0; i < numbers.length; i++) {
    let stack = [numbers[i]]             
    let x = i + 1  
    for (; numbers[x] == stack[stack.length - 1] + 1; x++) {
      stack.push(numbers[x])
    }
    if (stack.length > 1) result.push(stack)
    i = x - 1                                                 
  }

  const maxNumber = result.reduce((prev, curr) => {
    const number = Number(curr.join(''))
    if (number > prev) return number
    return prev
  }, 0)

  return maxNumber
}

console.log(consecutiveNumbers(numbers))


