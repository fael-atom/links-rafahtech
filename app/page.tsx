'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Facebook, Globe, MapPin, Mail, Book, BookAIcon, BookCheck, ArrowBigUpDash, Linkedin, TicketIcon, BookDashedIcon, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'Nosso site',
    url: 'https://rafahtech.com',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
    hoverColor: 'hover:from-cyan-600 hover:to-blue-700'
  },
  {
    name: 'Templates N8N',
    url: 'https://www.instagram.com/rafahtech',
    icon: LayoutDashboard,
    color: 'from-orange-500 to-orange-700',
    hoverColor: 'hover:from-orange-400 hover:to-orange-700'
  },
  {
    name: 'E-book Grátis: Seu Negócio com IA',
    url: 'https://rafahtech.com/ebook',
    icon: BookCheck,
    color: 'from-yellow-500 to-yellow-700',
    hoverColor: 'hover:from-yellow-600 hover:to-yellow-700'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5512991724072',
    icon: MessageCircle,
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rafahtech',
    icon: Instagram,
    color: 'from-pink-500 to-purple-600',
    hoverColor: 'hover:from-pink-600 hover:to-purple-700'
  },
  
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/rafahtech.oficial',
    icon: Facebook,
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@rafahtech.ai',
    icon: TicketIcon,
    color: 'from-black to-gray-700',
    hoverColor: 'hover:from-black hover:to-gray-800'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/rafahtech',
    icon: Linkedin,
    color: 'from-blue-400 to-blue-500',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800'
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

import type { Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100
    }
  }
};

const FloatingElement = ({ delay = 0, size = 'w-4 h-4', position = 'top-1/4 left-1/4' }) => (
  <motion.div
    className={`absolute ${position} ${size} bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-sm`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
    
    {/* Floating geometric elements */}
    <FloatingElement delay={0} size="w-6 h-6" position="top-1/4 left-1/4" />
    <FloatingElement delay={1} size="w-4 h-4" position="top-1/3 right-1/4" />
    <FloatingElement delay={2} size="w-8 h-8" position="bottom-1/3 left-1/3" />
    <FloatingElement delay={3} size="w-5 h-5" position="bottom-1/4 right-1/3" />
    <FloatingElement delay={4} size="w-3 h-3" position="top-1/2 left-1/2" />
    <FloatingElement delay={5} size="w-7 h-7" position="top-3/4 right-1/4" />
    
    {/* Animated gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-600/10"
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

const ProfileSection = () => (
  <motion.div
    className="text-center mb-12"
    variants={itemVariants}
  >
    <motion.div
      className="relative w-40 h-40 mx-auto mb-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1">
        <div className="w-full h-full bg-white rounded-full p-1">
          <Image
            src="/rafael.png"
            alt="Rafael Mota"
            width={152}
            height={152}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>
      </div>
      <motion.div
        className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-md"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-white mb-2"
      variants={itemVariants}
    >
      Rafael Mota
    </motion.h1>
    
    <motion.p
      className="text-xl text-blue-200 mb-4 font-medium"
      variants={itemVariants}
    >
      CEO & Founder
    </motion.p>
    
    <motion.div
      className="flex items-center justify-center text-cyan-300 mb-6"
      variants={itemVariants}
    >
      <Image
        src="/logo_rafahtech.png"
        alt="Rafah Tech"
        width={24}
        height={24}
        className="mr-2"
      />
      <span className="text-lg font-semibold">Rafah Tech</span>
    </motion.div>
    
    <motion.p
      className="text-gray-300 max-w-md mx-auto leading-relaxed"
      variants={itemVariants}
    >
      <span className="text-cyan-300 font-medium">
        Impulsionando negócios para o mundo digital
      </span>
      <br />
      Transformando ideias em soluções tecnológicas inovadoras.
      
    </motion.p>
  </motion.div>
);

type LinkButtonProps = {
  link: typeof socialLinks[number];
  index: number;
};

const LinkButton = ({ link, index }: LinkButtonProps) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      group relative w-full max-w-md mx-auto block p-4 rounded-2xl
      bg-gradient-to-r ${link.color} ${link.hoverColor}
      transform transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25
      active:scale-95
    `}
    variants={itemVariants}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center justify-center space-x-4">
      <link.icon className="w-6 h-6 text-white" />
      <span className="text-white font-semibold text-lg">{link.name}</span>
    </div>
    
    {/* Glow effect */}
    <motion.div
      className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={false}
    />
  </motion.a>
);

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          className="max-w-lg mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ProfileSection />
          
          <motion.div
            className="space-y-4"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <LinkButton key={link.name} link={link} index={index} />
            ))}
          </motion.div>
          
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Brasil</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@rafahtech.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}