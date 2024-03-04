// Display Money in Indian Format
export const displayMoney = (n: number): any => {
  const numFormat = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return numFormat.format(n).split('.', 1);
};

// Calculate Discount Percentage
export const calculateDiscount = (
  discountedPrice: number,
  originalPrice: number,
): number => {
  const discountedPercent = (discountedPrice / originalPrice) * 100;

  return Math.round(discountedPercent);
};

// Calculate Total Amount
export const calculateTotal = (arr: any[]): number => {
  const total = arr.reduce((accum, val) => accum + val, 0);

  return total;
};
