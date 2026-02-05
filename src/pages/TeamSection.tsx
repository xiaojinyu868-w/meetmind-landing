import { useState, useEffect } from 'react';
import { Quote, ArrowLeft } from 'lucide-react';

// 自定义字体加载
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
`;

interface TeamMember {
  id: string;
  name: string;
  role: string;
  school: string;
  title: string;
  quote: string;
  background: string[];
  superpower: string;
  color: string;
  bgGradient: string;
}

const teamData: TeamMember[] = [
  {
    id: 'founder',
    name: '李浩',
    role: 'CEO',
    school: '清华',
    title: '产品负责人',
    quote: '清华计算机硕士，研究方向为多模态视频理解。学术背景融合技术与社会科学，致力于用大模型技术解决教育场景中的信息不对称问题。',
    background: ['清华计算机硕士', '多模态视频理解', '大模型+社会科学交叉研究'],
    superpower: '在技术可行性与教育需求之间建立桥梁',
    color: '#d4a574',
    bgGradient: 'from-[#2a2420] to-[#1a1612]',
  },
  {
    id: 'cto',
    name: '陈子康',
    role: 'CTO',
    school: '清华',
    title: '技术负责人',
    quote: '清华计算机硕士。专注于技术架构与AI能力落地，负责将产品需求拆解为可实现的技术方案，并判断技术趋势的长期价值。',
    background: ['清华计算机硕士', 'Agentic Search架构', 'LLM应用开发'],
    superpower: '预判技术趋势，构建可扩展的技术架构',
    color: '#7c9cb4',
    bgGradient: 'from-[#1e252d] to-[#131820]',
  },
  {
    id: 'cfo',
    name: '朱春兮',
    role: 'CFO',
    school: '北大汇丰',
    title: '增长与财务',
    quote: '北大汇丰硕士。具备财务规划与商业增长的双重能力，拥有内容运营实战经验与供应链资源，负责构建可持续的商业闭环。',
    background: ['北大汇丰硕士', '内容运营与增长', '供应链整合'],
    superpower: '财务规划、低成本获客与供应链整合',
    color: '#8fb996',
    bgGradient: 'from-[#1f2821] to-[#141a15]',
  },
];

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState<string>('founder');
  const [isAnimating, setIsAnimating] = useState(false);

  const activeData = teamData.find(m => m.id === activeMember) || teamData[0];

  const handleSwitch = (id: string) => {
    if (id === activeMember) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveMember(id);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = fontStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#0c0c0c] text-white overflow-hidden"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* 背景纹理 */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 主容器 */}
      <div className="relative min-h-screen flex flex-col">
        
        {/* 顶部标题区 - 杂志风格 */}
        <header className="pt-8 pb-8 px-8 md:px-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            {/* 返回按钮 */}
            <button 
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>返回首页</span>
            </button>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  MeetMind Team
                </p>
                <h1 className="text-6xl md:text-8xl font-normal tracking-tight">
                  核心<span className="italic text-white/60">团队</span>
                </h1>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-sm text-white/50 max-w-xs leading-relaxed">
                  三种背景，一种使命
                </p>
                <p className="text-xs text-white/30 mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  NO.01 / 2025
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* 主体内容 - 编辑风格网格 */}
        <main className="flex-1 px-8 md:px-16 py-12">
          <div className="max-w-7xl mx-auto h-full">
            <div className="grid grid-cols-12 gap-8 h-full">
              
              {/* 左侧：人物选择器 - 竖排标签 */}
              <div className="col-span-12 md:col-span-2 flex md:flex-col gap-4 border-r border-white/10 pr-8">
                {teamData.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => handleSwitch(member.id)}
                    className={`group text-left transition-all duration-500 ${
                      activeMember === member.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeMember === member.id ? 'scale-100' : 'scale-50'
                        }`}
                        style={{ backgroundColor: member.color }}
                      />
                      <div>
                        <p className="text-lg font-normal">{member.name}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {member.role}
                        </p>
                      </div>
                    </div>
                    {activeMember === member.id && (
                      <div 
                        className="h-px mt-3 w-full origin-left animate-expand"
                        style={{ backgroundColor: member.color }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* 中间：主要内容区 */}
              <div className="col-span-12 md:col-span-7 relative">
                <div 
                  className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                >
                  {/* 大数字序号 */}
                  <div className="absolute -top-4 -left-4 text-[12rem] font-bold text-white/[0.03] leading-none pointer-events-none select-none">
                    0{teamData.findIndex(m => m.id === activeMember) + 1}
                  </div>

                  {/* 角色标签 */}
                  <div className="mb-8">
                    <span 
                      className="inline-block px-4 py-2 text-xs uppercase tracking-[0.3em] border rounded-full"
                      style={{ 
                        borderColor: `${activeData.color}40`,
                        color: activeData.color,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}
                    >
                      {activeData.title}
                    </span>
                  </div>

                  {/* 引用语 - 杂志风格大引号 */}
                  <div className="relative mb-12">
                    <Quote 
                      className="absolute -top-4 -left-2 w-16 h-16 opacity-10" 
                      style={{ color: activeData.color }}
                    />
                    <blockquote className="text-3xl md:text-4xl font-normal leading-relaxed pl-8 border-l-2" style={{ borderColor: activeData.color }}>
                      <span className="italic">{activeData.quote}</span>
                    </blockquote>
                  </div>

                  {/* 背景信息 - 编辑风格列表 */}
                  <div className="mb-12">
                    <h3 
                      className="text-xs uppercase tracking-[0.3em] mb-4 text-white/40"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      背景
                    </h3>
                    <ul className="space-y-3">
                      {activeData.background.map((item, idx) => (
                        <li key={idx} className="text-lg text-white/80 flex items-start gap-3">
                          <span className="text-xs mt-2" style={{ color: activeData.color }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-base text-white/60">
                        <span className="text-white/40">在团队中的价值：</span>
                        <span style={{ color: activeData.color }}>{activeData.superpower}</span>
                      </p>
                    </div>
                  </div>

                  {/* 装饰性几何图形 */}
                  <div className="flex gap-4 items-end">
                    <div 
                      className="w-32 h-32 border opacity-20"
                      style={{ borderColor: activeData.color }}
                    />
                    <div 
                      className="w-16 h-48 opacity-10"
                      style={{ backgroundColor: activeData.color }}
                    />
                    <div 
                      className="w-24 h-24 rounded-full border-2 opacity-15"
                      style={{ borderColor: activeData.color }}
                    />
                  </div>
                </div>
              </div>

              {/* 右侧：视觉装饰区 */}
              <div className="col-span-12 md:col-span-3 relative">
                <div 
                  className={`h-full rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 bg-gradient-to-br ${activeData.bgGradient} border border-white/5`}
                >
                  {/* 顶部：首字母大图标 */}
                  <div className="relative">
                    <span 
                      className="text-[8rem] font-bold leading-none opacity-20"
                      style={{ color: activeData.color }}
                    >
                      {activeData.name[0]}
                    </span>
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold"
                      style={{ 
                        backgroundColor: `${activeData.color}20`,
                        color: activeData.color,
                        border: `1px solid ${activeData.color}40`
                      }}
                    >
                      {activeData.school[0]}
                    </div>
                  </div>

                  {/* 底部：学校标签 */}
                  <div>
                    <p 
                      className="text-xs uppercase tracking-[0.3em] text-white/40 mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      背景
                    </p>
                    <p className="text-2xl font-normal">{activeData.school}</p>
                  </div>

                  {/* 装饰线 */}
                  <div 
                    className="absolute top-8 right-8 w-px h-24 opacity-30"
                    style={{ backgroundColor: activeData.color }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* 底部：黄金三角图示 */}
        <footer className="px-8 md:px-16 py-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-white/50 text-lg">
              两个清华计算机硕士 + 一个北大汇丰硕士
            </p>
            <p className="text-center text-white/30 text-sm mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              有人懂技术实现，有人懂用户需求，有人懂财务和增长
            </p>
          </div>
        </footer>
      </div>

      {/* CSS 动画 */}
      <style>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          animation: expand 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
