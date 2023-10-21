import WithClassBaseProps from '@/types/withClassBaseProps';
import clsx from 'clsx';

type SeparatorCommonProps = {
  as?: keyof Pick<JSX.IntrinsicElements, 'hr' | 'div'>;
} & WithClassBaseProps;

export type SeparatorProps = SeparatorCommonProps &
  (
    | { vertical?: true; horizontal?: never }
    | { horizontal?: true; vertical?: never }
  );

const Separator = ({
  className,
  as: Tag = 'hr',
  vertical,
  horizontal,
}: SeparatorProps) => {
  if (!vertical && !horizontal) horizontal = true;

  return (
    <Tag
      className={clsx(
        'bg-platinum',
        horizontal && 'h-[1px] w-full',
        vertical && 'w-[1px] h-full',
        className
      )}
    />
  );
};

export default Separator;
