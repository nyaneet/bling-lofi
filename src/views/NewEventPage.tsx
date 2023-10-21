import InputFieldWrapper from '@/components/InputFieldWrapper';
import Button from '@/components/ui/Button';
import Combobox from '@/components/ui/Combobox';
import Heading from '@/components/ui/Heading';
import InputBase from '@/components/ui/InputBase';
import WithControlsLayout from '@/views/WithControlsLayout';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const currencyList = [
  { id: 1, value: 'USD' },
  { id: 2, value: 'RUB' },
  { id: 3, value: 'EUR' },
  { id: 4, value: 'CAD' },
  { id: 5, value: 'BRL' },
  { id: 6, value: 'BGN' },
  { id: 7, value: 'HKD' },
  { id: 8, value: 'JPY' },
  { id: 9, value: 'KRW' },
  { id: 10, value: 'PHP' },
  { id: 11, value: 'TRY' },
];

const NewEventPage = () => {
  return (
    <WithControlsLayout>
      <WithControlsLayout.TopControls>
        <Heading>New event</Heading>
      </WithControlsLayout.TopControls>
      <WithControlsLayout.MainContent className="space-y-4">
        <NewEventPageInputs />
      </WithControlsLayout.MainContent>
      <WithControlsLayout.BottomControls>
        <div className="flex space-x-2">
          <Link to="/" tabIndex={-1}>
            <Button className="" variant="filled" color="gray">
              Cancel
            </Button>
          </Link>
          <Link to="/event" tabIndex={-1} className="flex-grow">
            <Button className="w-full">Create</Button>
          </Link>
        </div>
      </WithControlsLayout.BottomControls>
    </WithControlsLayout>
  );
};

const NewEventPageInputs = () => {
  const [participants, setParticipants] = useState<string[]>(['']);
  const addParticipantButtonRef = useRef<HTMLButtonElement>(null);

  const addParticipant = () => {
    setParticipants((prev) => [...prev, '']);
  };
  const removeParticipant = (idx: number) => {
    setParticipants((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };

  return (
    <>
      <InputFieldWrapper id="event-name" label="Name">
        <InputBase
          className="w-full"
          id="event-name"
          placeholder="Enter event name..."
          type="text"
        />
      </InputFieldWrapper>

      <InputFieldWrapper id="currency" label="Currency">
        <Combobox
          className="w-full"
          id="currency"
          placeholder="Choose currency..."
          items={currencyList}
        />
      </InputFieldWrapper>

      <Heading className="!mt-6" as="h2" size="md">
        Participants
      </Heading>

      <InputFieldWrapper id="host-name" label="Your name">
        <InputBase
          className="w-full"
          id="host-name"
          placeholder="Enter your name..."
          type="text"
        />
      </InputFieldWrapper>

      {participants.map((_, idx) => (
        <ParticipantNameInput
          key={idx}
          idx={idx}
          removeParticipant={removeParticipant}
          autoFocus={idx !== 0}
          onMount={() => {
            if (addParticipantButtonRef.current)
              addParticipantButtonRef.current.scrollIntoView(false);
          }}
        />
      ))}
      <Button
        className="w-full scroll-m-6"
        variant="outlined"
        onClick={addParticipant}
        ref={addParticipantButtonRef}
      >
        Add participant
      </Button>
    </>
  );
};

type ParticipantNameInputProps = {
  idx: number;
  removeParticipant: (idx: number) => void;
  autoFocus?: boolean;
  onMount?: () => void;
};

const ParticipantNameInput = ({
  idx,
  removeParticipant,
  autoFocus = false,
  onMount,
}: ParticipantNameInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const onMountRef = useRef<() => void>();
  if (onMount) onMountRef.current = onMount;

  useEffect(() => {
    if (onMountRef.current) onMountRef.current();
  }, []);

  useEffect(() => {
    if (autoFocus && ref.current) ref.current.focus();
  }, [autoFocus]);

  const deleteButton = (
    <span className="h-full py-4 pl-2 pr-4 flex items-center">
      <button
        className="h-6 p-1 rounded-md focusable"
        onClick={() => removeParticipant(idx)}
      >
        <TrashIcon className="text-gray-300 h-full" strokeWidth={2} />
      </button>
    </span>
  );

  return (
    <InputFieldWrapper
      id={`participant-${idx}-name`}
      label={`Participant ${idx + 1} name`}
    >
      <InputBase
        ref={ref}
        type="text"
        className="w-full"
        id={`participant-${idx}-name`}
        placeholder="Enter participant name..."
        trailing={idx !== 0 ? deleteButton : null}
      />
    </InputFieldWrapper>
  );
};

export default NewEventPage;
