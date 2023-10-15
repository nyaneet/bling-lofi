import clsx from 'clsx';
import React, { HTMLProps, ReactNode } from 'react';

export type ButtonProps = {
  className?: HTMLProps<HTMLElement>['className'];
  size?: 'md';
  variant?: 'primary';
  children?: ReactNode;
};

const classes = {
  base: 'inline-block cursor-pointer rounded-2xl transition duration-300 ease-in-out overflow-hidden',
  size: {
    md: 'py-4 px-8 text-base leading-6 font-medium tracking-wide',
  },
  variant: {
    primary:
      'bg-charleston text-white focus:outline-none focus-visible:ring-2 focus-visible:opacity-[0.85] focus-visible:shadow-none active:opacity-[0.85] focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-lg hover:shadow-gray-900/20 active:shadow-none',
  },
  disabled: 'opacity-50 cursor-not-allowed',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size = 'md', variant = 'primary', children, ...props },
    ref
  ) => {
    return (
      <button
        className={clsx(
          classes.base,
          classes.size[size],
          classes.variant[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
