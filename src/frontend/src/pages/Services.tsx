import { Handshake, Users, TrendingUp, BarChart3, MessageSquare, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const services = [
  {
    icon: Handshake,
    title: 'Brand Partnerships',
    description: 'Our specialty. We connect your brand with the perfect influencers to create authentic, high-impact partnerships that drive engagement and conversions.',
    featured: true,
  },
  {
    icon: Users,
    title: 'Influencer Sourcing',
    description: 'Access our extensive network of vetted creators across all niches. We identify and recruit influencers whose audience aligns perfectly with your brand values and target demographics.',
    featured: false,
  },
  {
    icon: TrendingUp,
    title: 'Campaign Strategy',
    description: 'Data-driven campaign planning and execution. We develop comprehensive strategies that maximize reach, engagement, and ROI while maintaining brand authenticity.',
    featured: false,
  },
  {
    icon: MessageSquare,
    title: 'Content Collaboration',
    description: 'Facilitate seamless collaboration between brands and creators. We manage the entire content creation process, ensuring brand guidelines are met while preserving creator authenticity.',
    featured: false,
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Comprehensive campaign tracking and reporting. We provide detailed insights into campaign performance, audience engagement, and ROI to optimize future strategies.',
    featured: false,
  },
  {
    icon: Award,
    title: 'Brand Reputation Management',
    description: 'Protect and enhance your brand image through strategic influencer partnerships. We ensure all collaborations align with your brand values and maintain a positive public perception.',
    featured: false,
  },
];

export default function Services() {
  return (
    <div className="py-16 md:py-24">
      <div className="container space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive influencer marketing solutions tailored to elevate your brand and drive measurable results.
          </p>
        </div>

        {/* Featured Service */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 shadow-glow">
            <CardHeader className="text-center space-y-4 pb-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wide">
                  Our Specialty
                </div>
                <CardTitle className="text-3xl md:text-4xl">Brand Partnerships</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We excel at creating meaningful connections between brands and influencers. Our strategic approach ensures every partnership is authentic, impactful, and delivers exceptional ROI. From initial outreach to campaign execution and performance analysis, we handle every aspect of your influencer collaborations.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-effect">
                  Start Your Partnership Journey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* All Services Grid */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Complete Marketing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we provide end-to-end influencer marketing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:border-primary/50 transition-all hover:shadow-glow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-card/50">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your marketing goals and connect with your target audience authentically.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">
                    Get Started Today
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
