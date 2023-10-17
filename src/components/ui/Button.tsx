import Override from '@/types/override';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = Override<
  ComponentPropsWithoutRef<'button'>,
  {
    size?: 'md';
    variant?: 'filled' | 'outlined';
  }
>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'filled', ...props }, ref) => {
    const { children, disabled } = props;
    const classes = {
      base: 'cursor-pointer rounded-2xl transition duration-300 ease-in-out overflow-hidden focusable',
      size: {
        md: 'py-4 px-8 text-base leading-6 font-medium tracking-wide',
      },
      variant: {
        filled:
          'bg-charleston text-white focus-visible:opacity-[0.85] focus-visible:shadow-none active:opacity-[0.85] hover:shadow-lg hover:shadow-gray-900/20 active:shadow-none',
        outlined:
          'bg-transparent text-black border-[#E5E5E9] border-solid border-[1px] active:bg-[#E5E5E9] active:opacity-80 hover:bg-[#E5E5E9]',
      },
      disabled: 'opacity-50 cursor-not-allowed',
    };

    return (
      <button
        className={clsx(
          classes.base,
          classes.size[size],
          classes.variant[variant],
          disabled && classes.disabled,
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
