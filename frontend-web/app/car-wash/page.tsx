import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Wash - AutoOne',
  description: 'Book professional car wash services near you',
};

export default function CarWashPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Car Wash Services</h1>
      <div className="bg-light rounded-lg p-8 text-center">
        <p className="text-gray-600 mb-4">Car wash booking coming soon...</p>
        <p className="text-gray-500">Components for car wash search, filtering, and booking are ready to be implemented</p>
      </div>
    </div>
  );
}
