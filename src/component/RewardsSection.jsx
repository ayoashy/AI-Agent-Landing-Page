import React from 'react';
import { Gift, Star, Rocket, Lock, Cpu, Zap } from 'lucide-react';

const RewardsSection = () => {
  const rewardTiers = [
    {
      icon: Star,
      title: 'Bronze Tier',
      description: 'Entry-level rewards for new users',
      color: 'from-[#CD7F32] to-[#A0522D]',
    },
    {
      icon: Rocket,
      title: 'Silver Tier',
      description: 'Enhanced rewards for active participants',
      color: 'from-[#C0C0C0] to-[#708090]',
    },
    {
      icon: Lock,
      title: 'Gold Tier',
      description: 'Premium rewards for top contributors',
      color: 'from-[#FFD700] to-[#DAA520]',
    },
  ];

  return (
    <section
      id='rewards'
      className='py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white'
    >
      <div className='container mx-auto px-4 text-center'>
        <div className='mb-16'>
          <h3 className='text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
            Reward Ecosystem
          </h3>
          <p className='text-xl mb-8 text-gray-300 max-w-2xl mx-auto'>
            Unlock a comprehensive reward system that transforms your social
            interactions into valuable digital assets. Earn tokens, exclusive
            access, and unique benefits across our Web3 ecosystem.
          </p>
        </div>

        {/* Reward Tiers */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {rewardTiers.map(
            ({ icon: Icon, title, description, color }, index) => (
              <div
                key={index}
                className='relative group p-6 bg-[#16213e] rounded-2xl border border-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl'
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Icon */}
                <div className='mb-6 flex justify-center'>
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${color} bg-opacity-20`}
                  >
                    <Icon className='w-12 h-12 text-white' strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className='relative z-10'>
                  <h4 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
                    {title}
                  </h4>
                  <p className='text-gray-300'>{description}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Reward Visualization */}
        <div className='relative bg-[#16213e] rounded-2xl p-8 max-w-4xl mx-auto border border-[#00ff87]/20'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <Zap className='w-10 h-10 text-[#00ff87]' />
              <span className='text-xl font-semibold'>Total Reward Pool</span>
            </div>
            <div className='flex items-center space-x-4'>
              <Cpu className='w-10 h-10 text-[#00ff87]' />
              <span className='text-xl font-semibold'>
                AI-Powered Distribution
              </span>
            </div>
            <div className='flex items-center space-x-4'>
              <Gift className='w-10 h-10 text-[#00ff87]' />
              <span className='text-xl font-semibold'>Exclusive Perks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
