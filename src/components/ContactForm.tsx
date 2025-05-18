
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { Alert, AlertDescription } from "@/components/ui/alert";

// EmailJS service configuration - same as in BookingForm
const EMAILJS_SERVICE_ID = "service_ejfs6ol";
const EMAILJS_TEMPLATE_ID = "template_qf76wz9";
const EMAILJS_USER_ID = "uUE7PH360uc4t3kXd";

// Destination email for form submissions
const NOTIFICATION_EMAIL = "nakulbagree@gmail.com";

const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError(null);
    
    // Check if EmailJS credentials are set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
      setEmailError("Email service not configured. Please set up EmailJS credentials.");
      setIsSubmitting(false);
      return;
    }
    
    // Prepare template parameters to match the EmailJS template
    const templateParams = {
      // Email configuration
      to_email: NOTIFICATION_EMAIL,
      title: subject || "Contact Form Submission",
      
      // Sender information matching template variables
      name: name,
      email: email,
      time: new Date().toLocaleString(),
      message: message,
      
      // Additional fields that might be in the template
      reply_to: email,
      phone: phone,
      form_source: "Website Contact Form",
    };
    
    console.log("Sending contact form data:", templateParams);
    
    // Send the email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        
        // Reset the form
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setEmailError("Failed to send your message. Please try again later or contact us directly.");
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {emailError && (
        <Alert variant="destructive">
          <AlertDescription>{emailError}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Smith"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.smith@example.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(123) 456-7890"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Inquiry about properties"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message here..."
          rows={5}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-realestate-teal hover:bg-realestate-blue"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
