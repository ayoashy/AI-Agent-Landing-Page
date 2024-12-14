// import { Zap, GitHub, Twitter, Linkedin } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       Icon: GitHub,
//       href: 'https://github.com/your-project',
//       color: 'hover:text-white',
//     },
//     {
//       Icon: Twitter,
//       href: 'https://twitter.com/your-handle',
//       color: 'hover:text-[#1DA1F2]',
//     },
//     {
//       Icon: Linkedin,
//       href: 'https://linkedin.com/company/your-company',
//       color: 'hover:text-[#0A66C2]',
//     },
//   ];

//   return (
//     <footer className='py-12 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white'>
//       <div className='container mx-auto px-4'>
//         <div className='flex flex-col items-center'>
//           {/* Logo and Brand */}
//           <div className='flex items-center mb-6'>
//             <Zap className='w-8 h-8 text-[#00ff87] mr-2' />
//             <span className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff87] to-[#00dbde]'>
//               InteractAI
//             </span>
//           </div>

//           {/* Social Links */}
//           <div className='flex space-x-6 mb-6'>
//             {socialLinks.map(({ Icon, href, color }, index) => (
//               <a
//                 key={index}
//                 href={href}
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className={`text-gray-400 transition-all duration-300 ${color}`}
//               >
//                 <Icon className='w-6 h-6 hover:scale-110 transition-transform' />
//               </a>
//             ))}
//           </div>

//           {/* Copyright and Links */}
//           <div className='text-center mb-6'>
//             <nav className='space-x-4 mb-4'>
//               <a
//                 href='/privacy'
//                 className='text-gray-300 hover:text-[#00ff87] transition-colors'
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href='/terms'
//                 className='text-gray-300 hover:text-[#00ff87] transition-colors'
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href='/docs'
//                 className='text-gray-300 hover:text-[#00ff87] transition-colors'
//               >
//                 Documentation
//               </a>
//             </nav>
//             <p className='text-sm text-gray-400'>
//               © {currentYear} InteractAI. All rights reserved.
//             </p>
//           </div>
//         </div>

//         {/* Subtle Background Effect */}
//         <div className='absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#00ff87] via-[#00dbde] to-[#00ff87] opacity-50'></div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
