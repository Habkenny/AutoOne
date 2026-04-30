import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Bookings - AutoOne',
  description: 'Manage your AutoOne bookings and reservations',
};

export default function BookingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Bookings</h1>
      <div className="bg-light rounded-lg p-8 text-center">
        <p className="text-gray-600 mb-4">Your bookings dashboard coming soon...</p>
        <p className="text-gray-500">Components for viewing, modifying, and managing bookings are ready to be implemented</p>
      </div>
    </div>
  );
}
