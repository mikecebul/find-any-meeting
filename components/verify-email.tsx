"use client";

import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/users/verify/${token}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        // setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2 w-full">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-sm">
          This token is not valid or might be expired. Please try again.
        </p>
        <div className="pt-48 w-full text-center">
          <p className="text-muted-foreground">
            If you have already verified...
          </p>
          <Link
            className={buttonVariants({ className: "mt-4" })}
            href={`${process.env.NEXT_PUBLIC_API_URL}`}
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  if (!!data) {
    console.log("Data:", data);
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/magnify-glass-email.png" fill alt="the email was sent" />
        </div>

        <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you for verifying your email.
        </p>
        <Link
          className={buttonVariants({ className: "mt-4" })}
          href={`${process.env.NEXT_PUBLIC_API_URL}`}
        >
          Sign in
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-sm">
          This won&apos;t take long.
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
