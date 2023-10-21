import WithClassBaseProps from '@/types/withClassBaseProps';
import { Combobox as HeadlessCombobox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useMemo, useState } from 'react';

export type ComboboxItem = {
  id: string | number;
  value: string;
};

export type ComboboxProps = {
  items: ComboboxItem[];
  placeholder?: string;
  id?: string;
} & WithClassBaseProps;

const Combobox = ({ className, items, placeholder, id }: ComboboxProps) => {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(
    () =>
      query === ''
        ? items
        : items.filter((item) =>
            item.value
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          ),
    [query, items]
  );

  return (
    <HeadlessCombobox value={selected} onChange={setSelected}>
      <div className={clsx('relative', className)}>
        <div className="relative w-full cursor-default">
          <HeadlessCombobox.Input
            className="py-4 pl-4 pr-10 w-full text-base font-normal border-[#E5E5EA] border-solid border-[1px] rounded-2xl focusable"
            placeholder={placeholder}
            type="text"
            id={id}
            displayValue={(item: ComboboxItem) => item.value}
            onChange={(event) => setQuery(event.target.value)}
          />
          <HeadlessCombobox.Button className="absolute top-0 bottom-0 right-0 flex items-center pr-4">
            <ChevronDownIcon className="text-gray-300 h-4" strokeWidth={3} />
          </HeadlessCombobox.Button>
        </div>
        <HeadlessCombobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto shadow-md border-[#E5E5EA] border-solid border-[1px] rounded-md bg-white z-50">
          {filteredItems.length === 0 && query !== '' ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filteredItems.map((item) => (
              <ComboboxOption key={item.id} item={item} />
            ))
          )}
        </HeadlessCombobox.Options>
      </div>
    </HeadlessCombobox>
  );
};

type ComboboxOptionProps = {
  item: ComboboxItem;
};

const ComboboxOption = ({ item }: ComboboxOptionProps) => (
  <HeadlessCombobox.Option
    key={item.id}
    className={({ active }) =>
      `relative cursor-default select-none py-2 pl-4 pr-4 ${
        active && 'bg-[#E5E5EA]'
      }`
    }
    value={item}
  >
    {({ selected }) => (
      <span
        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
      >
        {item.value}
      </span>
    )}
  </HeadlessCombobox.Option>
);

export default Combobox;
