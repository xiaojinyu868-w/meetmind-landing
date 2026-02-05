import { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// 自定义字体
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&display=swap');
`;

export default function AINativeSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = fontStyles;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* 动态光效背景 */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* 网格背景 */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* 主内容 */}
      <div className="relative z-10">
        {/* 返回按钮 */}
        <button 
          onClick={() => window.location.href = '/'}
          className="fixed top-8 left-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors z-50 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm uppercase tracking-wider">返回首页</span>
        </button>

        {/* Hero 区域 */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] text-indigo-300">AI Native Organization</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              最能够最大化
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                利用AI快速发展的红利的组织
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              预判模型能力，提前构建"容器"，以小时级速度接入新模型红利。
              快速接入新模型获得流量，快速用上最新技术。
            </p>

            <div className="mt-12 flex justify-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-light text-indigo-400">小时级</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">接入新模型</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <p className="text-4xl font-light text-purple-400">容器化</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">预判承载</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <p className="text-4xl font-light text-pink-400">人+AI</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">&gt; AI</p>
              </div>
            </div>
          </div>
        </section>

        {/* 核心特点 */}
        <section className="py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden">
              {/* 左侧：容器战略 */}
              <div className="bg-[#0a0a0a] p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium">容器战略</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  AI 的红利是浪，我们的组织是船。
                  浪来则船高，顺势而行。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-gray-300">预判浪潮方向</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-gray-300">提前备好船舱</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-gray-300">风起即扬帆</span>
                  </div>
                </div>
              </div>

              {/* 右侧：人+AI &gt; AI */}
              <div className="bg-[#0a0a0a] p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium">人 + AI &gt; AI</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  人专注于那些只有人能触及的领域。
                  其余的，交给流动的智能。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-gray-300">人的独特价值</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-gray-300">AI 的无限延伸</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-gray-300">极小团队，极大可能</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 原子能力 */}
        <section className="py-24 px-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light mb-4">原子能力构建</h2>
              <p className="text-gray-400">不是提供预制功能，而是提供可灵活组合的原子能力</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { name: 'OCR 识别', desc: '板书提取', color: 'from-blue-400 to-cyan-400' },
                { name: '声纹分离', desc: '主讲提取', color: 'from-cyan-400 to-teal-400' },
                { name: '情绪识别', desc: '状态感知', color: 'from-teal-400 to-green-400' },
                { name: '知识图谱', desc: '关联构建', color: 'from-green-400 to-emerald-400' },
                { name: '时序定位', desc: '精准回溯', color: 'from-emerald-400 to-yellow-400' },
                { name: '变式生成', desc: '练习构建', color: 'from-yellow-400 to-orange-400' },
                { name: '复习策略', desc: '遗忘曲线', color: 'from-orange-400 to-red-400' },
                { name: 'Agent 组装', desc: '动态编排', color: 'from-red-400 to-pink-400' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-[#0a0a0a] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`} />
                  <h4 className="text-lg font-medium mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 底部总结 */}
        <section className="py-24 px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-light text-gray-300 mb-6">
              我们不生产大模型，我们是 AI 进化红利的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> 最佳容器</span>
            </p>
            <p className="text-gray-500">
              模型越强，我们越强。我们构建的"上下文语境"壁垒，能承载任何先进模型。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
