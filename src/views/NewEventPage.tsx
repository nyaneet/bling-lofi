import Button from '@/components/ui/Button';
import TextInput from '@/components/ui/TextInput';
import MainLayout from '@/views/MainLayout';
import { MouseEventHandler, ReactNode, useCallback, useState } from 'react';

const removeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#000"
      stroke-width="2"
      stroke-miterlimit="10"
      d="m18.947 17.153 26.098 25.903m-26 .097 25.902-26.097"
    />
  </svg>
);

const NewEventPage = () => {
  const [participants, setParticipants] = useState<string[]>(['']);

  const addParticipant = useCallback(() => {
    setParticipants((prev) => [...prev, '']);
  }, []);
  const removeParticipant = useCallback((idx: number) => {
    setParticipants((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  }, []);

  return (
    <MainLayout className="relative flex flex-col">
      {/* content */}
      <div className="py-8 space-y-4 mb-4 flex-grow">
        <h1 className="text-3xl font-semibold">New event</h1>
        <TextInputField__Temp
          id="event-name"
          label="Your name"
          placeholder="Enter name..."
        />
        <h2 className="text-2xl font-semibold">Participants</h2>

        <TextInputField__Temp
          id="host-name"
          label="Name"
          placeholder="Enter your name..."
        />
        {participants.map((_, idx) => (
          <TextInputField__Temp
            key={idx}
            id={`participant-${idx}-name`}
            label={`Participant ${idx + 1} name`}
            placeholder="Enter name..."
            iconButtonOptions={
              idx !== 0
                ? {
                    icon: removeIcon,
                    onClick: () => removeParticipant(idx),
                  }
                : undefined
            }
          />
        ))}
        <Button
          className="block w-full"
          variant="outlined"
          onClick={addParticipant}
        >
          Add participant
        </Button>
      </div>
      {/* bottom controls */}
      <div className="sticky bottom-0 py-8 bg-gradient-to-t from-[#FFFFFFB3] from-80% via-[#FFFFFFB3]">
        <Button className="block w-full ">Create</Button>
      </div>
    </MainLayout>
  );
};

const TextInputField__Temp = ({
  id,
  label,
  placeholder,
  className,
  iconButtonOptions,
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: HTMLElement['className'];
  iconButtonOptions?: {
    icon: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
  };
}) => (
  <div className={className}>
    <label htmlFor={id}>
      <span className="text-sm text-[#8A8A8D] font-normal block">{label}</span>
      <div className="relative mt-1">
        <TextInput className="w-full pr-12" id={id} placeholder={placeholder} />
        {iconButtonOptions && (
          <div className="absolute top-0 right-0 h-full flex items-stretch">
            <button
              className="m-4 focusable rounded"
              onClick={iconButtonOptions.onClick}
            >
              {iconButtonOptions.icon}
            </button>
          </div>
        )}
      </div>
    </label>
    {/* extra message here */}
  </div>
);

export default NewEventPage;
