import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import WithClassBaseProps from '@/types/withClassBaseProps';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import CurrencyAmount from './CurrencyAmount';
import Separator from './ui/Separator';

type DebtShortInfo = {
  id: number;
  sender: string;
  receiver: string;
  amount: number;
  currency: string;
  status: 'pending' | 'settled';
};

const debtsTest: DebtShortInfo[] = [
  {
    id: 1,
    sender: 'Misha',
    receiver: 'Kostya',
    amount: 30,
    currency: 'USD',
    status: 'pending',
  },
  {
    id: 2,
    sender: 'Nekit',
    receiver: 'Misha',
    amount: 45,
    currency: 'USD',
    status: 'pending',
  },
  {
    id: 3,
    sender: 'Vlad',
    receiver: 'Kostya',
    amount: 23,
    currency: 'USD',
    status: 'settled',
  },
];

const DebtsSummary = ({ className }: WithClassBaseProps) => (
  <Card className={clsx('space-y-4', className)}>
    <Heading as="div" size="md">
      Settle Debts
    </Heading>
    {debtsTest.map((debt, idx, debts) => (
      <>
        <DebtPreview key={debt.id} debt={debt} />
        {++idx !== debts.length && <Separator as="div" />}
      </>
    ))}
  </Card>
);

type DebtPreviewProps = {
  debt: DebtShortInfo;
};

const DebtPreview = ({ debt }: DebtPreviewProps) => {
  const { sender, receiver, amount, currency, status } = debt;
  return (
    <div className="flex justify-between items-center">
      <div>
        {sender} gives <CurrencyAmount amount={amount} currency={currency} /> to{' '}
        {receiver}
      </div>
      {status === 'settled' ? (
        <CheckCircleIcon className="h-5 text-[#34C759]" />
      ) : (
        <XCircleIcon className="h-5 text-[#D1D1D6]" />
      )}
    </div>
  );
};

export default DebtsSummary;
