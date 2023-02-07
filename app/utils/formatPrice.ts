
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('hu-HU').format(price)
}