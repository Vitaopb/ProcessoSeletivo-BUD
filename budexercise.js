const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite um valor: ', (num) => {
  const newNumber = num.split('').map(Number)
  console.log(consecutiveNumbers(newNumber))
  process.exit(0)
})

function consecutiveNumbers(numbers) {
  const result = []
  for (let i = 0; i < numbers.length; i++) {
    let stack = [numbers[i]]             
    let x = i + 1  
    for (; (numbers[x] == stack[stack.length - 1] + 1) || (numbers[x] == 0 && stack[stack.length - 1] == 9); x++) {
      stack.push(numbers[x])
    }
    if (stack.length > 1) result.push(stack)
    i = x - 1                                                 
  }

  const maxNumber = result.reduce((prev, curr) => {
    const number = curr.join('')
    if (Number(number) > Number(prev)) return number
    return prev
  }, 0)

  return maxNumber
}



