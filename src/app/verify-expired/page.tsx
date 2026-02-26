import Container from "@/components/Container";
import { ClockAlert } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Link Expired — CheckIn More",
  description: "This verification link has expired or is no longer valid.",
};

export default function VerifyExpiredPage() {
  return (
    <Container className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md w-full text-center py-16">
        <div className="flex justify-center mb-6">
          <ClockAlert
            size={64}
            strokeWidth={1.5}
            style={{ color: "var(--primary)" }}
          />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Link Expired
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--foreground-accent)" }}>
          This verification link has expired or has already been used. Please
          ask the person who added you to resend the verification email from
          their CheckIn More app.
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
