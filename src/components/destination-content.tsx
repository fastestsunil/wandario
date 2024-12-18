import { IDestination } from '@/types';
import { Prose } from '@/components/ui/prose';

interface DestinationContentProps {
  destination: IDestination;
}

export default function DestinationContent({
  destination,
}: DestinationContentProps) {
  return (
    <Prose as="article">
      <div dangerouslySetInnerHTML={{ __html: destination.description }} />
    </Prose>
  );
}
