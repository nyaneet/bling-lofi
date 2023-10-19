import Override from '@/types/override';
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = Override<
  ComponentPropsWithoutRef<'button'>,
  {
    size?: 'md';
    variant?: 'filled' | 'outlined';
    color?: 'black' | 'gray';
  }
>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size = 'md', variant = 'filled', color = 'black', ...props },
    ref
  ) => {
    const { children, disabled } = props;
    const classes = {
      base: 'cursor-pointer rounded-2xl overflow-hidden focusable',
      animated: 'transition-colors duration-300 ease-in-out',
      size: {
        md: 'py-4 px-8 text-base leading-6 font-medium tracking-wide',
      },
      variant: {
        filled: {
          black:
            'bg-charleston text-white focus-visible:opacity-[0.85] focus-visible:shadow-none active:opacity-80 hover:shadow-lg hover:shadow-gray-900/20 active:shadow-none',
          gray: 'bg-platinum text-black focus-visible:opacity-[0.85] focus-visible:shadow-none active:opacity-80 hover:shadow-lg hover:shadow-gray-900/20 active:shadow-none',
        },
        outlined:
          'bg-transparent text-black border-platinum border-solid border-[1px] active:bg-platinum active:opacity-80 hover:bg-platinum',
      },
      disabled: 'opacity-50 cursor-not-allowed',
    };

    return (
      <button
        className={clsx(
          classes.base,
          classes.animated,
          classes.size[size],
          variant === 'filled'
            ? classes.variant[variant][color]
            : classes.variant[variant],
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
