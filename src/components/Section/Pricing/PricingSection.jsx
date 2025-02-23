import { FaBolt, FaCheck, FaTimes } from "react-icons/fa";
import { InteractiveButton } from "@/components/ui/interactive-button";
import { BorderBeam } from "@/components/ui/border-beam";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "199",
      originalPrice: "299",
      features: [
        "NextJS boilerplate",
        "SEO & Blog",
        "Mailgun emails",
        "Stripe / Lemon Squeezy",
        "MongoDB / Supabase",
        "Google Oauth & Magic Links",
        "Components & animations",
        "ChatGPT prompts for terms & privacy"
      ],
      disabledFeatures: [
        "Discord community & Leaderboard",
        "$1,210 worth of discounts",
        "Lifetime updates"
      ]
    },
    {
      name: "All-in",
      price: "249",
      originalPrice: "349",
      features: [
        "NextJS boilerplate",
        "SEO & Blog",
        "Mailgun emails",
        "Stripe / Lemon Squeezy",
        "MongoDB / Supabase",
        "Google Oauth & Magic Links",
        "Components & animations",
        "ChatGPT prompts for terms & privacy",
        "Discord community & Leaderboard",
        "$1,210 worth of discounts",
        "Lifetime updates"
      ],
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Simple Pricing</h2>
          <p className="text-xl text-gray-400">
            Pay once, build unlimited projects!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.highlight 
                  ? "bg-[#1a1a1a]" 
                  : "bg-[#1a1a1a]/80"
              } backdrop-blur-sm p-6 border border-accent-background/20`}
            >
              {plan.highlight && <BorderBeam colorFrom="#F5AF00" colorTo="#FF3D00" duration={4} size={24} />}
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 line-through">${plan.originalPrice}</span>
                    <span className="text-sm text-gray-400">USD</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm">
                      <FaCheck className="text-primary text-sm flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.disabledFeatures?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 opacity-50 text-sm">
                      <FaTimes className="text-gray-500 text-sm flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <InteractiveButton className="w-full">
                  <FaBolt className="text-lg" />
                  Get {plan.name}
                </InteractiveButton>

                <p className="text-sm text-center text-gray-400">
                  Pay once. Build unlimited projects!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 