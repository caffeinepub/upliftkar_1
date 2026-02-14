import { Users, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="container space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            About <span className="gradient-text">Upliftkar</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're passionate about connecting brands with the right influencers to create authentic, impactful campaigns.
          </p>
        </div>

        {/* Mission Section */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                At Upliftkar, we believe in the power of authentic storytelling. Our mission is to bridge the gap between brands and influencers, creating partnerships that resonate with audiences and drive real results. We specialize in crafting strategic campaigns that elevate your brand presence and maximize ROI.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        {/* Founders Section */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Meet the Founders
            </h2>
            <p className="text-lg text-muted-foreground">
              The visionaries behind Upliftkar's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <Card className="group hover:border-primary/50 transition-all hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    SM
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Samuel Mehrulia</CardTitle>
                    <p className="text-primary font-medium">Founder</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Samuel is a visionary entrepreneur with a deep understanding of digital marketing and influencer ecosystems. With years of experience in brand strategy and partnership development, he founded Upliftkar to revolutionize how brands connect with their audiences through authentic influencer collaborations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His expertise in identifying emerging trends and building meaningful relationships has helped numerous brands achieve unprecedented growth and engagement.
                </p>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="group hover:border-primary/50 transition-all hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    JM
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Jayden Mark</CardTitle>
                    <p className="text-primary font-medium">Co-Founder</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Jayden brings a wealth of knowledge in creative campaign execution and influencer relations. As Co-Founder, he oversees the strategic direction of all partnerships, ensuring every collaboration delivers maximum value for both brands and creators.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His innovative approach to campaign design and data-driven insights have positioned Upliftkar as a trusted partner for brands looking to make a lasting impact in the digital space.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        {/* Values Section */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              What drives us every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe in genuine connections and transparent partnerships that resonate with real audiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Results-Driven</h3>
                <p className="text-muted-foreground">
                  Every campaign is designed with clear objectives and measurable outcomes to maximize ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of trends and leverage cutting-edge strategies to keep your brand competitive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
