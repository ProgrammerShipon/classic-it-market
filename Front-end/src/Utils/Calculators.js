export const percentage = (originalPrice, discountValue) => {
  if (
    isNaN(originalPrice) ||
    isNaN(discountValue) ||
    discountValue < 0 ||
    discountValue > 100
  ) {
    console.log(
      "Invalid input. Please provide valid numbers for mainPrice and percentageValue (0-100)."
    );
  }

  const pt = (originalPrice * discountValue) / 100;
  const discountedPrice = originalPrice - pt;

  return {
    originalPrice: originalPrice,
    percentageValue: discountValue,
    discountedPrice,
    discountAmount: pt,
  };
};
