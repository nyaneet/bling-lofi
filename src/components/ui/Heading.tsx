import WithContentBaseProps from '@/types/withChildrenBaseProps';
import WithClassBaseProps from '@/types/withClassBaseProps';
import clsx from 'clsx';

export type HeadingProps = WithContentBaseProps & {
  as?: keyof Pick<
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  >;
  size?: 'md' | 'lg';
} & WithClassBaseProps;

const headingClasses = {
  base: 'text-black font-semibold',
  size: {
    md: 'text-2xl',
    lg: 'text-3xl',
  },
};

const Heading = ({
  as: Tag = 'h1',
  size = 'lg',
  className,
  children,
}: HeadingProps) => (
  <Tag
    className={clsx(headingClasses.base, headingClasses.size[size], className)}
  >
    {children}
  </Tag>
);

export default Heading;
