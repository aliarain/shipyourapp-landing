const FeatureCard = ({ icon, title, items }) => {
  return (
    <div className="relative rounded-xl bg-[#1a1a1a] p-6">
      <div className="relative space-y-4">
        <div className="flex items-center gap-3 text-xl font-semibold">
          <span className="text-2xl">{icon}</span>
          {title}
        </div>

        <ul className="space-y-2">
          {items.map((item, index) => (
            <li 
              key={index}
              className="text-sm text-gray-400 flex items-center gap-2"
            >
              <span className="h-1 w-1 rounded-full bg-gray-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FeaturesGridSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Modular NextJS Boilerplate",
      items: [
        "Server Side Rendering",
        "Pre Built Components",
        "Edge Functions",
        "Upload Media",
        "Clean Typescript Code"
      ]
    },
    {
      icon: "🗄️",
      title: "Database",
      items: [
        "Postgres Tables on Supabase",
        "Row Level Security",
        "Realtime webhook response",
      ]
    },
    {
      icon: "🤖",
      title: "AI Modules",
      items: [
        "Chat Module",
        "Text Generation Module",
        "Image Generation Module",
        "Speech to Text Module",
        "Text to Speech Module"
      ]
    },
    {
      icon: "🎨",
      title: "Design",
      items: [
        "Tailwind CSS",
        "Shadcn",
        "Dark Mode"
      ]
    },
    {
      icon: "📧",
      title: "Emails",
      items: [
        "Loops Integration",
        "Resend Integration",
        "Email Login",
        "Save user in Supabase",
        "Private/protected pages & API calls"
      ]
    },
    {
      icon: "🔐",
      title: "Authentication",
      items: [
        "Supabase powered OAuth",
        "Magic Link",
        "Email Login",
        "Save user in Supabase",
        "Private/protected pages & API calls"
      ]
    },
    {
      icon: "💳",
      title: "Payments",
      items: [
        "Stripe Payment Link Support",
        "Lemon Squeezy Payment Link Support"
      ]
    },
    {
      icon: "🔍",
      title: "SEO",
      items: [
        "All meta tags to rank on Google",
        "OpenGraph tags to share on social media",
        "Automated sitemap generation",
        "SEO-optimized UI components"
      ]
    },
    {
      icon: "📚",
      title: "Documentation",
      items: [
        "Clean & Simple Documentation",
        "JSX Tutorials"
      ]
    },
    {
      icon: "⚙️",
      title: "Admin Panel",
      items: [
        "Users & Usage",
        "Tokens Usage",
        "Plan Changes"
      ]
    },
    {
      icon: "☁️",
      title: "Vercel Support",
      items: [
        "Deploy on Vercel",
        "No API Timeouts"
      ]
    },
    {
      icon: "✨",
      title: "More",
      items: [
        "Crisp Integration",
        "Privacy Policy Prompt & Page",
        "ToS Prompt & Page"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Features</h2>
          <p className="text-xl text-gray-400">
            ShipYourApp takes care of everything from authentication to payments, get your production-ready app within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection; 