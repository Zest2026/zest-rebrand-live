import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRIVACY_HASH = "#privacy-policy";

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const syncVisibility = () => {
      setIsVisible(window.location.hash === PRIVACY_HASH);
    };

    syncVisibility();
    window.addEventListener("hashchange", syncVisibility);
    return () => window.removeEventListener("hashchange", syncVisibility);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const frame = requestAnimationFrame(() => {
      document.getElementById("privacy-policy")?.scrollIntoView({ behavior: "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [isVisible]);

  const close = () => {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setIsVisible(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <section id="privacy-policy" className="py-16 lg:py-20 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-8">
            <div>
              <span className="text-primary font-bold text-sm tracking-wide uppercase mb-3 block">
                Legal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Privacy Policy</h2>
              <p className="text-sm text-foreground/60 mt-2">Last Updated: June 8th 2026</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={close}
              className="rounded-full shrink-0"
              aria-label="Close privacy policy"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-8 text-sm md:text-base text-foreground/80 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Zest Search Privacy Policy</h3>
              <h4 className="font-semibold text-foreground mb-2">Our contact details</h4>
              <ul className="space-y-1 list-none">
                <li><strong>Name:</strong> Zest Search LTD</li>
                <li>
                  <strong>Address:</strong> Profile West 950 Great West Road, Suite 2, First Floor, Brentford, United Kingdom, TW8 9ES
                </li>
                <li><strong>E-mail:</strong> hello@zestsearch.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Introduction</h4>
              <p className="mb-3">
                Zest Search is an executive search firm and network service to help businesses recruit Product and Design leaders on a permanent and advisory basis.
              </p>
              <p>
                We also provide introductions for persons in our network through a variety of ways including roundtable discussions and coffee chats.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Why we collect data</h4>
              <p className="mb-3">
                To be able to conduct a thorough search, we need to understand the client&apos;s needs and we need to know our candidates well. Throughout the interview process we will continue to gather additional information needed to assess candidates eligibility and any more insights that come up about the business and the positions we are hiring for.
              </p>
              <p className="mb-3">
                We will store details in order to contact you in relation to future candidates and job opportunities that may be of interest to you depending on whether your a candidate or a client.
              </p>
              <p className="mb-3">
                Depending on whether you are a candidate or a client, we may collect and process the following data about you:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Contact details such as email address and phone number</li>
                <li>Curriculum Vitae including employment history and educational details and other relevant information gathered through written form or conversations.</li>
                <li>Salary information</li>
                <li>Links to your professional profiles available in the public domain e.g. LinkedIn, Twitter, Cookies etc</li>
                <li>Immigration status/Right to work etc.</li>
                <li>Start date/availability date</li>
                <li>Information on your interests and needs regarding future employment, both collected directly and inferred.</li>
                <li>Information which you share with us when we meet in person, via video chat or through telephone conversations</li>
                <li>Organisational design</li>
              </ul>
              <p className="mt-3 mb-3">On occasion we will collect and process the following information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Home Address</li>
                <li>Sex/Gender</li>
                <li>Date of Birth</li>
                <li>Marital Status</li>
                <li>References and referee details</li>
                <li>Financial information pertaining to you or your personal service company including bank details.</li>
                <li>Extra information that you choose to tell us</li>
                <li>Extra information that your referees choose to tell us about you</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">How we collect your information</h4>
              <p>
                Most of the personal information we process is provided to us directly by you via email, LinkedIn or through conversation, occasionally it is collected indirectly from other sources. By sending Zest Search your CV (via our website, email, LinkedIn or any other means) you are indicating your consent for Zest Search to process your personal details in the manner described in this policy. So that we can support you, we will need to share some or all your information with business partners and companies / clients (prospect or existing) seeking candidates. As a client (prospect or existing) we may have to share some or all your information with potential candidates to get them interested in the job opportunities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Call Recordings and Transcription Tools</h4>
              <p className="mb-3">
                We occasionally use secure third-party tools to assist with note-taking and transcription during video or telephone calls. This helps us accurately capture key details from our conversations and maintain a high level of service. These tools may temporarily process audio data and convert it into text, which we store securely alongside our other records.
              </p>
              <p className="mb-3">
                We only use this information for legitimate business purposes, such as improving accuracy of our recruitment notes, understanding candidate or client requirements, and maintaining service quality.
              </p>
              <p>
                By continuing with a call, you acknowledge that automated note-taking or transcription tools may be used. If you would prefer not to have your call transcribed, please let us know prior to or during the call.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Data Security and Integrity</h4>
              <p className="mb-3">
                We will comply with all relevant data protection laws. This states that the personal information we hold about you must be:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Used lawfully, fairly and in a transparent way</li>
                <li>Collected only for valid purposes and not used in a manner that is incompatible with those purposes</li>
                <li>Relevant to the purposes we have told you about and limited only to those purposes</li>
                <li>Kept only as long as is necessary</li>
                <li>Kept securely</li>
                <li>Disposed of confidentially</li>
              </ul>
              <p className="mb-3">
                We have put in place measures to protect the security of your information. Details of these specific measures are available upon request. We will store this information for up to 10 years and we reserve the right to transfer personal data to a third party in the event of a sale of Zest Search, a merger or liquidation. You will be notified in the event of such transfer.
              </p>
              <p>
                We use our best efforts to ensure that data is accurate, complete, current and reliable for its intended use.
              </p>
            </div>

            <div>
              <p className="mb-3">Under data protection law, you have rights including:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information.</li>
                <li><strong>Your right to rectification</strong> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>
                <li><strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances.</li>
                <li><strong>Your right to restriction of processing</strong> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li>
                <li><strong>Your right to object to processing</strong> - You have the right to object to the processing of your personal information in certain circumstances.</li>
                <li><strong>Your right to data portability</strong> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li>
              </ul>
              <p className="mb-3">
                You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.
              </p>
              <p>
                Please contact us at{" "}
                <a href="mailto:privacy@zestsearch.com" className="text-primary hover:underline">
                  privacy@zestsearch.com
                </a>{" "}
                if you wish to make a request.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">How to complain</h4>
              <p>
                If you have any concerns about our use of your personal information, you can make a complaint to us at{" "}
                <a href="mailto:privacy@zestsearch.com" className="text-primary hover:underline">
                  privacy@zestsearch.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
