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
              if (id.includes('three')) return 'vendor_three';
              if (id.includes('@mui')) return 'vendor_mui';
              if (id.includes('@material-ui')) return 'vendor_materialui';
              if (id.includes('react-bootstrap')) return 'vendor_bootstrap';
              if (id.includes('@emotion')) return 'vendor_emotion';
              if (id.includes('@chakra-ui')) return 'vendor_chakra';
              if (id.includes('@ant-design')) return 'vendor_antdesign';
              if (id.includes('@blueprintjs')) return 'vendor_blueprintjs';
              if (id.includes('@carbon')) return 'vendor_carbon';
              if (id.includes('@elastic')) return 'vendor_elastic';
              if (id.includes('@fluentui')) return 'vendor_fluentui';
              if (id.includes('@primer')) return 'vendor_primer';
              if (id.includes('@rebass')) return 'vendor_rebass';
              if (id.includes('@semantic-ui')) return 'vendor_semanticui';
              if (id.includes('@shopify')) return 'vendor_shopify';
              if (id.includes('@theme-ui')) return 'vendor_themeui';
              if (id.includes('@tiptap')) return 'vendor_tiptap';
              if (id.includes('@visx')) return 'vendor_visx';
              if (id.includes('@webix')) return 'vendor_webix';
              if (id.includes('@wix')) return 'vendor_wix';
              if (id.includes('@zendeskgarden')) return 'vendor_zendeskgarden';
              return 'vendor'; // Default fallback vendor chunk
            }

            // App-specific chunks (component/screens)
            if (id.includes('components/ChapterView')) return 'chapterview';
            if (id.includes('components/Quiz')) return 'quiz';
            if (id.includes('components/MissionQuiz')) return 'missionquiz';
            if (id.includes('components/DiagnosticTest')) return 'diagnostictest';
            if (id.includes('components/SubjectSelector')) return 'subjectselector';
            if (id.includes('screens/StudentDashboard')) return 'studentdashboard';
            if (id.includes('screens/ParentDashboard')) return 'parentdashboard';
            if (id.includes('screens/PersonalizedPathScreen')) return 'personalizedpath';
            if (id.includes('screens/TeacherDashboard')) return 'teacherdashboard';
            if (id.includes('screens/FAQScreen')) return 'faqscreen';
            if (id.includes('screens/LoginScreen')) return 'loginscreen';
            if (id.includes('screens/RoleSelector')) return 'roleselector';
            if (id.includes('components/LoadingSpinner')) return 'loadingspinner';
            if (id.includes('components/Confetti')) return 'confetti';
            if (id.includes('components/VideoSimulationPlayer')) return 'videosimulationplayer';
            if (id.includes('components/ConceptCard')) return 'conceptcard';
            if (id.includes('components/FittoAvatar')) return 'fittoavatar';
            if (id.includes('components/PracticeExercises')) return 'practiceexercises';
            if (id.includes('components/CognitiveExercise')) return 'cognitiveexercise';
            if (id.includes('components/GradeSelector')) return 'gradeselector';
            if (id.includes('components/Header')) return 'header';
            if (id.includes('components/IconMap')) return 'iconmap';
            if (id.includes('components/Logo')) return 'logo';
          },
        },
      },
    },
  };
});
