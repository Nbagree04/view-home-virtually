
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, MapPin } from "lucide-react";

const BookVisit = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-realestate-blue mb-2">
              Schedule an Office Visit
            </h1>
            <p className="text-center text-realestate-gray mb-8 max-w-xl mx-auto">
              Visit our office to explore more properties and receive personalized guidance from our expert agents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 text-realestate-teal mr-2" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-realestate-gray">
                    VR Estates Office, Cyber City,<br />
                    Gurgaon, Haryana 122002
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 text-realestate-teal mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-realestate-gray">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="h-5 w-5 text-realestate-teal mr-2" />
                    Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-realestate-gray">
                    Select your preferred date<br />
                    Our team will confirm your<br />
                    appointment within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Booking Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Book Your Visit</CardTitle>
                    <CardDescription>
                      Fill in the form below to schedule a visit to our office
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookingForm />
                  </CardContent>
                </Card>
              </div>
              
              {/* Map */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                    <CardDescription>
                      Conveniently located in Cyber City
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <MapPin className="h-6 w-6 text-realestate-teal mx-auto mb-2" />
                        <p className="text-realestate-gray">
                          VR Estates Office, Cyber City, Gurgaon, Haryana 122002
                        </p>
                        <p className="text-sm text-realestate-gray/70 mt-1">
                          Map view would be displayed here
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-realestate-gray">
                      <strong>Getting here:</strong> Our office is easily accessible by public transportation. We're located two blocks from the Main St. subway station, and several bus lines stop nearby. Limited parking is available in our building's garage.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookVisit;
