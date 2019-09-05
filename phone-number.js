function createPhoneNumber(numbers) {
  var phoneNumber
  if (numbers.length === 10) {
    for (var i = 0; i < numbers.length; i++) {
      phoneNumber = (`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
    }
    return phoneNumber
  } else {
    return 'Please insert the correct number'
  }
} 