'use client';

import { IDestination } from '@/types';
import { DestinationCard } from './destination-card';
import { Section } from './ui/section';
import { SectionHeader } from './ui/section-header';
import { useSearchParams } from 'next/navigation';
import { SearchInput } from './search-input';

interface DestinationsShowcaseProps {
  destinations: IDestination[];
  totalDestinations: number;
}

export default function DestinationsShowcase({
  destinations,
  totalDestinations,
}: DestinationsShowcaseProps) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  return (
    <Section>
      <div className="space-y-8">
        <SectionHeader
          title="Featured Destinations"
          excerpt={`Discover ${totalDestinations} amazing destinations around the world`}
          highlight="Featured"
          align="center"
          titleClassName="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
          descriptionClassName="max-w-3xl"
          divider={true}
        />

        <SearchInput
          placeholder="Search destinations..."
          defaultValue={search}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map(destination => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      </div>
    </Section>
  );
}
