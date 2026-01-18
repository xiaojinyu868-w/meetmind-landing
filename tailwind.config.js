/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色调 - 深海蓝（参考图片）
        primary: {
          DEFAULT: '#1E3A5F',
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        // 温暖橙色 - CTA按钮（更鲜明）
        warm: {
          DEFAULT: '#FF6B35',
          50: '#FFF4E6',
          100: '#FFE8CC',
          200: '#FFD8A8',
          300: '#FFC078',
          400: '#FFA94D',
          500: '#FF8C42',
          600: '#FF6B35',
          700: '#F25C28',
          800: '#E8590C',
          900: '#D9480F',
        },
        // 明亮黄色 - 气泡/装饰背景（参考图片核心色）
        sunny: {
          DEFAULT: '#FFD93D',
          light: '#FFF8DC',
          lighter: '#FFFBEB',
          bg: '#FFF9E6',
          dark: '#F5C400',
        },
        // 温柔粉色 - 装饰
        blush: {
          DEFAULT: '#FF8FAB',
          light: '#FFE4EC',
          bg: '#FFF0F3',
          dark: '#E64980',
        },
        // 清新绿色 - 成功/积极
        fresh: {
          DEFAULT: '#4ADE80',
          light: '#DCFCE7',
          bg: '#F0FDF4',
          dark: '#22C55E',
        },
        // 浅蓝色 - 装饰
        sky: {
          DEFAULT: '#38BDF8',
          light: '#E0F2FE',
          bg: '#F0F9FF',
          dark: '#0EA5E9',
        },
        // 深蓝色 - Footer/深色背景
        navy: {
          DEFAULT: '#1E3A5F',
          light: '#2C4A6E',
          dark: '#0F2744',
        },
        // 米白/奶油色背景
        cream: {
          DEFAULT: '#FFFDF7',
          50: '#FFFEFB',
          100: '#FFFDF7',
          200: '#FFF9E6',
        },
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 12px rgba(59, 91, 219, 0.1)',
        'card-hover': '0 8px 24px rgba(59, 91, 219, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
