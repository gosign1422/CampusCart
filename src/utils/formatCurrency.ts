export const formatCurrency = (amount: number | undefined): string => {
  if (typeof amount !== 'number') {
    return '₹0';
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};