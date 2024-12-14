// Import React and TailwindCSS

import FeaturesSection from "./FeaturesSection";

const AIAgentLanding = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      {/* Header Section */}
      <header className='bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-6'>
        <div className='container mx-auto flex justify-between items-center px-4'>
          <h1 className='text-4xl font-bold'>AI Agent</h1>
          <nav>
            <ul className='flex space-x-6'>
              <li>
                <a href='#features' className='hover:text-gray-300'>
                  Features
                </a>
              </li>
              <li>
                <a href='#rewards' className='hover:text-gray-300'>
                  Rewards
                </a>
              </li>
              <li>
                <a href='#community' className='hover:text-gray-300'>
                  Community
                </a>
              </li>
              <li>
                <a href='#get-started' className='hover:text-gray-300'>
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='text-center py-20 bg-black'>
        <div className='container mx-auto px-4'>
          <h2 className='text-5xl font-extrabold mb-6'>
            Revolutionize Engagement with Our Web3 AI Agent
          </h2>
          <p className='text-lg mb-10'>
            Interact with our AI agent on LinkedIn, Twitter (X), and Discord to
            earn exclusive rewards. Powered by Web3 for secure and transparent
            interactions.
          </p>
          <button className='px-8 py-4 bg-purple-600 hover:bg-purple-700 text-lg font-semibold rounded-full transition'>
            Get Started
          </button>
        </div>
      </section>


      <FeaturesSection />

      {/* Rewards Section */}
      <section id='rewards' className='py-20 bg-gray-900'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-4xl font-bold mb-12'>Rewards</h3>
          <p className='text-lg mb-8'>
            Interact, engage, and get rewarded with tokens that unlock exclusive
            benefits in our ecosystem.
          </p>
          <img
            src='/path-to-image/rewards-illustration.png'
            alt='Rewards'
            className='mx-auto max-w-lg rounded-lg'
          />
        </div>
      </section>

      {/* Community Section */}
      <section id='community' className='py-20 bg-gray-800'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-4xl font-bold mb-12'>Join the Community</h3>
          <p className='text-lg mb-8'>
            Connect with other users on our Discord, LinkedIn, and Twitter (X)
            platforms.
          </p>
          <div className='flex justify-center space-x-6'>
            <a href='http://x.com/page9885' className='text-2xl hover:text-gray-300'>
              🔗 X
            </a>
            <a
              href='http://t.me/dyor_da_degen_ai_bot'
              className='text-2xl hover:text-gray-300'
            >
              🐦 Telegram
            </a>
            <a
              href='https://discord.gg/ZQNTrCkx'
              className='text-2xl hover:text-gray-300'
            >
              💬 Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className='py-6 bg-black'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-sm text-gray-500'>
            © {new Date().getFullYear()} AI Agent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AIAgentLanding;
