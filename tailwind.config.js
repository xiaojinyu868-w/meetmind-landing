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
        // 主色-深蓝（标题、Logo、深色背景）
        navy: {
          DEFAULT: '#1E3B4D',
          light: '#2C4A5E',
          dark: '#0F2A3D',
          50: '#E8F4F8',
          100: '#D1E9F1',
        },
        // 主色-紫色（CTA按钮、强调）
        purple: {
          DEFAULT: '#6C5CE7',
          light: '#A29BFE',
          dark: '#5849C2',
          50: '#F3F2FF',
          100: '#E8E6FF',
          200: '#DCD6F7',
        },
        // 强调色-明黄（高亮、气泡、装饰）
        sunny: {
          DEFAULT: '#FFD93D',
          light: '#FFE66D',
          dark: '#F5C400',
          50: '#FFFBF0',
          100: '#FFF8E1',
          200: '#FFECB3',
        },
        // 强调色-暖橙（渐变、装饰）
        orange: {
          DEFAULT: '#FFAB5E',
          light: '#FFCC80',
          dark: '#FF9800',
        },
        // 辅助色-天空蓝（装饰、图标）
        sky: {
          DEFAULT: '#74C0FC',
          light: '#A5D8FF',
          dark: '#4DABF7',
          50: '#E7F5FF',
          100: '#D0EBFF',
        },
        // 辅助色-薄荷绿（成功、装饰）
        mint: {
          DEFAULT: '#A8E6CF',
          light: '#C3F0D8',
          dark: '#69D2A0',
          50: '#F0FFF4',
        },
        // 辅助色-珊瑚粉（装饰、点缀）
        coral: {
          DEFAULT: '#FF8A80',
          light: '#FFCDD2',
          dark: '#FF5252',
          50: '#FFF0F0',
        },
        // 背景色
        cream: {
          DEFAULT: '#FFFBF0',
          50: '#FFFFFF',
          100: '#FFFBF0',
          200: '#FFF5E6',
        },
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.10)',
        'card': '0 2px 12px rgba(108, 92, 231, 0.1)',
        'card-hover': '0 12px 32px rgba(108, 92, 231, 0.15)',
        'bubble': '0 4px 16px rgba(255, 217, 61, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
