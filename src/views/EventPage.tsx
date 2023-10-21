import DebtsSummary from '@/components/DebtsSummary';
import ExpenseSummary from '@/components/ExpenseSummary';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import WithControlsLayout from '@/views/WithControlsLayout';
import {
  CameraIcon,
  EllipsisHorizontalCircleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';

const EventPage = () => {
  return (
    <WithControlsLayout>
      <WithControlsLayout.TopControls className="flex justify-between">
        <Heading>Bar tour</Heading>
        <div className="flex flex-row-reverse [&>*~*]:-mr-1">
          <span className="text-lg text-[#BBBBC0] bg-[#F2F2F7] rounded-full inline-flex justify-center items-center w-8 h-8 ring-white ring-2 z-[1]">
            K
          </span>
          <span className="text-lg text-[#BBBBC0] bg-[#F2F2F7] rounded-full inline-flex justify-center items-center w-8 h-8 ring-white ring-2 z-[1]">
            N
          </span>
          <span className="text-lg text-[#BBBBC0] bg-[#F2F2F7] rounded-full inline-flex justify-center items-center w-8 h-8 ring-white ring-2 z-[1]">
            V
          </span>
          <span className="text-lg text-[#BBBBC0] bg-[#F2F2F7] rounded-full inline-flex justify-center items-center w-8 h-8 ring-white ring-2 z-[1]">
            M
          </span>
        </div>
      </WithControlsLayout.TopControls>
      <WithControlsLayout.MainContent className="space-y-4">
        <ExpenseSummary />
        <DebtsSummary className="!mt-6" />
        <Button
          color="gray"
          className="!mt-12 w-full flex justify-center items-center"
        >
          Add expense from photo
          <CameraIcon className="h-6 ml-1" strokeWidth={2} />
        </Button>
        <Button
          color="gray"
          className="w-full flex justify-center items-center"
        >
          Settings
          <EllipsisHorizontalCircleIcon className="h-6 ml-1" strokeWidth={2} />
        </Button>
        <Button
          color="gray"
          className="w-full flex justify-center items-center !text-[#FF3B30]"
        >
          Delete event
          <TrashIcon className="h-6 ml-1" strokeWidth={2} />
        </Button>
      </WithControlsLayout.MainContent>
      <WithControlsLayout.BottomControls>
        <div className="flex space-x-2">
          <Button color="gray">Share</Button>
          <Button className="flex-grow flex justify-center items-center">
            <PlusIcon className="h-4 mr-1" strokeWidth={3} /> Add expense
          </Button>
        </div>
      </WithControlsLayout.BottomControls>
    </WithControlsLayout>
  );
};

export default EventPage;
