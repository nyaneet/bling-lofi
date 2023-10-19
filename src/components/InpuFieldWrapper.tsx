import WithContentBaseProps from '@/types/withContentBaseProps';

export type InputFieldWrapperProps = WithContentBaseProps & {
  id: string;
  label: string;
  helperMessage?: string;
};

const InputFieldWrapper = ({
  className,
  id,
  label,
  helperMessage,
  children,
}: InputFieldWrapperProps) => (
  <div className={className}>
    <label htmlFor={id}>
      <span className="text-sm text-[#8A8A8D] font-normal block mb-1">
        {label}
      </span>
      {children}
    </label>
    <span>{helperMessage}</span>
  </div>
);

export default InputFieldWrapper;
