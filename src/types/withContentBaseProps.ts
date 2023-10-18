import { HTMLProps, ReactNode } from 'react';

type WithContentBaseProps = {
  className?: HTMLProps<HTMLElement>['className'];
  children?: ReactNode;
};

export default WithContentBaseProps;
