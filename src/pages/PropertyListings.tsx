import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search } from "lucide-react";

// Sample properties data with Indian locations and INR currency
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 8500000,
    location: "Bandra West, Mumbai",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    imageUrl: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80",
    hasVirtualTour: true,
    type: "Apartment"
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa",
    price: 25000000,
    location: "Juhu Beach, Mumbai",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", // South Indian Villa
    hasVirtualTour: true,
    type: "House"
  },
  {
    id: 3,
    title: "Premium IT Sector Apartment",
    price: 12000000,
    location: "Electronic City, Bengaluru",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80", // Bengaluru Apartment
    hasVirtualTour: true,
    type: "Apartment"
  },
  {
    id: 4,
    title: "Contemporary Tech Hub Loft",
    price: 15000000,
    location: "Gachibowli, Hyderabad",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1850,
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41fa2247?auto=format&fit=crop&w=800&q=80", // Modern living room
    hasVirtualTour: true,
    type: "Apartment"
  },
  {
    id: 5,
    title: "Spacious Family Villa",
    price: 18000000,
    location: "Adyar, Chennai, Tamil Nadu",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    imageUrl: "https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=800&q=80", // Living Room/Interior
    hasVirtualTour: true,
    type: "House"
  },
  {
    id: 6,
    title: "Central Business District Studio",
    price: 6500000,
    location: "Connaught Place, New Delhi",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", // Stylish small living area
    hasVirtualTour: false,
    type: "Studio"
  },
  {
    id: 7,
    title: "Garden City Penthouse",
    price: 22000000,
    location: "Koramangala, Bengaluru",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    imageUrl: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80", // luxury living room
    hasVirtualTour: true,
    type: "Apartment"
  },
  {
    id: 8,
    title: "Commercial Hub Apartment",
    price: 9500000,
    location: "Palasia, Indore",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80", // Heritage Home
    hasVirtualTour: true,
    type: "Apartment"
  },
];

const PropertyListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([5000000, 30000000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minBedrooms, setMinBedrooms] = useState<number>(0);
  const [virtualTourOnly, setVirtualTourOnly] = useState(false);

  // Extract unique property types for filter
  const propertyTypes = Array.from(new Set(properties.map(p => p.type)));

  // Handle property type selection
  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    }
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
      
      {/* Hero Section */}
      <section className="bg-realestate-blue py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Browse our extensive collection of properties with immersive virtual tours.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search by location, title or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-realestate-gray" />
          </div>
        </div>
      </section>
      
      <div className="flex-1 bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-realestate-blue mb-4">Filters</h2>
                
                {/* Price Range */}
                <div className="mb-6">
                  <Label className="block mb-2">Price Range</Label>
                  <Slider 
                    defaultValue={[5000000, 30000000]} 
                    max={50000000} 
                    step={1000000} 
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-realestate-gray">
                    <span>₹{(priceRange[0] / 1000000).toFixed(1)}Cr</span>
                    <span>₹{(priceRange[1] / 1000000).toFixed(1)}Cr</span>
                  </div>
                </div>
                
                {/* Property Type */}
                <div className="mb-6">
                  <Label className="block mb-2">Property Type</Label>
                  <div className="space-y-2">
                    {propertyTypes.map(type => (
                      <div key={type} className="flex items-center">
                        <Checkbox 
                          id={`type-${type}`} 
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
                
                {/* Bedrooms */}
                <div className="mb-6">
                  <Label className="block mb-2">Minimum Bedrooms</Label>
                  <div className="flex gap-2">
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
                
                {/* Virtual Tour */}
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
            
            {/* Property Listings */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-realestate-blue">
                    {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
                  </h2>
                </div>
              </div>
              
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
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
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyListings;
