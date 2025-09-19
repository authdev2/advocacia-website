import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  // Configuração base para JavaScript
  js.configs.recommended,
  
  // Configuração para arquivos Vue
  ...vue.configs['flat/recommended'],
  
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Globals do navegador
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        // Globals do Vue
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
      }
    },
    
    rules: {
      // Regras personalizadas
      'no-console': 'warn',                    // Aviso para console.log
      'no-unused-vars': 'error',               // Erro para variáveis não usadas
      'no-undef': 'error',                     // Erro para variáveis não definidas
      'semi': ['error', 'always'],             // Obrigatório ponto e vírgula
      'quotes': ['error', 'single'],           // Usar aspas simples
      'indent': ['error', 2],                  // Indentação de 2 espaços
      'comma-dangle': ['error', 'never'],      // Sem vírgula no final
      'object-curly-spacing': ['error', 'always'], // Espaços nas chaves
      'array-bracket-spacing': ['error', 'never'], // Sem espaços nos colchetes
      
      // Regras específicas do Vue
      'vue/multi-word-component-names': 'off',     // Permitir nomes de componente de uma palavra
      'vue/no-unused-vars': 'error',               // Variáveis não usadas no Vue
      'vue/no-multiple-template-root': 'off',      // Permitir múltiplas raízes no template
      'vue/html-self-closing': ['error', {         // Tags auto-fechantes
        'html': {
          'void': 'always',
          'normal': 'always',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }],
      'vue/max-attributes-per-line': ['error', {   // Máximo de atributos por linha
        'singleline': 3,
        'multiline': 1
      }],
      'vue/html-indent': ['error', 2],             // Indentação HTML
      'vue/component-definition-name-casing': ['error', 'PascalCase'] // Nomes de componente em PascalCase
    }
  },
  
  {
    // Configuração específica para arquivos de configuração
    files: ['*.config.js', 'vite.config.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    }
  },
  
  {
    // Ignorar arquivos
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.cache/',
      '.vite/',
      '*.log',
      '.DS_Store',
      'Thumbs.db',
      '*.tmp',
      '*.temp',
      '.env*'
    ]
  }
];
