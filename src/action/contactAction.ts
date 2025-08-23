"use server";

import { sendMail } from "@/lib/nodemailer";
import { ContactSchemaT } from "@/types";
import contactSchema from "@/zod/contactSchema";

export const contactAction = async (data: ContactSchemaT) => {
  const validate = contactSchema.safeParse(data);
  if (!validate.success) {
    return { error: "Invalid fields.", errors: validate.error.errors };
  }

  const { email, message, subject } = validate.data;

  try {
    await sendMail({
      subject,
      toEmail: [
        "rahulchourasiya4567@gmail.com",
        "rahulchourasiya0204@gmail.com",
      ],
      html: `from ${email} Message: ${message}`,
    });
  } catch (error) {
    return {
      error: "Something went wrong. Please try again later.",
    };
  }

  return {
    message: "Thank you for contacting me. I will get back to you soon.",
  };
};
