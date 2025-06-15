
import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/data/properties";

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <div className="lg:w-3/4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-realestate-blue">
            {properties.length} {properties.length === 1 ? 'Property' : 'Properties'} Found
          </h2>
        </div>
      </div>
      
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-realestate-gray mb-2">No properties found</h3>
          <p className="text-realestate-gray/80">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
