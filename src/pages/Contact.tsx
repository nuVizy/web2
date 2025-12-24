import { FormEvent, useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import { usePageMeta } from '../hooks/usePageMeta';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: ''
};

const Contact = () => {
  usePageMeta({ title: 'Contact | nuViz Studio', description: 'Contact nuViz Studio for photography, film, music video, or design projects.' });

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<keyof FormState, string>>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<keyof FormState, string> = { name: '', email: '', projectType: '', budget: '', message: '' };
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.projectType) newErrors.projectType = 'Select a project type';
    if (!form.budget) newErrors.budget = 'Select a budget range';
    if (form.message.trim().length < 10) newErrors.message = 'Share a few more details';
    setErrors(newErrors);
    return Object.values(newErrors).every(val => !val);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  return (
    <div>
      <Section size="lg" padClassName="pt-28 pb-10 md:pt-32 md:pb-12" className="ctx-grid">
        <SectionHeading
          kicker="Contact"
          as="h1"
          size="lg"
          title="Tell us what you’re building"
          description={
            <>
              <p>Send a brief, a reference, or a rough idea. We’ll reply with direction, structure, and a timeline.</p>
              <p className="mt-3">Based in Paphos, Cyprus. Built in the UK. Working across Cyprus, the UK and Europe.</p>
              <p className="mt-3">
                Prefer email? <span className="text-[var(--text)]">studio@nuviz.studio</span>
              </p>
            </>
          }
        />

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Response within one business day", "Transparent scope + rights", "Small crews, clean delivery"].map((t) => (
            <Card key={t} tone="outline" pad="sm" className="text-sm text-[var(--muted)]">
              {t}
            </Card>
          ))}
        </div>
      </Section>

      <Section size="lg" tone="borderTop" padClassName="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="What to send"
              title="The three things that help"
              description={
                <ul className="mt-2 space-y-2">
                  <li>• A reference (links, screenshots, moods)</li>
                  <li>• The outcome you need (deliverables + where it will live)</li>
                  <li>• Any constraints (date, location, budget range)</li>
                </ul>
              }
            />
          </div>

          <div className="lg:col-span-7">
            <Card pad="lg">
              {submitted ? (
                <div className="space-y-3">
                  <h2 className="font-mono text-2xl text-[var(--text)]">Received.</h2>
                  <p className="text-[var(--muted)]">Thanks — we’ll respond with next steps shortly.</p>
                  <Button onClick={() => setSubmitted(false)}>Send another request</Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[var(--text)]">Name</label>
                    <Input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="mt-1"
                      required
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[var(--text)]">Email</label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="mt-1"
                      required
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-project-type" className="block text-sm font-semibold text-[var(--text)]">Project type</label>
                      <Select
                        id="contact-project-type"
                        value={form.projectType}
                        onChange={(e) => handleChange('projectType', e.target.value)}
                        className="mt-1"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Photography">Photography</option>
                        <option value="Videography">Videography</option>
                        <option value="Music Video">Music Video</option>
                        <option value="Design">Design</option>
                      </Select>
                      {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-semibold text-[var(--text)]">Budget range</label>
                      <Select
                        id="contact-budget"
                        value={form.budget}
                        onChange={(e) => handleChange('budget', e.target.value)}
                        className="mt-1"
                        required
                      >
                        <option value="">Select</option>
                        <option value="Under 3k">Under €3k</option>
                        <option value="3k-7k">€3k – €7k</option>
                        <option value="7k-15k">€7k – €15k</option>
                        <option value="15k+">€15k+</option>
                      </Select>
                      {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-notes" className="block text-sm font-semibold text-[var(--text)]">Project notes</label>
                    <Textarea
                      id="contact-notes"
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="mt-1"
                      placeholder="Links, dates, location, deliverables…"
                      required
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit">Send request</Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
