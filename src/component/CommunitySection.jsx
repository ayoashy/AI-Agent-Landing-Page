import {
  Users,
  Twitter,
  Linkedin,
  Disc,
  MessageCircle,
  Globe,
} from 'lucide-react';

const CommunitySection = () => {
  const socialPlatforms = [
    {
      name: 'Twitter (X)',
      icon: Twitter,
      link: 'http://x.com/page9885',
      color: 'from-[#1DA1F2] to-[#0077B5]',
    },
    {
      name: 'Discord',
      icon: Disc,
      link: 'https://discord.gg/ZQNTrCkx',
      color: 'from-[#5865F2] to-[#404EED]',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://linkedin.com/company/...',
      color: 'from-[#0A66C2] to-[#0077B5]',
    },
  ];

  return (
    <section
      id='community'
      className='py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white'
    >
      <div className='container mx-auto px-4 text-center'>
        <div className='mb-16'>
          <div className='flex justify-center mb-6'>
            <Users className='w-12 h-12 text-[#00ff87]' />
          </div>
          <h3 className='text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
            Join Our Global Community
          </h3>
          <p className='text-xl mb-8 text-gray-300 max-w-2xl mx-auto'>
            Connect, collaborate, and grow with a vibrant community of AI and
            Web3 enthusiasts. Engage across multiple platforms to unlock unique
            insights and opportunities.
          </p>
        </div>

        {/* Social Platforms */}
        <div className='grid md:grid-cols-3 gap-8'>
          {socialPlatforms.map(({ name, icon: Icon, link, color }, index) => (
            <a
              key={index}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <div className='relative group p-6 bg-[#16213e] rounded-2xl border border-[#00ff87]/20 hover:border-[#00ff87]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl'>
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
                <div className='relative z-10 text-center'>
                  <h4 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
                    {name}
                  </h4>
                  <p className='text-gray-300'>
                    Connect and engage with our community
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Community Benefits */}
        <div className='mt-16 bg-[#16213e] rounded-2xl p-8 max-w-4xl mx-auto border border-[#00ff87]/20'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <MessageCircle className='w-10 h-10 text-[#00ff87]' />
              <span className='text-xl font-semibold'>
                Real-time Discussions
              </span>
            </div>
            <div className='flex items-center space-x-4'>
              <Globe className='w-10 h-10 text-[#00ff87]' />
              <span className='text-xl font-semibold'>Global Network</span>
            </div>
            <div className='flex items-center space-x-4'>
              <Users className='w-10 h-10 text-[#00ff87]' />
              <span className='text-xl font-semibold'>
                Collaborative Growth
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
