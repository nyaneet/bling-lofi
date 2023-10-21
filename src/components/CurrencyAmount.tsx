import useFormateAsCurrency from '@/hooks/useFormattedCurrency';
import WithClassBaseProps from '@/types/withClassBaseProps';
import clsx from 'clsx';

export type CurrencyAmountProps = {
  amount: number;
  currency: string;
} & WithClassBaseProps;

const CurrencyAmount = ({
  amount,
  currency,
  className,
}: CurrencyAmountProps) => {
  const formatedValue = useFormateAsCurrency(amount, currency);

  return (
    <span className={clsx('text-black', className)}>
      <span className="text-[#3C3C434D]">{formatedValue.slice(0, 1)}</span>
      {formatedValue.slice(1)}
    </span>
  );
};
export default CurrencyAmount;
