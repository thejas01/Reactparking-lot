import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import ParkingSpot from './components/ParkingSpot';

interface ParkingSpace {
  id: string;
  isOccupied: boolean;
}

function App() {
  const [parkingSpaces, setParkingSpaces] = useState<ParkingSpace[]>(
    Array.from({ length: 20 }, (_, index) => ({
      id: String(index + 1).padStart(2, '0'),
      isOccupied: Math.random() > 0.7,
    }))
  );

  const toggleSpot = (index: number) => {
    setParkingSpaces((prev) =>
      prev.map((spot, i) =>
        i === index ? { ...spot, isOccupied: !spot.isOccupied } : spot
      )
    );
  };

  const availableSpots = parkingSpaces.filter((spot) => !spot.isOccupied).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-800">Smart Parking</h1>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <p className="text-blue-700 font-semibold">
                Available Spots: {availableSpots} / {parkingSpaces.length}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {parkingSpaces.map((spot, index) => (
              <ParkingSpot
                key={spot.id}
                id={spot.id}
                isOccupied={spot.isOccupied}
                onClick={() => toggleSpot(index)}
              />
            ))}
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <div className="flex gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded" />
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded" />
                <span className="text-sm text-gray-600">Occupied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;