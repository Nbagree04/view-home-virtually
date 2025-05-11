
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VirtualTourViewer from "@/components/VirtualTourViewer";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  MapPin, 
  Bed, 
  Bath, 
  Scale, 
  Calendar, 
  Camera,
  Trees,
  School,
  Utensils,
  Car
} from "lucide-react";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 425000,
    location: "San Francisco, CA",
    address: "123 Main St, San Francisco, CA 94105",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: "This stunning modern apartment offers breathtaking city views from floor-to-ceiling windows. Located in the heart of downtown, you'll enjoy easy access to restaurants, shopping, and public transportation. The open concept living area features hardwood floors and a gourmet kitchen with stainless steel appliances and quartz countertops. The primary bedroom includes a spacious en-suite bathroom with double sinks and a walk-in shower.",
    features: [
      "In-unit Laundry",
      "Stainless Steel Appliances",
      "Hardwood Floors",
      "Central Air Conditioning",
      "Gym Access",
      "Rooftop Pool",
      "24/7 Concierge",
      "Pet Friendly",
      "EV Charging Station"
    ],
    nearby: [
      "Union Square (0.5 miles)",
      "Whole Foods Market (0.3 miles)",
      "Downtown BART Station (0.2 miles)",
      "City Park (0.7 miles)",
      "Financial District (0.4 miles)"
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    virtualTourUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    yearBuilt: 2018,
    type: "Apartment",
    hasVirtualTour: true
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa",
    price: 1250000,
    location: "Malibu, CA",
    address: "456 Ocean View Dr, Malibu, CA 90265",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    description: "Situated directly on the beach, this breathtaking villa offers panoramic ocean views and luxurious indoor-outdoor living. The open floor plan features high ceilings, natural stone floors, and walls of glass that open to an expansive deck. The gourmet kitchen includes top-of-the-line appliances and a large center island. The primary suite boasts ocean views, a spa-like bathroom, and a private balcony. Additional features include a media room, wine cellar, and private beach access.",
    features: [
      "Private Beach Access",
      "Infinity Pool & Spa",
      "Gourmet Kitchen",
      "Smart Home System",
      "Wine Cellar",
      "Media Room",
      "4-Car Garage",
      "Outdoor Kitchen",
      "Solar Panels"
    ],
    nearby: [
      "Malibu Pier (1.2 miles)",
      "Nobu Restaurant (0.8 miles)",
      "Malibu Country Mart (2.1 miles)",
      "Surfrider Beach (1.0 miles)",
      "Point Dume Nature Preserve (4.5 miles)"
    ],
    images: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    virtualTourUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    yearBuilt: 2015,
    type: "House",
    hasVirtualTour: true
  },
  {
    id: 3,
    title: "Cozy Mountain Retreat",
    price: 750000,
    location: "Aspen, CO",
    address: "789 Pine Ridge Way, Aspen, CO 81611",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    description: "Nestled among towering pines, this mountain retreat offers the perfect blend of rustic charm and modern comfort. The great room features vaulted ceilings with exposed beams, a floor-to-ceiling stone fireplace, and large windows showcasing mountain views. The kitchen includes custom cabinetry, granite countertops, and premium appliances. Outside, you'll find a wrap-around deck perfect for entertaining and enjoying the natural surroundings. Just minutes from world-class skiing and downtown Aspen.",
    features: [
      "Stone Fireplace",
      "Heated Floors",
      "Wrap-around Deck",
      "Hot Tub",
      "Vaulted Ceilings",
      "Ski Storage Room",
      "Heated Driveway",
      "Mountain Views",
      "Wood-burning Stove"
    ],
    nearby: [
      "Aspen Mountain Ski Resort (2.3 miles)",
      "Downtown Aspen (3.1 miles)",
      "John Denver Sanctuary (3.5 miles)",
      "Maroon Bells Scenic Area (10 miles)",
      "Aspen Golf Club (4.2 miles)"
    ],
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    virtualTourUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    yearBuilt: 2008,
    type: "House",
    hasVirtualTour: true
  },
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id || "1");
  
  // Find the property with the given ID
  const property = properties.find(p => p.id === propertyId) || properties[0];
  
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Property Title */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <div className="flex items-center mb-2">
                  <Badge className="bg-realestate-teal mr-2">For Sale</Badge>
                  <Badge variant="outline" className="text-realestate-gray">{property.type}</Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-realestate-blue">{property.title}</h1>
                <div className="flex items-center text-realestate-gray mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.address}</span>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-realestate-gray">Listing Price</p>
                <p className="text-3xl font-bold text-realestate-teal">${property.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="mb-4">
                  <img 
                    src={property.images[selectedImageIndex]} 
                    alt={property.title}
                    className="w-full h-96 object-cover rounded-lg" 
                  />
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  {property.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                        selectedImageIndex === index ? 'border-realestate-teal' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${property.title} - View ${index + 1}`}
                        className="w-full h-20 object-cover" 
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Virtual Tour */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-realestate-blue mb-4 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-realestate-teal" />
                  Virtual Tour
                </h2>
                <VirtualTourViewer
                  tourUrl={property.virtualTourUrl}
                  thumbnailUrl={property.images[0]}
                />
              </div>
              
              {/* Property Details */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <Tabs defaultValue="overview">
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="nearby">Nearby</TabsTrigger>
                    <TabsTrigger value="map">Map</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-realestate-blue mb-2">Property Details</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Bed className="h-5 w-5 text-realestate-teal mb-1" />
                          <span className="text-sm text-realestate-gray">Bedrooms</span>
                          <span className="font-bold text-realestate-blue">{property.bedrooms}</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Bath className="h-5 w-5 text-realestate-teal mb-1" />
                          <span className="text-sm text-realestate-gray">Bathrooms</span>
                          <span className="font-bold text-realestate-blue">{property.bathrooms}</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Scale className="h-5 w-5 text-realestate-teal mb-1" />
                          <span className="text-sm text-realestate-gray">Square Feet</span>
                          <span className="font-bold text-realestate-blue">{property.sqft.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Home className="h-5 w-5 text-realestate-teal mb-1" />
                          <span className="text-sm text-realestate-gray">Year Built</span>
                          <span className="font-bold text-realestate-blue">{property.yearBuilt}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-realestate-blue mb-2">Description</h3>
                      <p className="text-realestate-gray">{property.description}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features">
                    <div>
                      <h3 className="text-lg font-bold text-realestate-blue mb-4">Property Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                        {property.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="h-2 w-2 bg-realestate-teal rounded-full mr-2"></div>
                            <span className="text-realestate-gray">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="nearby">
                    <div>
                      <h3 className="text-lg font-bold text-realestate-blue mb-4">Nearby Attractions</h3>
                      <div className="space-y-3">
                        {property.nearby.map((item, index) => (
                          <div key={index} className="flex items-start">
                            {index % 4 === 0 && <Trees className="h-5 w-5 text-realestate-teal mr-2 shrink-0" />}
                            {index % 4 === 1 && <School className="h-5 w-5 text-realestate-teal mr-2 shrink-0" />}
                            {index % 4 === 2 && <Utensils className="h-5 w-5 text-realestate-teal mr-2 shrink-0" />}
                            {index % 4 === 3 && <Car className="h-5 w-5 text-realestate-teal mr-2 shrink-0" />}
                            <span className="text-realestate-gray">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="map">
                    <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-6 w-6 text-realestate-teal mx-auto mb-2" />
                        <p className="text-realestate-gray">
                          {property.address}
                        </p>
                        <p className="text-sm text-realestate-gray/70 mt-1">
                          Map view would be displayed here
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Book a Visit */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-realestate-blue mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-realestate-teal" />
                  Book a Visit
                </h2>
                <BookingForm propertyId={property.id} />
              </div>
              
              {/* Agent Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Agent"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-realestate-blue">Michael Johnson</p>
                    <p className="text-sm text-realestate-gray">Listing Agent</p>
                  </div>
                </div>
                <Button className="w-full bg-realestate-teal hover:bg-realestate-blue">
                  Contact Agent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
