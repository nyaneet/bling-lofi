import WithContentBaseProps from '@/types/withChildrenBaseProps';
import WithClassBaseProps from '@/types/withClassBaseProps';
import clsx from 'clsx';

export type MainLayoutProps = WithClassBaseProps & WithContentBaseProps;

const MainLayout = ({ className, children }: MainLayoutProps) => (
  <div className={clsx('h-[100dvh] min-w-[320px] max-w-md m-auto', className)}>
    {children}
  </div>
);

export default MainLayout;
