import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Inquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:upliftkar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast.success('Opening your email client...');
  };

  const handleCopyToClipboard = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}\nMessage:\n${formData.message}`;
    
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast.success('Message copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <form onSubmit={handleMailtoSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company name"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          type="submit" 
          className="flex-1 group"
          disabled={!isFormValid}
        >
          <Mail className="mr-2 h-4 w-4" />
          Send via Email
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleCopyToClipboard}
          disabled={!isFormValid}
          className="flex-1"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Message
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        * Required fields. Your email client will open with the pre-filled message.
      </p>
    </form>
  );
}
