import { useState, type ReactNode } from "react";
import { Loader2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Get your free access key at https://web3forms.com (submissions go to hello@zestsearch.com)
const WEB3FORMS_ACCESS_KEY = "bc926f83-41cf-4320-b462-e4f836c5c525";

type Status = "idle" | "sending" | "success" | "error";

type ContactModalProps = {
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const ContactModal = ({ children, open: controlledOpen, onOpenChange }: ContactModalProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = onOpenChange ?? setUncontrolledOpen;
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New enquiry from zestsearch.com");
    formData.append("from_name", "Zest Search Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setStatus("idle");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-md max-h-[90dvh] overflow-y-auto rounded-2xl bg-card border-2 border-foreground/15">
        {status === "success" ? (
          <div className="py-8 text-center">
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">Thanks for reaching out!</DialogTitle>
              <DialogDescription className="text-center pt-2">
                We&apos;ve received your message and will get back to you shortly.
              </DialogDescription>
            </DialogHeader>
            <Button variant="yellow" className="mt-6" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
              <DialogDescription>
                Tell us a little about you and we&apos;ll get back to you shortly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" name="name" required placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-linkedin">LinkedIn URL (optional)</Label>
                <Input
                  id="contact-linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Tell us about the role you're hiring for, or your next move..."
                  className="min-h-[120px] text-base md:text-sm"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again, or email us directly at{" "}
                  <a href="mailto:hello@zestsearch.com" className="underline">
                    hello@zestsearch.com
                  </a>
                  .
                </p>
              )}

              <Button type="submit" variant="yellow" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
