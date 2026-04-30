import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshops - AutoOne',
  description: 'Find and book the best workshops for your car maintenance and repair',
};

export default function WorkshopsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Workshops</h1>
      <div className="bg-light rounded-lg p-8 text-center">
        <p className="text-gray-600 mb-4">Workshop listing coming soon...</p>
        <p className="text-gray-500">Components for workshop search, filtering, and booking are ready to be implemented</p>
      </div>
    </div>
  );
}
