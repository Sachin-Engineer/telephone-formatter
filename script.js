const input = document.querySelector('input')

input.addEventListener('input', () => {
    if(input.value.length == 4) {
        const countryCode = input.value.slice(0, 3)
        console.log(countryCode)
        const phoneNumber = input.value.slice(3, input.value.length+1)
        console.log(phoneNumber)
        input.value = `+(${countryCode}) - ${phoneNumber}`
    }
    if(input.value.length > 10 && input.value.includes('+')) {
        const countryCode = input.value.slice(2, 5)
        console.log(countryCode)
        const phoneNumber = input.value.slice(9, input.value.length+1)
        console.log(phoneNumber)
        input.value = `+(${countryCode}) - ${phoneNumber}`
    }
})