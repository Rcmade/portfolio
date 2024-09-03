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
    console.log({ data });

    if (data?.message) {
      setResponseMessage(data.message, "default");
    } else if (data?.error) {
      setResponseMessage(data.error, "destructive");
    }
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
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
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Subject"
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={8}
                  disabled={isLoading}
                  placeholder="Your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormResultMessage message={message} variant={type} />

        <Button disabled={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
