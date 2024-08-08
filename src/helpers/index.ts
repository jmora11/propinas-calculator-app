export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD'
  }).format(currency);
}
