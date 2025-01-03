import { defineConfig } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier-terser';  // Импортируем плагин для минификации HTML

export default defineConfig({
  base: './',  // Устанавливаем относительный путь, чтобы все ресурсы подключались правильно
  build: {
    outDir: 'dist',  // Папка, куда будет собираться проект
    rollupOptions: {
      input: {
        index: './pages/index.html',  // Главная страница
        transportation: './pages/transportation.html',  // Страница транспортировки
        contacts: './pages/contacts.html',  // Страница контактов
        technics: './pages/technics.html',  // Страница с техникой
        policy: './pages/policy.html',  // Страница с техникой
      },
    },
    minify: 'terser',  // Включаем минификацию через terser
    terserOptions: {
      compress: {
        drop_console: true, // Убирает console.log в продакшн
      },
    },
    assetsDir: '',  // Убираем префикс assets в именах файлов
    chunkFileNames: '[name].js',  // Сохраняем оригинальные имена для чанков JS
    entryFileNames: '[name].js',  // Сохраняем оригинальные имена для точек входа JS
    assetFileNames: '[name][extname]',  // Сохраняем оригинальные имена для изображений и других ассетов
  },
  plugins: [
    htmlMinifier({
      minifyCSS: true,   // Минифицировать CSS
      minifyJS: true,    // Минифицировать JS
      removeComments: true,  // Удалять комментарии
      collapseWhitespace: true,  // Убирает лишние пробелы и переносы строк
      removeAttributeQuotes: true,  // Убирает кавычки из атрибутов, если они не обязательны
      removeScriptTypeAttributes: true,  // Убирает type="module" у скриптов
      collapseBooleanAttributes: true,  // Убирает булевые атрибуты, например `checked` вместо `checked="checked"`
    }),
  ],
  server: {
    open: true,  // Автоматически открывать браузер при запуске
  },
});
