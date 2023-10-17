import Override from '@/types/override';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type TextInputProps = Override<
  ComponentPropsWithoutRef<'input'>,
  { placeholder: string }
>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ placeholder, className, ...props }: TextInputProps, ref) => (
    <input
      className={clsx(
        'p-4 text-base font-normal border-[#E5E5EA] border-solid border-[1px] rounded-2xl focusable',
        className
      )}
      ref={ref}
      placeholder={placeholder}
      {...props}
    />
  )
);

export default TextInput;
