import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [
      react(),
      visualizer({
        filename: 'stats.html',
        open: false,
      }),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000, // Increase chunk size warning limit to 1000 kB
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Vendor libraries
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'vendor_react';
              if (id.includes('lodash')) return 'vendor_lodash';
              if (id.includes('@heroicons')) return 'vendor_heroicons';
              if (id.includes('chart.js')) return 'vendor_chartjs';
              if (id.includes('d3')) return 'vendor_d3';
              if (id.includes('moment')) return 'vendor_moment';
              if (id.includes('xlsx')) return 'vendor_xlsx';
              if (id.includes('pdf')) return 'vendor_pdf';
              return 'vendor'; // Default fallback vendor chunk
            }

            // App-specific chunks (component/screens)
            if (id.includes('components/ChapterView')) return 'chapterview';
            if (id.includes('components/Quiz')) return 'quiz';
            if (id.includes('screens/StudentDashboard')) return 'studentdashboard';
            if (id.includes('screens/ParentDashboard')) return 'parentdashboard';
            if (id.includes('screens/PersonalizedPathScreen')) return 'personalizedpath';
          },
        },
      },
    },
  };
});
