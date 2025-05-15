"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type PaymentOption = {
  name: string;
  price: string;
};

interface CourseEnrollButtonProps {
  courseTitle: string;
  paymentOptions: PaymentOption[];
}

export function CourseEnrollButton({
  courseTitle,
  paymentOptions,
}: CourseEnrollButtonProps) {
  const [open, setOpen] = useState(false);
  const [paymentValue, setPaymentValue] = useState<string | undefined>(
    paymentOptions[0]?.name
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission
    // For now, we'll just show the success message
    setIsSubmitted(true);

    // After 3 seconds, close the dialog and reset the form
    setTimeout(() => {
      setOpen(false);
      // Reset the form state after closing
      setTimeout(() => {
        setIsSubmitted(false);
      }, 300);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-3 bg-orange-500 hover:bg-orange-600 text-lg py-6">
          Enroll Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] duration-300">
        <DialogHeader>
          <DialogTitle className="text-2xl">Course Enrollment</DialogTitle>
          <DialogDescription>
            Fill out this form to enroll in{" "}
            <span className="font-semibold">{courseTitle}</span>
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-700">
              Enrollment Successful!
            </h3>
            <p className="text-gray-600">
              Thank you for enrolling in{" "}
              <span className="font-medium">{courseTitle}</span>. We've sent you
              an email with further instructions.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName" className="required">
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                required
                className="focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="required">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                className="focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+251 91 234 5678"
                className="focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="grid gap-2">
              <Label className="required">Course Selection</Label>
              <div className="p-4 border rounded-md bg-blue-50">
                <p className="font-medium text-blue-800">{courseTitle}</p>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="required">Payment Option</Label>
              <RadioGroup
                value={paymentValue}
                onValueChange={setPaymentValue}
                className="grid gap-3"
                required
              >
                {paymentOptions.map((option) => (
                  <div
                    key={option.name}
                    className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <RadioGroupItem value={option.name} id={option.name} />
                    <Label
                      htmlFor={option.name}
                      className="flex justify-between items-center w-full cursor-pointer"
                    >
                      <span>{option.name}</span>
                      <span className="font-semibold text-blue-700">
                        {option.price}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="willingness" className="required">
                Are you willing to pay for this course?
              </Label>
              <Textarea
                id="willingness"
                placeholder="Please share your thoughts about investing in this course..."
                required
                className="min-h-[100px] focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-5"
              >
                Complete Enrollment
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
