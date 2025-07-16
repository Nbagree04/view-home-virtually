
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HelpCircle, MessageCircle, Phone, Mail, Send, Bot, User, X } from "lucide-react";

const HelpWidget = () => {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "bot", message: "Hi! I'm here to help. What can I assist you with today?" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      message: newMessage
    };

    setChatMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I understand you need help with that. Let me connect you with more detailed information.",
        "That's a great question! You can find more detailed help in our full help section.",
        "I'd be happy to help! For complex queries, you might want to speak with one of our agents.",
        "Thanks for reaching out! Is there anything specific about our properties you'd like to know?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botResponse = {
        id: chatMessages.length + 2,
        sender: "bot",
        message: randomResponse
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);

    setNewMessage("");
  };

  const quickActions = [
    { label: "Browse Properties", action: () => window.location.href = "/properties" },
    { label: "Book a Visit", action: () => window.location.href = "/book-visit" },
    { label: "Contact Us", action: () => window.location.href = "/contact" },
  ];

  return (
    <>
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 bg-realestate-blue hover:bg-realestate-blue/90 shadow-lg"
            >
              <HelpCircle className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          
          <SheetContent side="right" className="w-96 sm:w-96">
            <SheetHeader>
              <div className="flex items-center justify-between">
                <div>
                  <SheetTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Quick Help
                  </SheetTitle>
                  <SheetDescription>
                    Get instant assistance or chat with our support team
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>

            <div className="mt-6 space-y-4">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={action.action}
                    >
                      {action.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Mini Chat */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Chat with AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-48 border rounded p-3 overflow-y-auto bg-muted/20">
                      {chatMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] px-3 py-2 rounded-lg text-xs ${
                              msg.sender === 'user'
                                ? 'bg-realestate-blue text-white'
                                : 'bg-white border'
                            }`}
                          >
                            <div className="flex items-center mb-1">
                              {msg.sender === 'bot' ? (
                                <Bot className="h-3 w-3 mr-1" />
                              ) : (
                                <User className="h-3 w-3 mr-1" />
                              )}
                              <span className="text-xs font-medium">
                                {msg.sender === 'bot' ? 'AI' : 'You'}
                              </span>
                            </div>
                            <p>{msg.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="text-sm"
                      />
                      <Button size="sm" onClick={handleSendMessage}>
                        <Send className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/help">
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Full Help Center
                    </Button>
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+919826741260">
                        <Phone className="h-3 w-3 mr-1" />
                        Call Us
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:info@vrestates.com">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default HelpWidget;
