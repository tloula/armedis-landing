import Container from "@/components/Container";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Email Verified — CheckIn More",
  description: "Your email address has been verified for CheckIn More alerts.",
};

export default function EmailVerifiedPage() {
  return (
    <Container className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md w-full text-center py-16">
        <div className="flex justify-center mb-6">
          <ShieldCheck
            size={64}
            strokeWidth={1.5}
            style={{ color: "var(--primary)" }}
          />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Email Verified
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--foreground-accent)" }}>
          Your email address is confirmed.
        </p>
        <Link
          href="/"
          className="inline-block text-sm font-medium underline underline-offset-4 transition-colors"
          style={{ color: "var(--link-text)" }}
        >
          Learn more about CheckIn More
        </Link>
      </div>
    </Container>
  );
}
