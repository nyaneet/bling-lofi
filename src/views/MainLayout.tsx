import clsx from 'clsx';
import { HTMLProps, ReactNode } from 'react';

export type MainLayoutProps = {
  className?: HTMLProps<HTMLElement>['className'];
  children?: ReactNode;
};

const MainLayout = ({ className, children }: MainLayoutProps) => {
  return (
    <div
      className={clsx(
        'min-h-[100svh] min-w-[260px] max-w-sm m-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainLayout;
