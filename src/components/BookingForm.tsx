import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Destination email for form submissions
const NOTIFICATION_EMAIL = "nakulbagree@gmail.com";

// EmailJS service configuration
const EMAILJS_SERVICE_ID = "service_ejfs6ol";
const EMAILJS_TEMPLATE_ID = "template_qf76wz9";
const EMAILJS_USER_ID = "uUE7PH360uc4t3kXd";

const BookingForm = ({ propertyId = null }: { propertyId?: number | null }) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
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
    
    // Prepare template parameters to match the EmailJS template fields
    const templateParams = {
      // Email configuration
      to_email: NOTIFICATION_EMAIL,
      title: `Property Visit Request ${propertyId ? `(Property #${propertyId})` : ''}`,
      
      // Sender information matching template variables
      name: name,
      email: email,
      time: new Date().toLocaleString(),
      message: `${date ? `Requested visit date: ${format(date, "PPP")}\n\n` : ''}${message}`,
      
      // Additional fields
      phone: phone,
      property_reference: propertyId || "No specific property",
      form_source: "Property Booking Form",
      reply_to: email,
    };
    
    console.log("Sending email with data:", templateParams);
    
    // Send the email using EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast({
          title: "Booking Request Received",
          description: `We'll contact you shortly to confirm your appointment. A notification has been sent to our team.`,
        });
        
        // Reset the form
        setName("");
        setEmail("");
        setPhone("");
        setDate(undefined);
        setMessage("");
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setEmailError("Failed to send your booking request. Please try again later or contact us directly.");
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
          placeholder="e.g. Priya Sharma"
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
            placeholder="e.g. priya.sharma@example.com"
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
            placeholder="e.g. +91 98765 43210"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="date">Preferred Visit Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today || date.getDay() === 0; // Disable Sundays and past dates
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Let us know if you have any specific questions or preferences..."
          rows={4}
        />
      </div>
      
      {propertyId && (
        <div className="rounded-md bg-muted p-3">
          <p className="text-sm text-muted-foreground">
            You are booking a visit for Property #{propertyId}
          </p>
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full bg-realestate-teal hover:bg-realestate-blue"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Schedule Office Visit"}
      </Button>
    </form>
  );
};

export default BookingForm;
