import React from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface FiltersSidebarProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  propertyTypes: string[];
  selectedTypes: string[];
  handleTypeChange: (type: string, checked: boolean) => void;
  minBedrooms: number;
  setMinBedrooms: (num: number) => void;
  virtualTourOnly: boolean;
  setVirtualTourOnly: (value: boolean) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  priceRange,
  setPriceRange,
  propertyTypes,
  selectedTypes,
  handleTypeChange,
  minBedrooms,
  setMinBedrooms,
  virtualTourOnly,
  setVirtualTourOnly,
}) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
        <h2 className="text-xl font-bold text-realestate-blue mb-4">Filters</h2>
        
        <div className="mb-6">
          <Label className="block mb-2">Price Range</Label>
          <Slider 
            defaultValue={priceRange} 
            max={100000000} 
            step={1000000} 
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between mt-2 text-sm text-realestate-gray">
            <span>₹{(priceRange[0] / 10000000).toFixed(1)}Cr</span>
            <span>₹{(priceRange[1] / 10000000).toFixed(1)}Cr</span>
          </div>
        </div>
        
        <div className="mb-6">
          <Label className="block mb-2">Property Type</Label>
          <div className="space-y-2">
            {propertyTypes.map(type => (
              <div key={type} className="flex items-center">
                <Checkbox 
                  id={`type-${type}`} 
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) => 
                    handleTypeChange(type, checked as boolean)
                  }
                />
                <label 
                  htmlFor={`type-${type}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <Label className="block mb-2">Minimum Bedrooms</Label>
          <div className="flex gap-2 flex-wrap">
            {[0, 1, 2, 3, 4].map(num => (
              <button
                key={num}
                className={`px-3 py-1 border rounded-md text-sm ${
                  minBedrooms === num 
                    ? 'bg-realestate-teal text-white border-realestate-teal' 
                    : 'bg-white text-realestate-gray border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setMinBedrooms(num)}
              >
                {num === 0 ? 'Any' : num === 4 ? '4+' : num}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center">
            <Checkbox 
              id="virtual-tour"
              checked={virtualTourOnly}
              onCheckedChange={(checked) => setVirtualTourOnly(!!checked)}
            />
            <label 
              htmlFor="virtual-tour"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
            >
              Virtual Tour Available
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
