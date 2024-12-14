import { Zap, Network, Cpu, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className='relative overflow-hidden text-center py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]'>
      {/* Floating Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-[#00ff87]/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00dbde]/10 rounded-full blur-3xl animate-pulse delay-500'></div>
      </div>

      <div className='container relative z-10 mx-auto px-4'>
        {/* Platform Icons */}
        <div className='flex justify-center mb-8 space-x-6'>
          <div className='p-3 bg-[#16213e] rounded-full border border-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all'>
            <Zap className='w-8 h-8 text-[#00ff87]' />
          </div>
          <div className='p-3 bg-[#16213e] rounded-full border border-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all'>
            <Network className='w-8 h-8 text-[#00ff87]' />
          </div>
          <div className='p-3 bg-[#16213e] rounded-full border border-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all'>
            <Cpu className='w-8 h-8 text-[#00ff87]' />
          </div>
        </div>

        {/* Hero Content */}
        <h2 className='text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
          Revolutionize Engagement with Our Web3 AI Agent
        </h2>
        <p className='text-xl mb-10 text-gray-300 max-w-3xl mx-auto'>
          Interact seamlessly across LinkedIn, Twitter (X), and Discord to earn
          exclusive rewards. Our AI-powered, Web3-native platform ensures
          secure, transparent, and rewarding social interactions.
        </p>

        {/* Call to Action */}
        <div className='flex justify-center space-x-4'>
          <button className='flex items-center px-8 py-4 bg-[#00ff87] text-black hover:bg-opacity-90 text-lg font-semibold rounded-full transition transform hover:scale-105'>
            <Rocket className='mr-2 w-6 h-6' />
            Get Started
          </button>
          <button className='flex items-center px-8 py-4 border border-[#00ff87] text-[#00ff87] hover:bg-[#00ff87] hover:text-black text-lg font-semibold rounded-full transition transform hover:scale-105'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
