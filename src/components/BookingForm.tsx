import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const appointmentTypes = [
    { value: "consultation", label: "General Consultation" },
    { value: "try-instruments", label: "Try Instruments" },
    { value: "repair-assessment", label: "Repair Assessment" },
    { value: "rental-setup", label: "Rental Setup" },
    { value: "maintenance", label: "Instrument Maintenance" },
    { value: "other", label: "Other" }
  ];

  return (
    <Card className="border-0 bg-gradient-card shadow-luxury">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-primary text-center">
          Schedule an Appointment
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Available by appointment only. Please select your preferred date and time.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter first name" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter last name" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter phone number" />
          </div>
        </div>

        <div>
          <Label htmlFor="appointmentType">Appointment Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select appointment type" />
            </SelectTrigger>
            <SelectContent>
              {appointmentTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Preferred Date</Label>
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
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="time">Preferred Time</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {time}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Additional Information</Label>
          <Textarea 
            id="message" 
            placeholder="Please tell us about your specific needs, instruments you're interested in, or any questions you have..."
            rows={4}
          />
        </div>

        <Button className="w-full" variant="luxury" size="lg">
          Schedule Appointment
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>We'll confirm your appointment within 24 hours.</p>
          <p>For urgent needs, please call <a href="tel:7203648669" className="text-primary hover:underline">(720) 364-8669</a></p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingForm;