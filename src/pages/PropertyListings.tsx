
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";
import FiltersSidebar from "@/components/FiltersSidebar";
import PropertyGrid from "@/components/PropertyGrid";
import { properties } from "@/data/properties";

const PropertyListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([10000000, 100000000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minBedrooms, setMinBedrooms] = useState<number>(0);
  const [virtualTourOnly, setVirtualTourOnly] = useState(false);

  // Extract unique property types for filter
  const propertyTypes = Array.from(new Set(properties.map(p => p.type)));

  // Handle property type selection
  const handleTypeChange = (type: string, checked: boolean) => {
    setSelectedTypes(prev => 
      checked ? [...prev, type] : prev.filter(t => t !== type)
    );
  };

  // Filter properties based on all criteria
  const filteredProperties = properties.filter(property => {
    // Search term filter
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          property.location.toLowerCase().includes(searchTerm.toLowerCase());
                          
    // Price range filter
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    // Property type filter
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(property.type);
    
    // Bedrooms filter
    const matchesBedrooms = property.bedrooms >= minBedrooms;
    
    // Virtual tour filter
    const matchesVirtualTour = !virtualTourOnly || property.hasVirtualTour;
    
    return matchesSearch && matchesPrice && matchesType && matchesBedrooms && matchesVirtualTour;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="flex-1 bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <FiltersSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              propertyTypes={propertyTypes}
              selectedTypes={selectedTypes}
              handleTypeChange={handleTypeChange}
              minBedrooms={minBedrooms}
              setMinBedrooms={setMinBedrooms}
              virtualTourOnly={virtualTourOnly}
              setVirtualTourOnly={setVirtualTourOnly}
            />
            
            <PropertyGrid properties={filteredProperties} />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyListings;
