import { Skeleton } from '@/components/ui/skeleton';
import { Section } from '@/components/ui/section';

export default function DestinationsShowcaseSkeleton() {
  return (
    <Section>
      {/* Header Skeleton */}
      <div className="space-y-4 max-w-[800px]">
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-5 w-[500px]" />
      </div>

      {/* Search Skeleton */}
      <div className="mt-8">
        <Skeleton className="h-10 w-[300px]" />
      </div>

      {/* Grid Skeleton */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl animate-pulse"
          >
            <Skeleton className="aspect-[4/3] w-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 p-4">
              <div className="absolute bottom-4 space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
