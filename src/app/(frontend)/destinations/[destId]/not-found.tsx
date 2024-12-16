import { EmptyState } from '@/components/ui/empty-state';
import { MapPin } from 'lucide-react';

export default function DestinationNotFound() {
  return (
    <div className="container py-20">
      <EmptyState
        icon={MapPin}
        title="Destination Not Found"
        description="The destination you're looking for doesn't exist or has been removed."
        action={{
          label: 'View All Destinations',
          href: '/destinations',
        }}
      />
    </div>
  );
}
