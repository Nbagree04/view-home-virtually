
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Map from "@/components/Map";
import GoogleMap from "@/components/GoogleMap";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");

  const ourLocation = {
    longitude: 75.8982,
    latitude: 22.7725,
    address: "Skye Luxuria, Nipania, Indore, Madhya Pradesh",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-realestate-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Have questions about our VR property tours or ready to start your home search? Get in touch with our team.
          </p>
        </div>
      </section>
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-realestate-teal mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-realestate-blue mb-1">Office Address</h3>
                      <p className="text-realestate-gray">
                        Skye Luxuria, Nipania,<br />
                        Indore, Madhya Pradesh
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-realestate-teal mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-realestate-blue mb-1">Phone</h3>
                      <p className="text-realestate-gray mb-1">+91 98267 41260</p>
                      <p className="text-sm text-realestate-gray/70">
                        For general inquiries
                      </p>
                      <p className="text-realestate-gray mb-1 mt-2">+91 98260 30260</p>
                      <p className="text-sm text-realestate-gray/70">
                        For VR tour scheduling
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-realestate-teal mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-realestate-blue mb-1">Email</h3>
                      <p className="text-realestate-gray mb-1">info@vrestates.com</p>
                      <p className="text-sm text-realestate-gray/70">
                        For general inquiries
                      </p>
                      <p className="text-realestate-gray mb-1 mt-2">tours@vrestates.com</p>
                      <p className="text-sm text-realestate-gray/70">
                        For VR tour scheduling
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-realestate-teal mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-realestate-blue mb-1">Office Hours</h3>
                      <p className="text-sm text-realestate-gray mb-1">
                        <span className="font-medium">Monday-Friday:</span> 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm text-realestate-gray mb-1">
                        <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-sm text-realestate-gray">
                        <span className="font-medium">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-realestate-blue mb-6">Get in Touch with Us</h2>
                  <ContactForm />
                </CardContent>
              </Card>
              
              {/* Map */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-realestate-blue mb-4">Our Location</h2>
                  {mapboxToken || googleMapsApiKey ? (
                    <Tabs defaultValue="google" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="google">Google Maps</TabsTrigger>
                        <TabsTrigger value="mapbox">Mapbox</TabsTrigger>
                      </TabsList>
                      <TabsContent value="google" className="mt-4">
                        {googleMapsApiKey ? (
                          <div className="h-96 rounded-lg overflow-hidden">
                            <GoogleMap 
                              apiKey={googleMapsApiKey}
                              longitude={ourLocation.longitude}
                              latitude={ourLocation.latitude}
                            />
                          </div>
                        ) : (
                          <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">
                            <p className="text-gray-500">Please enter Google Maps API key to view map</p>
                          </div>
                        )}
                      </TabsContent>
                      <TabsContent value="mapbox" className="mt-4">
                        {mapboxToken ? (
                          <div className="h-96 rounded-lg overflow-hidden">
                            <Map 
                              accessToken={mapboxToken} 
                              longitude={ourLocation.longitude}
                              latitude={ourLocation.latitude}
                            />
                          </div>
                        ) : (
                          <div className="h-96 flex items-center justify-center bg-gray-100 rounded-lg">
                            <p className="text-gray-500">Please enter Mapbox token to view map</p>
                          </div>
                        )}
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <div>
                      <Alert>
                        <MapPin className="h-4 w-4" />
                        <AlertTitle>Map View requires API Keys</AlertTitle>
                        <AlertDescription>
                          To display interactive maps, please provide either a Google Maps API key or Mapbox public access token.
                        </AlertDescription>
                      </Alert>
                      <div className="mt-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="google-maps-key">Google Maps API Key</Label>
                          <Input
                            id="google-maps-key"
                            type="password"
                            value={googleMapsApiKey}
                            onChange={(e) => setGoogleMapsApiKey(e.target.value)}
                            placeholder="AIza..."
                            className="font-mono"
                          />
                          <p className="text-sm text-muted-foreground">
                            Get your API key from{' '}
                            <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Google Cloud Console</a>
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
                          <Input
                            id="mapbox-token"
                            type="password"
                            value={mapboxToken}
                            onChange={(e) => setMapboxToken(e.target.value)}
                            placeholder="pk.ey..."
                            className="font-mono"
                          />
                          <p className="text-sm text-muted-foreground">
                            Get your token from{' '}
                            <a href="https://account.mapbox.com/auth/signup/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Mapbox</a>
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Your keys are used only for displaying the map and are not stored.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
