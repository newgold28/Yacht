import React from 'react';
import { Zap, Users } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full bg-transparent py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12">
        
        {/* Left Column */}
        <div className="w-full max-w-[380px] flex flex-col gap-12 lg:gap-24 justify-center">
          
          {/* Card 1 */}
          <div className="w-full p-8 rounded-[28px] bg-[#111111]/90 backdrop-blur-md flex flex-col shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#3B82F6] mb-6 shadow-md">
              <Zap className="w-6 h-6" fill="currentColor" strokeWidth={0} />
            </div>
            <h3 className="text-[21px] font-semibold text-white tracking-tight mb-3">Tailored Experiences</h3>
            <p className="text-[15px] text-zinc-400 leading-[1.6]">
              Every detail is customized to match your unique preferences and style of travel.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full p-8 rounded-[28px] bg-[#111111]/90 backdrop-blur-md flex flex-col shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#3B82F6] mb-6 shadow-md">
              <Users className="w-6 h-6" fill="currentColor" strokeWidth={0} />
            </div>
            <h3 className="text-[21px] font-semibold text-white tracking-tight mb-3">Expert Guides</h3>
            <p className="text-[15px] text-zinc-400 leading-[1.6]">
              Explore with passionate locals who share insider knowledge and hidden gems.
            </p>
          </div>

        </div>

        {/* Center Space for Island Framing */}
        <div className="hidden md:block flex-1 min-w-[300px] lg:min-w-[500px]" />

        {/* Right Column */}
        <div className="w-full max-w-[380px] flex flex-col gap-12 lg:gap-24 justify-center">
          
          {/* Card 2 */}
          <div className="w-full p-8 rounded-[28px] bg-[#111111]/90 backdrop-blur-md flex flex-col shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#3B82F6] mb-6 shadow-md">
              <Zap className="w-6 h-6" fill="currentColor" strokeWidth={0} />
            </div>
            <h3 className="text-[21px] font-semibold text-white tracking-tight mb-3">Seamless Logistics</h3>
            <p className="text-[15px] text-zinc-400 leading-[1.6]">
              From transport to ticketing, we handle everything so you can relax and enjoy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full p-8 rounded-[28px] bg-[#111111]/90 backdrop-blur-md flex flex-col shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#3B82F6] mb-6 shadow-md">
              <Users className="w-6 h-6" fill="currentColor" strokeWidth={0} />
            </div>
            <h3 className="text-[21px] font-semibold text-white tracking-tight mb-3">24/7 Support</h3>
            <p className="text-[15px] text-zinc-400 leading-[1.6]">
              We're always available to ensure your journey is smooth and worry-free.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
