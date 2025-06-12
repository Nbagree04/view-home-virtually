
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
                  <h2 className="text-2xl font-bold text-realestate-blue mb-6">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
              
              {/* Map */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-realestate-blue mb-4">Our Location</h2>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-6 w-6 text-realestate-teal mx-auto mb-2" />
                      <p className="text-realestate-gray">
                        Skye Luxuria, Nipania, Indore, Madhya Pradesh
                      </p>
                      <p className="text-sm text-realestate-gray/70 mt-1">
                        Map view would be displayed here
                      </p>
                    </div>
                  </div>
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
