
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { formatIndianCurrency, formatIndianNumber } from "@/utils/indiaData";

export interface PropertyProps {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  hasVirtualTour: boolean;
  type: string;
  address?: string;
  description?: string;
  features?: string[];
  nearby?: string[];
  images?: string[];
  virtualTourUrl?: string;
  yearBuilt?: number;
}

const PropertyCard = ({ 
  id, 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  sqft, 
  imageUrl,
  hasVirtualTour,
  type
}: PropertyProps) => {
  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md property-card-hover">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-48 object-cover" 
          />
          <Badge variant="secondary" className="absolute top-3 left-3">{type}</Badge>
          {hasVirtualTour && (
            <Badge className="absolute top-3 right-3 bg-realestate-teal hover:bg-realestate-teal">
              Virtual Tour
            </Badge>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{title}</h3>
            <span className="text-realestate-teal font-bold">{formatIndianCurrency(price)}</span>
          </div>
          
          <div className="flex items-center text-realestate-gray mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex justify-between text-sm text-realestate-gray">
            <span>{bedrooms} Beds</span>
            <span>{bathrooms} Baths</span>
            <span>{formatIndianNumber(sqft)} Sq Ft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
