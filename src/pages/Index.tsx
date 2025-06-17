import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Camera, Calendar, MapPin } from "lucide-react";
import { properties } from "@/data/properties";

// Use the first 3 properties from the main list as featured
const featuredProperties = properties.slice(0, 3);

const testimonials = [{
  name: "Priya Sharma",
  text: "The virtual tour technology saved us countless hours! We could explore multiple properties from Mumbai to Delhi without traveling. Highly recommend VR Estates!",
  imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
}, {
  name: "Rajesh Kumar",
  text: "As a busy professional, the VR tours allowed me to shortlist properties during my lunch breaks. The immersive experience gave me confidence in my final choice.",
  imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
}, {
  name: "Anita Patel",
  text: "Moving from Bangalore to Indore was stressful, but VR Estates made house hunting effortless. The virtual tours felt like I was actually walking through each home!",
  imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
}];

const Index = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="h-[600px] relative flex items-center rounded-none bg-zinc-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Dream Home Through Immersive VR
            </h1>
            <p className="text-white text-lg mb-8">
              Experience properties like never before with our virtual reality tours. Save time and make informed decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties">
                <Button size="lg" className="bg-realestate-teal hover:bg-realestate-blue flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Explore VR Tours
                </Button>
              </Link>
              <Link to="/book-visit">
                <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-realestate-blue flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img alt="VR Experience" className="rounded-lg shadow-lg" src="/lovable-uploads/2a694fd7-7dac-44ac-a7c3-79aeb4171ee1.jpg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-realestate-blue mb-4">
                Revolutionizing Home Buying with VR
              </h2>
              <p className="text-realestate-gray mb-6">
                At VR Estates, we're changing how people find their perfect home. Our cutting-edge virtual reality tours allow you to explore properties as if you were there, saving you time and helping you make confident decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-realestate-teal/10 p-2 rounded-full mr-3">
                    <Camera className="h-5 w-5 text-realestate-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold">Immersive Tours</h3>
                    <p className="text-sm text-realestate-gray">Experience every corner of a property virtually.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-realestate-teal/10 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-realestate-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold">Location Context</h3>
                    <p className="text-sm text-realestate-gray">Understand the neighborhood and surroundings.</p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="text-realestate-teal border-realestate-teal hover:bg-realestate-teal hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-realestate-blue mb-2">Featured Properties</h2>
            <p className="text-realestate-gray max-w-2xl mx-auto">
              Explore our handpicked selection of properties with immersive VR tours available. Experience each space before scheduling an in-person visit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => <PropertyCard key={property.id} {...property} />)}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/properties">
              <Button className="bg-realestate-blue hover:bg-realestate-teal">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-realestate-blue mb-2">How It Works</h2>
            <p className="text-realestate-gray max-w-2xl mx-auto">
              Our streamlined process makes finding your dream home with VR technology simple and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-realestate-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-realestate-teal">1</span>
              </div>
              <h3 className="text-xl font-bold text-realestate-blue mb-2">Browse Properties</h3>
              <p className="text-realestate-gray">
                Search our extensive listing of properties based on your preferred location, budget, and features.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-realestate-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-realestate-teal">2</span>
              </div>
              <h3 className="text-xl font-bold text-realestate-blue mb-2">Virtual Tour</h3>
              <p className="text-realestate-gray">
                Experience properties in immersive VR or 360° tours from the comfort of your own home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-realestate-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-realestate-teal">3</span>
              </div>
              <h3 className="text-xl font-bold text-realestate-blue mb-2">Visit & Close</h3>
              <p className="text-realestate-gray">
                Schedule an in-person visit for your favorites and let us help you close on your dream home.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-realestate-teal/5">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-realestate-blue mb-2">What Our Clients Say</h2>
            <p className="text-realestate-gray max-w-2xl mx-auto">
              Don't just take our word for it. Hear from clients who found their perfect homes through our VR tours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <h3 className="font-bold">{testimonial.name}</h3>
                </div>
                <p className="text-realestate-gray italic">"{testimonial.text}"</p>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-realestate-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Start your journey today with our immersive VR property tours or schedule a visit to our office for personalized assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/properties">
              <Button size="lg" className="bg-white text-realestate-blue hover:bg-realestate-light">
                Explore Properties
              </Button>
            </Link>
            <Link to="/book-visit">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Book a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;
