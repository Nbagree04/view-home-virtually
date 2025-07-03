
import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { formatIndianCurrency } from '@/utils/indiaData';

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image_url?: string;
  has_virtual_tour?: boolean;
  property_type?: string;
  description?: string;
}

interface PropertyListProps {
  properties: Property[];
  onEdit: (property: Property) => void;
  onDelete: (id: string) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, onEdit, onDelete }) => {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {properties.map((property) => (
        <div key={property.id} className="border rounded-lg p-4 flex justify-between items-start">
          <div className="flex space-x-4">
            {property.image_url && (
              <img
                src={property.image_url}
                alt={property.title}
                className="w-16 h-16 object-cover rounded"
              />
            )}
            <div>
              <h3 className="font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">{property.location}</p>
              <p className="text-sm font-medium">{formatIndianCurrency(property.price)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit(property)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(property.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      {properties.length === 0 && (
        <p className="text-gray-500 text-center py-8">No properties added yet.</p>
      )}
    </div>
  );
};

export default PropertyList;
