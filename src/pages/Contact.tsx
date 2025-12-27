import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import TextLink from "../components/ui/TextLink";
import { usePageMeta } from "../hooks/usePageMeta";

const Contact = () => {
  usePageMeta({
    title: "Contact | nuViz Studio",
    description: "Send a reference + intention and we’ll reply with direction, structure, and a realistic timeline.",
    canonicalPath: "/contact",
  });

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* HERO */}
      <Section
        bleed
        padClassName="pt-24 pb-10 sm:pt-28 md:pt-36 md:pb-16"
        className="relative overflow-hidden ctx-grid min-h-[100svh] flex flex-col"
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://res.cloudinary.com/de8d8i155/image/upload/v1766879739/_DSC7548_aybxkv.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/35" />
          {/* depth gradient (matches your other heroes) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
        </div>

        {/* Content pinned to bottom */}
        <Container size="lg" className="relative mt-auto w-full">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8 min-w-0">
              <p
                className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm"
                data-prefix="//"
              >
                Contact
              </p>

              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl text-[var(--text)] leading-tight">
                Send a reference + intention.
              </h1>

              <p className="mt-4 text-[var(--muted)] max-w-2xl">
                Links, mood, constraints, timeline — we’ll reply within one business day with direction, structure, and a
                realistic plan.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <Button className="w-full sm:w-auto" to="/contact">
                  Start a brief
                </Button>
                <Button className="w-full sm:w-auto" variant="ghost" to="/work">
                  View work
                </Button>
                <TextLink to="/about" className="min-h-[44px]">
                  Read the studio story
                </TextLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONTENT (keep your existing form/blocks here, or use this layout) */}
      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 min-w-0">
            <SectionHeading
              kicker="How to brief us"
              title="Make it easy to say yes"
              description={
                <>
                  <p>Share 2–4 references, your deadline, and where it will live (web, press, socials, stage, print).</p>
                  <p className="mt-3">If you don’t know yet, tell us the feeling and we’ll propose structure.</p>
                </>
              }
            />
          </div>

          <div className="lg:col-span-7 min-w-0 grid gap-4">
            <Card className="w-full" pad="lg">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Response</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Usually within <span className="text-[var(--text)] font-mono">&lt; 1 business day</span>.
              </p>
            </Card>

            <Card className="w-full" pad="lg">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Email</p>
              <p className="mt-2 text-sm text-[var(--muted)] break-all">
                studio@nuviz.studio
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                {/* If your Button supports external links, switch to it.
                    Otherwise keep this as a TextLink or plain <a>. */}
                <a
                  href="mailto:studio@nuviz.studio"
                  className="min-h-[44px] inline-flex items-center justify-center border border-[var(--accent-dim)] px-4 text-sm text-[var(--text)] hover:text-[var(--accent-green)] transition-colors"
                >
                  Email us
                </a>
                <a
                  href="mailto:studio@nuviz.studio?subject=Project%20enquiry%20—%20nuViz"
                  className="min-h-[44px] inline-flex items-center justify-center border border-[var(--accent-dim)] px-4 text-sm text-[var(--muted)] hover:text-[var(--accent-green)] transition-colors"
                >
                  Start a structured brief
                </a>
              </div>
            </Card>

            {/* If you already have a ContactForm component, drop it here */}
            {/* <ContactForm /> */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
