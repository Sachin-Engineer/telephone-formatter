const input = document.querySelector('input')

let alreadyRun = false;

input.addEventListener('input', () => {
    let conditionIsTrue = true;

    if(input.value.length === 9) {
        input.value = `${input.value.substring(2, 5)}`
    }

    // Here, i am handling number only input
    if(/\d+$/g.test(input.value)) {
        input.value = input.value;
    } else {
        input.value = input.value.substring(0, input.value.length-1)
    }

    if(input.value.length === 4 && conditionIsTrue && !alreadyRun) {
        const countryCode = input.value.substring(0, 3)
        const phoneNumber = input.value.substring(3, input.value.length+1)
        input.value = `+(${countryCode}) - ${phoneNumber}`
        alreadyRun = true;
    }
    if(input.value.length > 10 && input.value.includes('+')) {
        const countryCode = input.value.substring(2, 5)
        const phoneNumber = input.value.substring(9, input.value.length+1)
        input.value = `+(${countryCode}) - ${phoneNumber}`
    }
    if(input.value.length < 4) {
        alreadyRun = false;
    }

    if(input.value.length === 9) {
        input.value = `${input.value.substring(2, 5)}`
    }
})