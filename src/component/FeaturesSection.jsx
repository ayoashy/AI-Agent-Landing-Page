import React from 'react';
import { Zap, Shield, Gift, Cpu, Network, Rocket } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      Icon: Cpu,
      title: 'AI-Powered Engagement',
      description:
        'Intelligent interactions across multiple platforms with advanced AI capabilities.',
      gradient: 'from-[#00ff87] to-[#00dbde]',
    },
    {
      Icon: Network,
      title: 'Web3 Integration',
      description:
        'Blockchain-powered ecosystem ensuring transparent, secure, and decentralized interactions.',
      gradient: 'from-[#8A2BE2] to-[#4B0082]',
    },
    {
      Icon: Gift,
      title: 'Reward Mechanism',
      description:
        'Earn dynamic tokens and exclusive perks through meaningful platform engagement.',
      gradient: 'from-[#FF6B6B] to-[#FFD93D]',
    },
  ];

  return (
    <section
      id='features'
      className='py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]'
    >
      <div className='container mx-auto px-4'>
        <h3 className='text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
          Platform Features
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map(({ Icon, title, description, gradient }, index) => (
            <div
              key={index}
              className='relative group overflow-hidden p-6 bg-[#16213e] rounded-2xl border border-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl'
            >
              {/* Animated Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>

              {/* Icon with Dynamic Gradient */}
              <div className='mb-6 flex justify-center'>
                <div
                  className={`p-4 rounded-full bg-gradient-to-r ${gradient} bg-opacity-20`}
                >
                  <Icon className='w-12 h-12 text-white' strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className='relative z-10 text-center'>
                <h4 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
                  {title}
                </h4>
                <p className='text-gray-300'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
