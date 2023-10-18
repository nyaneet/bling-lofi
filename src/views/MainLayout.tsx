import clsx from 'clsx';
import { HTMLProps, ReactNode } from 'react';

export type MainLayoutProps = {
  className?: HTMLProps<HTMLElement>['className'];
  children?: ReactNode;
};

const MainLayout = ({ className, children }: MainLayoutProps) => (
  <div className={clsx('h-[100dvh] min-w-[320px] max-w-md m-auto', className)}>
    {children}
  </div>
);

export default MainLayout;
