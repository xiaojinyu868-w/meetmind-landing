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
        // 主强调色-明黄（CTA按钮、高亮、气泡）
        sunny: {
          DEFAULT: '#FFD93D',
          light: '#FFE66D',
          dark: '#F5C400',
          50: '#FFFBF0',
          100: '#FFF8E1',
          200: '#FFECB3',
        },
        // 强调色-暖橙（渐变、hover状态）
        orange: {
          DEFAULT: '#FF9F43',
          light: '#FFBE76',
          dark: '#E17D21',
        },
        // 辅助色-天空蓝（装饰、图标、卡片）
        sky: {
          DEFAULT: '#74C0FC',
          light: '#A5D8FF',
          dark: '#4DABF7',
          50: '#E7F5FF',
          100: '#D0EBFF',
        },
        // 辅助色-薄荷绿（成功、装饰）
        mint: {
          DEFAULT: '#69D2A0',
          light: '#A8E6CF',
          dark: '#38C87A',
          50: '#E8FFF3',
        },
        // 辅助色-珊瑚粉（装饰、点缀）
        coral: {
          DEFAULT: '#FF8A80',
          light: '#FFCDD2',
          dark: '#FF5252',
          50: '#FFF0F0',
        },
        // 辅助色-淡紫（轻装饰）
        lavender: {
          DEFAULT: '#B8A9FF',
          light: '#DCD6F7',
          50: '#F5F3FF',
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
        'card': '0 2px 12px rgba(255, 159, 67, 0.15)',
        'card-hover': '0 12px 32px rgba(255, 159, 67, 0.20)',
        'bubble': '0 4px 16px rgba(255, 217, 61, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
