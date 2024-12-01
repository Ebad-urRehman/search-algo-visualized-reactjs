export function findReminder(divisor, divident) {
    let c = parseInt(divident/divisor)

    let reminder = divident - (divisor * c)
    return reminder
}

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
