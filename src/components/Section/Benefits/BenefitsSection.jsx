import { AuroraText } from "@/components/ui/aurora-text";
import { BorderBeam } from "@/components/ui/border-beam";
import benefitsData from "@/db/benefits.json";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[36px] font-bold leading-tight">
            Save hundreds of hours of development
          </h2>
          <p className="text-xl text-gray-400">
            Focus on your product, not on the technical details
          </p>
        </div>

        {/* Time Savings Card with Border Beam - Made smaller and darker */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-[#1a1a1a] backdrop-blur-sm p-8 border border-accent-background/20">
            <BorderBeam 
              colorFrom="#F5AF00"
              colorTo="#FF3D00"
              duration={4}
              size={24}
            />
            
            <div className="flex flex-col gap-4">
              {benefitsData.timeStats.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 group transition-transform hover:translate-x-2"
                >
                  <span className="text-primary font-bold text-lg min-w-[60px]">{item.hours}</span>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.task}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-6 border-t border-gray-800">
              <div className="text-xl font-bold">
                <span className="text-primary">= 22+ hours</span>
                <span className="text-gray-400"> of headaches</span>
                <span className="ml-2">⛈️</span>
              </div>
              <p className="text-gray-400 mt-2">There's an easier way</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 