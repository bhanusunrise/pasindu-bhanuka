"use client";

import { useState } from "react";

import type {
  EmailItem,
  EmailResponse,
} from "@/types/emails";

export default function useSendEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = async (
    data: EmailItem,
  ): Promise<EmailResponse> => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: EmailResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send email.");
      }

      setSuccess(result.message);

      return result;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send email.";

      setError(message);

      return {
        success: false,
        message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    error,
    success,
  };
}