import Container from "@/components/Container";
import { MailCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Email Verified — CheckIn More",
  description: "Your email address has been verified for CheckIn More alerts.",
  robots: { index: false, follow: false },
};

export default function EmailVerifiedPage() {
  return (
    <Container className="min-h-[80vh] flex items-center justify-center pt-32 pb-20">
      <div className="card max-w-md w-full text-center px-8 py-12 sm:px-10">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-soft ring-1 ring-primary/15">
          <MailCheck
            size={38}
            strokeWidth={1.5}
            style={{ color: "var(--primary)" }}
          />
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">
          Email Verified
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-foreground/75">
          Your email address is confirmed.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          Learn more about CheckIn More
        </Link>
      </div>
    </Container>
  );
}
