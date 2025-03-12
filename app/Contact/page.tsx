"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  phone: string;
  email: string;
  query: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await fetch("/api/saveQueries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            query: "",
          });
          setIsSubmitted(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to submit the form");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-2 p-8">
        <div className="flex p-4 justify-center items-center h-full w-full">
          <Card className="h-[700px] w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
            </CardHeader>

            <CardContent>
              {isSubmitted && (
                <Alert className="bg-green-100 border-green-400 text-green-700 mb-6">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Thank you for your message! We&apos;ll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {error && (
                <Alert className="bg-red-100 border-red-400 text-red-700 mb-6">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enamul Haque Chowdhury"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+8801711325022"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="irfansifat@gmail.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="query">Your Query</Label>
                  <Textarea
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleTextareaChange}
                    placeholder="Please let us know how we can help you..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col space-y-3 text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +8801711325022
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    irfansifat@gmail.com
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Opposite of Dhaka bank, Nazrul Avenue, Kandirpar, Cumilla, Bangladesh - 3500
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="h-full w-full flex justify-center items-center p-4">
          <Image
            src={"/RandomImage/Image4.jpg"}
            alt="Random Image"
            height={300}
            width={1000}
            className="h-[700px] object-cover overflow-hidden rounded-2xl"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;