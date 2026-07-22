"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";

/** Accessible contact form: RHF + Zod validation, locale-aware error messages,
 *  loading/success/error states via Sonner. Posts to the `/api/contact` proxy. */
export function ContactForm() {
  const t = useTranslations("contact.form");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success(t("success"));
      reset();
    } catch {
      toast.error(t("error"));
    }
  };

  // Zod stores an i18n key in `message` (e.g. "errors.name"); resolve it to
  // localized text. The key is dynamic, so it's cast to the translator's key type.
  const errorText = (key?: string) =>
    key ? t(key as Parameters<typeof t>[0]) : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={t("name")}
          error={errorText(errors.name?.message)}
        >
          <Input
            id="name"
            placeholder={t("namePlaceholder")}
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>

        <Field
          id="email"
          label={t("email")}
          error={errorText(errors.email?.message)}
        >
          <Input
            id="email"
            type="email"
            dir="ltr"
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>

        <Field
          id="phone"
          label={t("phone")}
          error={errorText(errors.phone?.message)}
        >
          <Input
            id="phone"
            type="tel"
            dir="ltr"
            placeholder={t("phonePlaceholder")}
            autoComplete="tel"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>

        <Field id="company" label={t("company")}>
          <Input
            id="company"
            placeholder={t("companyPlaceholder")}
            autoComplete="organization"
            {...register("company")}
          />
        </Field>
      </div>

      <Field
        id="message"
        label={t("message")}
        error={errorText(errors.message?.message)}
      >
        <Textarea
          id="message"
          placeholder={t("messagePlaceholder")}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 sm:self-start">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            {t("sending")}
          </>
        ) : (
          <>
            <Send />
            {t("submit")}
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
