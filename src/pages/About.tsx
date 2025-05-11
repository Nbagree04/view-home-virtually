
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "David Wilson",
    position: "Founder & CEO",
    bio: "David has 15 years of experience in real estate and was an early adopter of VR technology for property tours.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Rodriguez",
    position: "Head of VR Production",
    bio: "Sarah leads our VR production team with her background in architectural visualization and 3D technology.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Michael Chen",
    position: "Lead Real Estate Agent",
    bio: "Michael's extensive knowledge of the local market and client-focused approach has helped hundreds find their dream homes.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lisa Johnson",
    position: "Customer Experience Manager",
    bio: "Lisa ensures every client receives personalized attention and a seamless experience throughout their property search.",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-realestate-blue py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About VR Estates</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            We're revolutionizing the real estate industry with immersive virtual reality experiences that make finding your dream home easier than ever.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="VR Technology" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-realestate-blue mb-4">Our Story</h2>
              <p className="text-realestate-gray mb-4">
                VR Estates was founded in 2018 with a simple but powerful vision: to transform how people experience and purchase real estate. Our founder, David Wilson, recognized the limitations of traditional property viewings and the frustrations of buyers who wasted time visiting unsuitable properties.
              </p>
              <p className="text-realestate-gray mb-4">
                By leveraging cutting-edge virtual reality technology, we created a platform that allows buyers to tour multiple properties remotely, gaining an authentic feel for the space before scheduling in-person visits. This approach saves time for both buyers and sellers, reduces the carbon footprint associated with property viewing, and makes the entire process more efficient.
              </p>
              <p className="text-realestate-gray">
                Today, VR Estates has expanded to serve multiple cities across the country, with a growing team of real estate and technology professionals committed to providing an unmatched property shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-realestate-blue mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-realestate-gray mb-12">
            To make home-buying more immersive, transparent, and convenient by combining cutting-edge VR technology with personalized real estate services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-realestate-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-realestate-teal">1</span>
              </div>
              <h3 className="text-xl font-bold text-realestate-blue mb-2">Innovation</h3>
              <p className="text-realestate-gray">
                We continuously adopt new technologies to enhance the property viewing experience, setting new standards in the industry.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-realestate-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-realestate-teal">2</span>
              </div>
              <h3 className="text-xl font-bold text-realestate-blue mb-2">Transparency</h3>
              <p className="text-realestate-gray">
                We believe in showing properties exactly as they are, with no misleading angles or edited images, building trust with our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-realestate-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-realestate-teal">3</span>
              </div>
              <h3 className="text-xl font-bold text-realestate-blue mb-2">Client-First</h3>
              <p className="text-realestate-gray">
                We prioritize our clients' needs, providing personalized guidance and support throughout the entire home-buying journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-realestate-blue mb-4 text-center">Our Team</h2>
          <p className="max-w-2xl mx-auto text-realestate-gray mb-12 text-center">
            Meet the talented professionals who make VR Estates the leading innovator in virtual reality real estate services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-realestate-teal/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-realestate-blue mb-4 text-center">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-realestate-gray mb-12 text-center">
            Real experiences from clients who found their perfect homes through our VR tours.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Client Testimonial"
                  className="w-16 h-16 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h3 className="font-bold text-realestate-blue">Robert Stevens</h3>
                  <p className="text-sm text-realestate-gray">Purchased a home in San Francisco</p>
                </div>
              </div>
              <p className="text-realestate-gray italic text-lg">
                "As someone relocating from across the country, VR Estates saved me countless hours and travel expenses. I was able to virtually tour over 20 properties and narrow down my options before flying out for final viewings. The VR experience was incredibly accurate, and there were no surprises when I saw the properties in person. The team's service was exceptional from start to finish."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-realestate-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Real Estate?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Start exploring properties through our immersive VR tours or schedule a visit to our office to learn more.
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
    </div>
  );
};

export default About;
