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

  // Generate map URL based on property ID
  const getMapUrl = (propertyId: number) => {
    switch (propertyId) {
      case 1:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2152227022907!2d72.83490287373584!3d19.05427265265725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93cf21e4bad%3A0x4b1d874526889b1b!2s123%2C%20Hill%20Rd%2C%20Madam%20Wadi%2C%20Santosh%20Nagar%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1750218515029!5m2!1sen!2sin";
      case 2:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4271539566735!2d72.82479647373684!3d19.088907951570096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9987d6e2511%3A0xaba7ac74e511e001!2s456%2C%20Juhu%20Tara%20Rd%2C%20Chandrabai%20Nagar%2C%20Juhu%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1750219359213!5m2!1sen!2sin";
      case 3:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.2386897099781!2d77.65770750100705!3d12.8491204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c9c77c6238f%3A0xcd1b6445631328ba!2sVelankani%20Tech%20Park!5e0!3m2!1sen!2sin!4v1750219662361!5m2!1sen!2sin";
      case 4:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2272899860895!2d78.37575612369088!3d17.44883210103498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930036e02df5%3A0xafd92e6778539645!2sCyber%20Towers%20-%20HITEC%20City!5e0!3m2!1sen!2sin!4v1751606449479!5m2!1sen!2sin";
      case 5:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.724180396484!2d80.24515557550966!3d13.00820005583947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e8cdd9149b%3A0x8c9ab2b474e76fec!2s10%2C%20Besant%20Ave%20Rd%2C%20Arunachalapuram%2C%20Adyar%2C%20Chennai%2C%20Tamil%20Nadu%20600020!5e0!3m2!1sen!2sin!4v1750220088987!5m2!1sen!2sin";
      case 6:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.55048133515!2d77.20148397409474!3d28.643231683597275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d13d37149%3A0x20f6d1c4f1bd6d7!2sTOWER-A%2C%20CENTRAL%20GOVERNMENT%20EMPLOYEES%20HOUSING%20COMPLEX%2C%20Type%204%2C%20Block%20B%2C%20Aram%20Bagh%2C%20Jhandewalan%2C%20New%20Delhi%2C%20Delhi%20110055!5e0!3m2!1sen!2sin!4v1751606225750!5m2!1sen!2sin";
      case 7:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.308886689474!2d77.60983782522842!3d12.934872261404962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144559785d63%3A0x527726994bf1631e!2s5th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1750313249641!5m2!1sen!2sin";
      case 8:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3860121539983!2d75.89700867385612!3d22.75105162640899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302aaac34d513%3A0x44b14477192e12e6!2s15%2C%20Vijay%20Nagar%2C%20Ganga%20Devi%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1751606160466!5m2!1sen!2sin";
      case 9:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29027.976284272343!2d73.6584002875659!3d24.572037229107462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56041553fe7%3A0xdfef96846886cdd0!2sLake%20Pichola!5e0!3m2!1sen!2sin!4v1750314905172!5m2!1sen!2sin";
      case 10:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125922.8652972511!2d76.19378504018204!3d9.500941518862994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884f1aa296b61%3A0xb84764552c41f85a!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1750315179559!5m2!1sen!2sin";
      case 11:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7689.644650176676!2d73.82359038587424!3d15.493986329400544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc08583a30205%3A0xade68cd13f55ee7a!2sFontainhas%20(quarter)%2C%20Altinho%2C%20Panaji%2C%20Goa%20403001!5e0!3m2!1sen!2sin!4v1750395634218!5m2!1sen!2sin";
      case 12:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13666.785737026037!2d77.17163818520864!3d31.09037001612208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578ba98db6e59%3A0xa9974ad076e4e60a!2sChotta%20Shimla%2C%20Shimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1750395934651!5m2!1sen!2sin";
      case 13:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.903441932272!2d73.91037217372075!3d18.533265068789294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19ff08dd255%3A0xa46125156bd5608a!2sLn%20V%2C%20Koregaon%20Park%20Annexe%2C%20Mundhwa%2C%20Pune%2C%20Maharashtra%20411036!5e0!3m2!1sen!2sin!4v1751606368221!5m2!1sen!2sin";
      case 23:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.489071771754!2d79.55690527094151!3d10.471291169799255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a530891a6bce1e5%3A0xca50255e35489f22!2sSH%2049!5e0!3m2!1sen!2sin!4v1751606511915!5m2!1sen!2sin";
      default:
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2152227022907!2d72.83490287373584!3d19.05427265265725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93cf21e4bad%3A0x4b1d874526889b1b!2s123%2C%20Hill%20Rd%2C%20Madam%20Wadi%2C%20Santosh%20Nagar%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1750218515029!5m2!1sen!2sin";
    }
  };

  const getMapTitle = (propertyId: number) => {
    switch (propertyId) {
      case 1:
        return "Map location for Bandra West Mumbai";
      case 2:
        return "Map location for Juhu Beach Mumbai";
      case 3:
        return "Map location for Electronic City Bangalore";
      case 4:
        return "Map location for HITEC City Hyderabad";
      case 5:
        return "Map location for Adyar Chennai";
      case 6:
        return "Map location for Connaught Place New Delhi";
      case 7:
        return "Map location for Koramangala Bangalore";
      case 8:
        return "Map location for Palasia Indore";
      case 9:
        return "Map location for Lake Pichola Udaipur";
      case 10:
        return "Map location for Alappuzha Kerala";
      case 11:
        return "Map location for Fontainhas Panaji Goa";
      case 12:
        return "Map location for Chotta Shimla Himachal Pradesh";
      case 13:
        return "Map location for Koregaon Park Pune";
      case 23:
        return "Map location for East Coast Road Chennai";
      default:
        return `Map location for ${property?.title}`;
    }
  };

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
                    <div className="w-full rounded-lg overflow-hidden">
                      <iframe 
                        src={getMapUrl(propertyId)}
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title={getMapTitle(propertyId)}
                      />
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
              
              {/* Agent Info - Updated with Nakul Bagree */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Nakul Bagree"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold text-realestate-blue">Nakul Bagree</p>
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
