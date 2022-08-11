const FORMAT_CURRENCY = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export const currencyFormatter = (number: number) => {
    return FORMAT_CURRENCY.format(number)
}