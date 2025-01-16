import React from 'react';
import { Car } from 'lucide-react';

interface ParkingSpotProps {
  id: string;
  isOccupied: boolean;
  onClick: () => void;
}

const ParkingSpot: React.FC<ParkingSpotProps> = ({ id, isOccupied, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-24 h-36 border-2 ${
        isOccupied ? 'border-red-500 bg-red-100' : 'border-green-500 bg-green-100'
      } rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300 hover:opacity-80`}
    >
      {isOccupied ? (
        <Car className="w-12 h-12 text-red-600" />
      ) : (
        <span className="text-lg font-semibold text-green-700">{id}</span>
      )}
    </div>
  );
};

export default ParkingSpot;