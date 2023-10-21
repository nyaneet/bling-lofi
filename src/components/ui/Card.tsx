import WithChildrenBaseProps from '@/types/withChildrenBaseProps';
import WithClassBaseProps from '@/types/withClassBaseProps';
import clsx from 'clsx';

type CardProps = WithClassBaseProps & WithChildrenBaseProps;

const Card = ({ className, children }: CardProps) => (
  <div
    className={clsx(
      'p-6 shadow-base bg-white border-platinum border-solid border-[1px] rounded-3xl',
      className
    )}
  >
    {children}
  </div>
);

export default Card;
