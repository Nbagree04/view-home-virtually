
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
import { properties } from "@/data/properties";
import { formatIndianCurrency, formatIndianNumber } from "@/utils/indiaData";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const propertyId = parseInt(id || "1");
  
  const property = properties.find(p => p.id === propertyId);
  
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 bg-gray-50 py-8 text-center">
          <h1 className="text-2xl font-bold text-realestate-blue">Property Not Found</h1>
          <p className="text-realestate-gray mt-2">The property you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

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
                <p className="text-3xl font-bold text-realestate-teal">{formatIndianCurrency(property.price)}</p>
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
              {property.hasVirtualTour && (
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
              )}
              
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
                          <span className="font-bold text-realestate-blue">{formatIndianNumber(property.sqft)}</span>
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
