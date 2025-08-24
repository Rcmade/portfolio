"use client";
import React from "react";
import contactSchema from "@/zod/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { ContactSchemaT } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { contactAction } from "@/action/contactAction";
import { useFormResponseMessage } from "@/hook/useFormResponse";
import FormResultMessage from "@/components/alerts/FormResultMessage";

const ContactForm = () => {
  const { setResponseMessage, message, type } = useFormResponseMessage();
  const form = useForm<ContactSchemaT>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (values: ContactSchemaT) => {
    const data = await contactAction(values);

    if (data?.message) {
      setResponseMessage(data.message, "default");
      form.reset();
    } else if (data?.error) {
      setResponseMessage(data.error, "destructive");
    }
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h2 className="text-center text-3xl font-bold">
          Let&apos;s Work Together
        </h2>
        <p>
          Ready to turn your ideas into reality? Whether you&apos;re building a
          product from scratch or scaling an existing app, I&apos;m here to
          help.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormLabel className="mb-2 block">Your Email Address</FormLabel>

              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Your Email"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Subject</FormLabel> */}
              <FormLabel className="mb-2 block">
                What&apos;s this about?
              </FormLabel>

              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="e.g. Contract, Job Opportunity, Collaboration"
                  {...field}
                  type="text"
                />
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
              {/* <FormLabel>Message</FormLabel> */}
              <FormLabel className="mb-2 block">How can I help?</FormLabel>

              <FormControl>
                <Textarea
                  rows={8}
                  disabled={isLoading}
                  placeholder="Feel free to share some project details, timelines, or goals..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormResultMessage message={message} variant={type} />

        <Button className="w-full" disabled={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
