
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Phone, Mail, User, Bot, Send, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Help = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "bot", message: "Hello! I'm here to help you with VR Estates. How can I assist you today?" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      message: newMessage
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: "bot",
        message: "Thank you for your message. For complex queries, I can connect you with a human agent. Would you like me to do that?"
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);

    setNewMessage("");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const faqItems = [
    {
      question: "How do virtual tours work?",
      answer: "Our virtual tours use 360-degree photography and VR technology to let you explore properties from anywhere. Simply click on the 'Virtual Tour' button on any property listing."
    },
    {
      question: "Can I schedule an in-person visit?",
      answer: "Yes! You can book physical visits through our 'Book a Visit' page or by contacting our agents directly."
    },
    {
      question: "Are the property details accurate?",
      answer: "We ensure all property information is verified and updated regularly. However, we recommend confirming details during your visit."
    },
    {
      question: "How can I get financing help?",
      answer: "We work with trusted financial partners to help you secure the best mortgage rates. Contact our team for personalized assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-realestate-blue">Help & Support</h1>
        </div>

        <Tabs defaultValue="chat" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="chat">Live Chat</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Live Chat Support
                </CardTitle>
                <CardDescription>
                  Chat with our AI assistant or request to speak with a human agent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-96 border rounded-lg p-4 overflow-y-auto bg-muted/30">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'user'
                              ? 'bg-realestate-blue text-white'
                              : 'bg-white border shadow-sm'
                          }`}
                        >
                          <div className="flex items-center mb-1">
                            {msg.sender === 'bot' ? (
                              <Bot className="h-4 w-4 mr-2" />
                            ) : (
                              <User className="h-4 w-4 mr-2" />
                            )}
                            <span className="text-xs font-medium">
                              {msg.sender === 'bot' ? 'AI Assistant' : 'You'}
                            </span>
                          </div>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-realestate-gray">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                    <Input
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-realestate-blue" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-realestate-gray">+91 98267 41260</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-realestate-blue" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-realestate-gray">info@vrestates.com</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Office Hours</h4>
                    <div className="text-sm text-realestate-gray space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-realestate-gray mb-4">
                    Learn how to navigate our platform and find your dream property.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Virtual Tours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-realestate-gray mb-4">
                    Discover how to make the most of our virtual tour technology.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-realestate-gray mb-4">
                    Step-by-step guide to scheduling property visits.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
