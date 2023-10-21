import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Separator from '@/components/ui/Separator';
import WithClassBaseProps from '@/types/withClassBaseProps';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CurrencyAmount from './CurrencyAmount';

type ExpenseShortInfo = {
  id: number;
  name: string;
  amount: number;
  currency: string;
};
const expensesTest: ExpenseShortInfo[] = [
  { id: 1, name: 'Oysters 12 Pcs', amount: 100, currency: 'USD' },
  { id: 2, name: 'King Crab Legs', amount: 100, currency: 'USD' },
  { id: 3, name: 'Grill Prawns', amount: 190, currency: 'USD' },
];

const ExpenseSummary = ({ className }: WithClassBaseProps) => (
  <Card className={clsx('space-y-4', className)}>
    <Heading as="div" size="md" className="flex justify-between">
      <span>Total:</span>
      <CurrencyAmount amount={390} currency="USD" />
    </Heading>
    <Separator as="div" />
    <div className="space-y-2">
      {expensesTest.map((expense) => (
        <ExpensePreview key={expense.id} expense={expense} />
      ))}
      <Link
        to="#"
        className="text-[#007AFF] font-semibold inline-flex items-center focusable rounded"
      >
        and 20 more <ChevronRightIcon strokeWidth={3} className="h-4" />
      </Link>
    </div>
    <Separator as="div" />
    <Heading as="div" size="md" className="flex justify-between">
      <span>Your share:</span>
      <CurrencyAmount amount={100} currency="USD" />
    </Heading>
  </Card>
);

type ExpensePreviewProps = {
  expense: ExpenseShortInfo;
};

const ExpensePreview = ({ expense }: ExpensePreviewProps) => {
  const { name, amount, currency } = expense;
  return (
    <div className="flex justify-between">
      <span>{name}</span>
      <CurrencyAmount amount={amount} currency={currency} />
    </div>
  );
};

export default ExpenseSummary;
