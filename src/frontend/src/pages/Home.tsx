import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Hero background image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/generated/upliftkar-hero-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Influencer Marketing Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              <span className="gradient-text">Chal Kuch kar</span>
              <br />
              <span className="text-foreground">Upliftkar</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elevating brands through authentic influencer partnerships and strategic marketing campaigns.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/services">
                <Button size="lg" className="glow-effect group">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to elevate your brand? Reach out to us today.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <Card className="group hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6">
                  <a 
                    href="mailto:upliftkar@gmail.com"
                    className="flex flex-col items-center space-y-4 text-center"
                  >
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        upliftkar@gmail.com
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6">
                  <a 
                    href="https://www.instagram.com/Upliftkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 text-center"
                  >
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <SiInstagram className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        @Upliftkar
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with Upliftkar and unlock the power of influencer marketing to reach your target audience authentically.
              </p>
              <Link to="/about">
                <Button size="lg" variant="outline" className="group">
                  Learn About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
