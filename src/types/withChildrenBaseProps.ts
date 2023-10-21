import { HTMLProps } from 'react';

type WithChildrenBaseProps = {
  children?: HTMLProps<HTMLElement>['children'];
};

export default WithChildrenBaseProps;
