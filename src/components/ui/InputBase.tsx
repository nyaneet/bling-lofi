import Override from '@/types/override';
import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';

export type InputBaseProps = Override<
  ComponentPropsWithoutRef<'input'>,
  {
    leading?: ReactNode;
    trailing?: ReactNode;
  }
>;

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, leading, trailing, ...props }: InputBaseProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const leadingRef = useRef<HTMLDivElement>(null);
    const trailingRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => inputRef.current!, []);
    useLayoutEffect(() => {
      if (leadingRef.current) {
        const leadingWidth = leadingRef.current.offsetWidth;
        inputRef.current!.style.paddingLeft = `${leadingWidth}px`;
      }
    }, [leading]);
    useLayoutEffect(() => {
      if (trailingRef.current) {
        const trailingWidth = trailingRef.current.offsetWidth;
        inputRef.current!.style.paddingRight = `${trailingWidth}px`;
      }
    }, [trailing]);

    return (
      <div className={clsx('relative', className)}>
        {leading && (
          <div
            ref={leadingRef}
            className="absolute top-0 bottom-0 left-0 h-full"
          >
            {leading}
          </div>
        )}
        <input
          ref={inputRef}
          className={clsx(
            'focusable w-full p-4 text-base font-normal border-[#E5E5EA] border-solid border-[1px] rounded-2xl',
            trailing && 'pr-'
          )}
          {...props}
        />
        {trailing && (
          <div
            ref={trailingRef}
            className="absolute top-0 bottom-0 right-0 h-full"
          >
            {trailing}
          </div>
        )}
      </div>
    );
  }
);

export default InputBase;
