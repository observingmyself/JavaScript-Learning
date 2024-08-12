function palindromeNumber(num){
    let strNum = num.toString()
    let reversedNum = strNum.split('').reverse().join('')
    console.log(strNum === reversedNum ? 'It is a Palindrome' : 'It is not a palindrome number')
}
palindromeNumber(121)


