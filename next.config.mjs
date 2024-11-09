// next.config.js
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true, // This will allow Next.js to build even with TypeScript errors
    },
    eslint: {
      ignoreDuringBuilds: true, // This will allow builds to pass even if there are ESLint errors
    },
  };
  
  module.exports = nextConfig;