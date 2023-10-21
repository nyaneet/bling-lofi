// get currency from store in future

const useFormateAsCurrency = (amount: number, currency: string): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });
  return formatter.format(amount);
};

export default useFormateAsCurrency;
