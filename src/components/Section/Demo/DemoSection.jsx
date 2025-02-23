const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Card */}
          <div className="relative rounded-2xl bg-[#1a1a1a] p-8">
            <div className="flex flex-col items-center gap-6">
              {/* Image placeholder */}
              <div className="w-32 h-32 rounded-full bg-accent-background/20 flex items-center justify-center text-gray-400">
                Profile Image
              </div>
              
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Hey, it's Ali Arain 👋</h3>
                  <p className="text-gray-400">
                    In 2019 I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0 users...
                  </p>
                  <p className="text-gray-400">
                    A few years after my burnout, I restarted the journey differently. I shipped like a madman
                    - 15 startups in 2 years. Now I'm happy and earn $45,000 a month.
                  </p>
                </div>

                <div className="text-gray-400">
                  <p>
                    I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks, design pricing section... So I built ShipFast for 3 reasons:
                  </p>
                  <ul className="mt-4 space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Save time</strong> and focus on what matters: building a business</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Avoid headaches</strong> like emails ending in spam or handling Stripe subscriptions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span><strong className="text-foreground">Get profitable fast</strong>—the more you ship, the more you learn, the more you earn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Video Demo - Border removed */}
          <div className="relative rounded-2xl bg-[#1a1a1a] p-8 aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="ShipFast Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 