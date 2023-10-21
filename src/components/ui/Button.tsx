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

const buttonClasses = {
  base: 'min-w-[128px] cursor-pointer rounded-2xl focusable',
  animated: 'transition-colors transition-shadow duration-300 ease-in-out',
  size: {
    md: 'py-4 px-8 text-base leading-6 font-medium tracking-wide',
  },
  variant: {
    filled: {
      base: 'focus-visible:opacity-[0.85] focus-visible:shadow-none active:opacity-70 hover:shadow-base hover:shadow-gray-900/20 active:shadow-none',
      black: 'bg-charleston text-white',
      gray: 'bg-platinum text-black',
    },
    outlined:
      'bg-transparent text-black border-platinum border-solid border-[1px] active:bg-platinum active:opacity-80 hover:bg-platinum',
  },
  disabled: 'opacity-50 cursor-not-allowed',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size = 'md', variant = 'filled', color = 'black', ...props },
    ref
  ) => {
    const { children, disabled } = props;

    return (
      <button
        className={clsx(
          buttonClasses.base,
          buttonClasses.animated,
          buttonClasses.size[size],
          variant === 'filled'
            ? clsx(
                buttonClasses.variant.filled.base,
                buttonClasses.variant.filled[color]
              )
            : buttonClasses.variant[variant],
          disabled && buttonClasses.disabled,
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
