import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container">
        <Card className="max-w-2xl mx-auto text-center border-primary/20">
          <CardContent className="p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-display font-bold gradient-text">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="group">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.history.back()}
                className="group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
