"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot exceed 500 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // TODO: Replace with actual form submission logic (e.g., send to an API endpoint)
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Placeholder action
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      variant: "default", // Or use "success" if you add a success variant
    });
    form.reset(); // Reset form fields after successful submission
  }

  return (
    <div className="space-y-12 fade-in">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h1>
        <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
          Have a question, a project idea, or just want to connect? Feel free to reach out using the form below or through my contact details.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <section>
          <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
          <Card className="bg-card border-none shadow-none">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:atisam.akhtar@gmail.com" className="text-card-foreground hover:text-primary transition-colors">
                  atisam.akhtar@gmail.com
                </a>
                {/* <span> / </span> */}
                {/* <a href="mailto:atisam.akhter@gmail.com" className="text-card-foreground hover:text-primary transition-colors">
                  atisam.akhter@gmail.com
                </a> */}
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+923135772647" className="text-card-foreground hover:text-primary transition-colors">
                  <span className="text-card-foreground">+92 313 5772647</span>
                </a>
                <span> / </span>
                <a href="tel:+923244094298" className="text-card-foreground hover:text-primary transition-colors">
                  <span className="text-card-foreground">+92 324 4094298</span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-card-foreground">Lahore, Pakistan</span> {/* Replace with actual location */}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Send Me a Message</h2>
          <Card className="bg-card shadow-lg">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-input text-foreground placeholder:text-muted-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="bg-input text-foreground placeholder:text-muted-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or inquiry..."
                            className="resize-none bg-input text-foreground placeholder:text-muted-foreground"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
