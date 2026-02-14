import { Mail, MapPin, Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
  return (
    <div className="py-16 md:py-24">
      <div className="container space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform your brand with influencer marketing? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to launch your first influencer campaign or scale your existing partnerships, our team is here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <Card className="group hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6">
                  <a 
                    href="mailto:upliftkar@gmail.com"
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        upliftkar@gmail.com
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="group hover:border-primary/50 transition-all hover:shadow-glow">
                <CardContent className="p-6">
                  <a 
                    href="https://www.instagram.com/Upliftkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <SiInstagram className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        @Upliftkar
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Upliftkar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Extensive network of verified influencers across all niches</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Data-driven strategies that maximize ROI</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>End-to-end campaign management and support</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p>Transparent reporting and performance analytics</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <InquiryForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
