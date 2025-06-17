
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Nakul Bagree",
    position: "Founder & CEO",
    bio: "Nakul, an entrepreneur with a passion for technology, founded VR Estates in 2025 to make home buying simpler and more transparent using immersive VR.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Priya Mehta",
    position: "Head of VR Production",
    bio: "Priya leads our VR production team with her background in architectural visualization and 3D technology.",
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0da7ba4d4ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Arjun Singh",
    position: "Lead Real Estate Agent",
    bio: "Arjun's extensive knowledge of the local market and client-focused approach has helped hundreds find their dream homes.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Kavya Patel",
    position: "Customer Experience Manager",
    bio: "Kavya ensures every client receives personalized attention and a seamless experience throughout their property search.",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
                VR Estates was founded in 2025 by Nakul Bagree with a revolutionary vision: to redefine the real estate landscape in India. Witnessing the challenges faced by homebuyers—from endless site visits to a lack of transparency—Nakul envisioned a future where technology could bridge the gap between aspiration and reality.
              </p>
              <p className="text-realestate-gray mb-4">
                Harnessing the power of immersive virtual reality, we developed a platform that offers lifelike property tours from the comfort of one's home. This not only saves precious time for both buyers and sellers but also promotes a more sustainable and efficient property discovery process.
              </p>
              <p className="text-realestate-gray">
                Today, VR Estates is a fast-growing name across major Indian cities, driven by a passionate team of tech innovators and real estate experts dedicated to delivering a seamless and trustworthy home-buying journey.
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
