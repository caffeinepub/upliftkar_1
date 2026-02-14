import { SiInstagram } from 'react-icons/si';
import { Mail, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { BRAND } from '@/lib/brand';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'upliftkar';

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={BRAND.logo.path}
              alt={BRAND.logo.alt}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              {BRAND.tagline} — Your partner in influencer marketing and brand partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:upliftkar@gmail.com" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>upliftkar@gmail.com</span>
              </a>
              <a 
                href="https://www.instagram.com/Upliftkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <SiInstagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>@Upliftkar</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-muted-foreground">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>using</span>
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
