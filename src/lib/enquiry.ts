export interface EnquiryPayload {
  name: string;
  phone: string;
  email: string;
  configuration: string;
  message: string;
  consent: boolean;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryPayload, string>>;

/** Shared by the client form and the API route. */
export function validateEnquiry(data: Partial<EnquiryPayload>): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const name = data.name?.trim() ?? "";
  const phone = (data.phone ?? "").replace(/[\s-]/g, "");
  const email = data.email?.trim() ?? "";

  if (name.length < 2) errors.name = "Enter your full name.";
  if (!/^(\+91)?[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if ((data.message ?? "").length > 1000) {
    errors.message = "Keep your message under 1000 characters.";
  }
  if (!data.consent) errors.consent = "Please agree to be contacted.";
  return errors;
}
