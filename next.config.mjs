// next.config.mjs
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,  // Ignore TypeScript errors during build
    },
    eslint: {
      ignoreDuringBuilds: true, // Ignore ESLint errors during build
    },
  };
  
  export default nextConfig;
