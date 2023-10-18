import WithContentBaseProps from '@/types/withContentBaseProps';
import MainLayout from '@/views/MainLayout';
import clsx from 'clsx';

export type WithControlsLayoutProps = WithContentBaseProps;

const WithControlsLayout = ({
  className,
  children,
}: WithControlsLayoutProps) => (
  <MainLayout className={clsx('flex flex-col', className)}>
    {children}
  </MainLayout>
);

export type MainContentProps = WithContentBaseProps;

const MainContent = ({ className, children }: MainContentProps) => (
  <main
    className={clsx(
      'flex-grow px-4 py-6',
      // 'overflow-y-auto overflow-x-hidden',
      className
    )}
  >
    {children}
  </main>
);
WithControlsLayout.MainContent = MainContent;

export type TopControlsProps = WithContentBaseProps;
const TopControls = ({ className, children }: TopControlsProps) => (
  <div className={clsx('px-4 pt-8 sticky top-0 bg-white z-10', className)}>
    {children}
    <span className="block absolute left-0 -bottom-8 h-8 w-full bg-gradient-to-b from-white -z-10" />
  </div>
);
WithControlsLayout.TopControls = TopControls;

export type BottomControlsProps = WithContentBaseProps;
const BottomControls = ({ className, children }: BottomControlsProps) => (
  <div className={clsx('px-4 pb-4 sticky bottom-0 bg-white z-10', className)}>
    {children}
    <span className="block absolute left-0 -top-4 h-4 w-full bg-gradient-to-t from-white -z-10" />
  </div>
);
WithControlsLayout.BottomControls = BottomControls;

export default WithControlsLayout;
