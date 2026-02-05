import { useState } from 'react';
import { 
  Cpu, Zap, ChevronRight, Shield, Users, 
  Target, Building2, GraduationCap, Lightbulb, 
  CheckCircle2, Lock, BarChart3, School, ArrowRight,
  Box, Hexagon, Quote,
  Mic, WifiOff, Home, MessageSquare, Clock,
  ArrowLeft, Globe, Brain, Bot, BookOpen, User, Link2, Scale,
  AlertCircle, Sparkles
} from 'lucide-react';

interface QADetailProps {
  categoryId: string | null;
  questionId: string | null;
  onBackToList: () => void;
  onBackToHome: () => void;
}

// 高亮文本
function Highlight({ children, color = 'amber' }: { children: React.ReactNode; color?: 'amber' | 'blue' | 'green' | 'red' | 'purple' | 'cyan' | 'pink' }) {
  const colors = {
    amber: 'text-amber-400 font-semibold',
    blue: 'text-blue-400 font-semibold',
    green: 'text-green-400 font-semibold',
    red: 'text-red-400 font-semibold',
    purple: 'text-purple-400 font-semibold',
    cyan: 'text-cyan-400 font-semibold',
    pink: 'text-pink-400 font-semibold'
  };
  return <span className={colors[color]}>{children}</span>;
}

// 引用块
function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#1a1a1a] border-l-4 border-amber-500 p-6 my-6 rounded-r-xl">
      <Quote className="absolute top-4 left-4 h-8 w-8 text-amber-500/20" />
      <p className="text-lg text-gray-300 leading-relaxed pl-8 italic">{children}</p>
    </div>
  );
}

export default function QADetail({ categoryId, questionId, onBackToList, onBackToHome }: QADetailProps) {
  const [activeTab, setActiveTab] = useState(0);

  // 判断当前显示哪个问题
  const isQ1 = categoryId === 'strategy' && questionId === 'q1-1';
  const isQ2 = categoryId === 'barrier' && questionId === 'q2-1';
  const isQ2Team = categoryId === 'barrier' && questionId === 'q2-2';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBackToHome}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium hidden sm:inline">首页</span>
            </button>
            <div className="h-4 w-px bg-gray-700" />
            <button 
              onClick={onBackToList}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Q&A 目录
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">{isQ1 ? '01' : isQ2 ? '02' : isQ2Team ? '02-2' : '--'} / 05</span>
            <span className="font-semibold hidden sm:inline">投资人问答</span>
          </div>
          
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section - Q1 */}
      {isQ1 && (
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <span className="text-amber-500 text-sm font-medium tracking-[0.3em] uppercase mb-6 block">
            Q1 · Strategic Challenge
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            公立校对电子设备管控极严，
            <br />
            <span className="text-gray-500">你们如何解决</span>
            <span className="text-amber-400">"进校难"</span>
            <span className="text-gray-500">和</span>
            <span className="text-amber-400">"合规录音"</span>
            <span className="text-gray-500">的问题？</span>
          </h1>
          
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 pl-8 py-8 pr-6 rounded-r-2xl">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              我们利用<Highlight>"分体式时空解耦"</Highlight>架构，以<Highlight>"智能文具"</Highlight>定义突破校园的物理准入壁垒；通过<Highlight>"AI 助教"</Highlight>的利他价值换取老师的数据共建，从而打通从<Highlight>"校内无感采集"</Highlight>到<Highlight>"家庭个性化应用"</Highlight>的完整闭环。
            </p>
          </div>
        </div>
      </section>
      )}

      {/* Hero Section - Q2 */}
      {isQ2 && (
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-500 text-sm font-medium tracking-[0.3em] uppercase mb-6 block">
            Q2 · Competitive Barrier
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            项目的壁垒在哪里？
            <br />
            <span className="text-gray-500">为什么是</span>
            <span className="text-blue-400">我们</span>
            <span className="text-gray-500">来做？</span>
          </h1>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border-l-4 border-blue-500 pl-8 py-8 pr-6 rounded-r-2xl">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              我们的壁垒不是"模型"，而是<Highlight color="blue">"语境（Context）"</Highlight>。通过极致实用的工具功能切入高频场景，在长期的使用过程中沉淀大量<Highlight color="blue">私有上下文数据</Highlight>，形成<Highlight color="blue">不可迁移的粘性</Highlight>。即使 AGI 到来，通用 AI 也无法取代一个"全程陪同你上课、最懂你知识薄弱点"的数字化记忆系统。
            </p>
          </div>
        </div>
      </section>
      )}

      {/* Hero Section - Q2-2: 团队基因 */}
      {isQ2Team && (
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-500 text-sm font-medium tracking-[0.3em] uppercase mb-6 block">
            Q2-2 · Team & DNA
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
            为什么是你们？
            <br />
            <span className="text-gray-500">团队构建与组织</span>
            <span className="text-blue-400">基因</span>
            <span className="text-gray-500">的独特之处</span>
          </h1>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border-l-4 border-blue-500 pl-8 py-8 pr-6 rounded-r-2xl">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              我们的核心优势在于<Highlight color="blue">"结构合理性"</Highlight>与<Highlight color="blue">"组织先进性"</Highlight>的双重叠加。我们不仅拥有<Highlight color="blue">"清北+北师大"</Highlight>的黄金三角配置，更是一支基于<Highlight color="blue">"双原生（AI Native + Agile Native）"</Highlight>理念打造的进化型组织。
            </p>
          </div>
        </div>
      </section>
      )}

      {/* Q1 内容 */}
      {isQ1 && (
      <>
      {/* 硬件形态 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">1. 硬件形态与技术底层支撑</h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl">
            我们通过分体式的硬件设计与针对性的底层算法，解决了<Highlight>"进不去教室"</Highlight>和<Highlight>"录不清楚"</Highlight>这两个行业核心痛点。
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 采集胶囊 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                  <Box className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">采集胶囊</h3>
                  <p className="text-blue-400 text-sm">校内端</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">极致去敏与准入：</strong>这是一枚极致轻量的智能文具，<Highlight color="blue">不带屏幕、不具备游戏和社交功能、无实时通讯模块</Highlight>。它在物理上彻底剥离了电子产品的成瘾性与干扰性，不属于受控移动终端，而是完全符合规定的辅助学习工具。</p>
                <p><strong className="text-white">专注采集：</strong>采集胶囊专注于教室内的远场拾音。孩子佩戴或摆放后无需任何复杂操作，即可在嘈杂环境下精准锁定老师音轨，实现<Highlight color="blue">无感化的数据捕捉</Highlight>。</p>
                <p><strong className="text-white">时空解耦：</strong>采集胶囊在校内采取<Highlight color="blue">单机静默存储，不联网、不传输</Highlight>。这种时空解耦的设计，既保证了校内数据的绝对安全，也实现了"校内记录、回家分析"的逻辑一致性。</p>
              </div>
            </div>

            {/* 伴学基座 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Hexagon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">伴学基座</h3>
                  <p className="text-amber-400 text-sm">家庭端</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">交互与回流中心：</strong>这是一个带有屏幕的智能交互终端。孩子放学回家后，将采集胶囊插入基座（或通过靠近自动连接无线网络），<Highlight color="amber">校内数据会瞬间回流至基座</Highlight>。</p>
                <p><strong className="text-white">生态闭环：</strong>基座不仅负责充电和存储，更重要的是通过内置的人工智能操作系统，结合基于原生数据的应用矩阵，将非结构化的语音转化为个性化辅导内容，<Highlight color="amber">形成闭环体验</Highlight>。</p>
              </div>
            </div>
          </div>

          {/* 时空解耦可视化 */}
          <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
            <h3 className="text-xl font-semibold mb-6 text-center">时空解耦架构示意</h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-center">
                <div className="h-20 w-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">
                  <School className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">校内场景</p>
                <p className="text-xs text-blue-400">无网采集</p>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-600" />
              <div className="text-center">
                <div className="h-20 w-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-amber-500">
                  <Box className="h-8 w-8 text-amber-400" />
                </div>
                <p className="text-sm text-gray-400">物理转移</p>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-600" />
              <div className="text-center">
                <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-green-500">
                  <Home className="h-8 w-8 text-green-400" />
                </div>
                <p className="text-sm text-gray-400">家庭场景</p>
                <p className="text-xs text-green-400">AI分析应用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术底层 */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">技术底层：锁定老师音轨</h2>

          <p className="text-lg text-gray-400 mb-12">
            针对教室内远场、高噪音、高回声的极复杂环境，我们从软硬件两个维度确保了<Highlight>"录得清"</Highlight>与<Highlight>"算得准"</Highlight>：
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Mic className="h-6 w-6 text-blue-400" />
                声纹识别分离技术
              </h3>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">多麦克风阵列：</strong>采集胶囊集成了先进的麦克风阵列，具备强大的远场拾音能力。</p>
                <p><strong className="text-white">预锁定机制：</strong>核心的人工智能引擎会在初始化阶段锁定主讲老师的声纹特征。即便在<Highlight color="blue">40人以上的嘈杂教室</Highlight>中，系统也能精准提取老师的主讲音轨，自动过滤掉周围同学的交谈声、桌椅摩擦声等杂音。</p>
              </div>
            </div>

            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Lock className="h-6 w-6 text-green-400" />
                数据确权与知识产权保护
              </h3>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">结构化摘要：</strong>原始音频在基座端被转化为结构化的知识摘要后，系统可设置<Highlight color="green">定时自动销毁原始文件</Highlight>。</p>
                <p><strong className="text-white">底层保护：</strong>这种处理方式从底层逻辑上<Highlight color="green">保护了老师授课的知识产权</Highlight>，确保数据仅用于个人的学习分析，而非原始录音的二次传播。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心壁垒：AGI时代的语境垄断 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">核心壁垒：如果 AGI 注定到来，我们的生存空间在哪里？</h2>
          
          <div className="bg-gradient-to-r from-amber-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-amber-500/30 mb-12">
            <QuoteBlock>
              我们的壁垒不是"模型"，而是<Highlight>"语境（Context）"</Highlight>。如果超级智能的到来不可避免，那么未来最稀缺的资源不再是"解题能力"，而是对<Highlight>"多样化人类价值函数"</Highlight>的深度理解——即准确把握人类在具体语境下真正需要什么。
            </QuoteBlock>
          </div>

          {/* 1. 破局路径 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">破局路径：以"实用工具"为钩子，构建"语境垄断"</h3>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <p className="text-gray-400 leading-relaxed mb-8">
                我们不奢望用户为了"贡献数据"而使用产品。<Highlight>壁垒是用户在中长期使用过程中自然留存的结果</Highlight>：
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">工具作为"钩子"</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">通过极致实用的功能（如"课堂录音"、"精选回顾"、"AI智能复习"）切入用户的每日高频场景，解决即时痛点。</p>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="h-10 w-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">语境的"沉淀"与"留存"</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">随着用户持续使用分体式硬件记录课堂和学习过程，系统内沉淀了大量属于该个体的、非结构化的<Highlight>私有上下文</Highlight>。</p>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">不可迁移的粘性</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">这种壁垒是"长"出来的。用户使用时间越长，AI 对其认知断点、老师教学风格、个人习惯的理解就越深。即使未来出现更强大的通用 AI，它也无法取代一个<Highlight color="green">"全程陪同你上课、最懂你知识薄弱点"</Highlight>的数字化记忆系统。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. 核心洞察 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">核心洞察：从"通用智能"转向"私有语境"</h3>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-950/20 rounded-xl p-6 border border-red-900/50">
                  <h4 className="text-red-400 font-semibold mb-4">通用 AI 的局限</h4>
                  <p className="text-gray-400 leading-relaxed">通用大模型（如豆包、元宝）拥有海量的"世界知识"，但它们<Highlight color="red">无法进入物理课堂</Highlight>，永远缺乏<Highlight color="red">"私有上下文数据"</Highlight>。</p>
                </div>
                
                <div className="bg-green-950/20 rounded-xl p-6 border border-green-900/50">
                  <h4 className="text-green-400 font-semibold mb-4">我们的优势</h4>
                  <p className="text-gray-400 leading-relaxed">竞品在回答"是什么（What）"，我们在理解<Highlight color="green">"你（Who）"</Highlight>和<Highlight color="green">"如何教你（How）"</Highlight>。</p>
                </div>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-gray-500 text-sm mb-2">通用 AI</h5>
                    <p className="text-gray-400 italic">"勾股定理的定义是：在直角三角形中，两条直角边的平方和等于斜边的平方..."</p>
                    <p className="text-red-400/70 text-sm mt-2">—— 标准化的、教科书式的回答</p>
                  </div>
                  <div>
                    <h5 className="text-amber-400 text-sm mb-2">MeetMind</h5>
                    <p className="text-white italic">"王老师今天上午讲梯子靠墙那个例子时，特别强调了'地面是否水平'这个易错点，还展示了3种常见错误解法..."</p>
                    <p className="text-green-400/70 text-sm mt-2">—— 专属的、课堂原生的回放</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 战略终局 */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">战略终局：掌握"人类价值函数"的最后 1 公里</h3>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                这是一个关于 AI 未来的核心命题：<Highlight>当计算力与知识变得廉价，什么才是昂贵的？</Highlight>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">把握真实需求</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">在 AGI 时代，最紧要的任务是准确把握人类真正需要什么。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">理解"人"</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">每一个学生、每一位老师的价值函数都是多样且独特的。通过深耕"课堂原生语境"，我们不仅在做教育，更是在捕捉人类在具体学习场景下的反馈与意图。</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 pl-6 py-4 rounded-r-xl">
                <p className="text-gray-200 leading-relaxed">
                  <strong className="text-white">结论：</strong>我们通过硬件进入物理世界，拿到了通往<Highlight>"人类真实价值函数"</Highlight>的独家门票。这种对<Highlight>"人类语境"</Highlight>的理解能力，是我们面对大厂和通用 AI 时最宽的护城河。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商业策略 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">商业策略的"特洛伊木马"</h2>

          <QuoteBlock>
            进校的核心阻力在老师。我们的产品是为老师提供价值，逻辑核心在于"利他"。
          </QuoteBlock>

          <h3 className="text-lg font-semibold mb-6 text-gray-300">AI 工具为老师提供的价值：</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { title: '提效', content: '胶囊采集的数据经过脱敏后，会为老师生成自动教研报告、课堂重点摘要等内容，帮助老师借助AI工具提高效率', icon: Zap },
              { title: '减负', content: '系统自动将脱敏后的课堂数据转化为教研报告、课堂重点摘要等结构化内容，极大减少老师准备教案、回复家长咨询的时间', icon: Clock },
              { title: '反馈', content: '老师能从系统中获得真实的课堂反馈，像一个面试官一样提供改进建议，辅助老师优化教学方案', icon: MessageSquare },
              { title: '无心理负担', content: '系统具备自动剔除功能，识别并过滤非教学对话，家长收到的是"认知切片"而非完整录音', icon: Shield },
            ].map((item, i) => (
              <div key={i} className="bg-[#111] rounded-2xl p-6 border border-gray-800">
                <div className="h-8 w-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-sm mb-4">{i + 1}</div>
                <item.icon className="h-6 w-6 text-amber-500 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.content}</p>
              </div>
            ))}
          </div>

          {/* B2B2C 飞轮 */}
          <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 mb-8">
            <h3 className="text-xl font-semibold mb-8 text-center">B2B2C 杠杆：Teacher First 策略</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center">
                <div className="h-20 w-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">先行占位</h4>
                <p className="text-sm text-gray-400">赠送老师AI助教系统</p>
              </div>
              <ArrowRight className="h-8 w-8 text-amber-500" />
              <div className="text-center">
                <div className="h-20 w-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-amber-500">
                  <Lightbulb className="h-8 w-8 text-amber-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">数据惯性</h4>
                <p className="text-sm text-gray-400">老师习惯"早下班"红利</p>
              </div>
              <ArrowRight className="h-8 w-8 text-amber-500" />
              <div className="text-center">
                <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-green-500">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">分布式延伸</h4>
                <p className="text-sm text-gray-400">老师推荐家长购买</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合规体系 */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">全维度的合规性体系</h2>

          <p className="text-lg text-gray-400 mb-12">
            解决<Highlight>"行政风险"</Highlight>与<Highlight>"政治正确"</Highlight>：
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <Lock className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">法律合规</h3>
              <p className="text-sm text-gray-400 leading-relaxed">产品定位为<Highlight color="green">"个人学习辅助工具"</Highlight>（类比纸质错题本或录音笔），确保原始录音不进行社交平台传播，数据本地化存储，原始音频在生成结构化摘要后，可设置定时自动销毁，从底层逻辑上尊重并保护教师授课的知识产权。</p>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <CheckCircle2 className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">程序合规</h3>
              <p className="text-sm text-gray-400 leading-relaxed">遵循国家安全标准。通过与科研机构合作课题或地方教育局<Highlight color="green">"新技术试点"</Highlight>名义进入官方白名单。</p>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <Building2 className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">资产合规</h3>
              <p className="text-sm text-gray-400 leading-relaxed">在公立体系我们采取<Highlight color="green">"资产分离"</Highlight>原则。基座作为学校"智慧校园资产"由校方采购；胶囊作为"个人学习用品"由家长自愿购买，规避乱收费红线。</p>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <BarChart3 className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">政策合规</h3>
              <p className="text-sm text-gray-400 leading-relaxed">响应"双减"号召。定位是<Highlight color="green">"校内课堂提质增效"</Highlight>，减少无效刷题和盲目的校外补习行为，与"双减"政策中"强化学校教育主阵地、提升课堂质量"的目标高度一致。</p>
            </div>
          </div>

          <QuoteBlock>
            我们不是在校外搞一套平行体系，我们是把原本流向家教市场、流向无效教辅的钱和时间，通过我们的分体式硬件，重新引流回'课堂'这个核心原点。我们是校内教育价值的<Highlight color="green">'放大器'</Highlight>，这种定位在任何政策周期下都是最安全的。
          </QuoteBlock>
        </div>
      </section>

      {/* 全场景策略 - Tabs */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">全场景分层策略</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['公立校', '私立/国际校', '教培机构', '家教场景'].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all text-sm ${
                  activeTab === index 
                    ? 'bg-amber-500 text-black' 
                    : 'bg-[#111] text-gray-400 border border-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
            {activeTab === 0 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white">公立校策略</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-950/20 rounded-xl p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-4">痛点</h4>
                    <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                      <li>• <strong className="text-white">"家校沟通"的黑箱与内耗：</strong>家长普遍存在"教育焦虑"，由于不知道孩子在校的具体表现和学习进度，只能频繁私信老师。老师面临繁重的非教学负担，导致职业倦怠，家校关系紧张。</li>
                      <li>• <strong className="text-white">大班额与个性化的天然矛盾：</strong>公立校普遍班额较大（40-50人），老师只能"广播式"教学，无法兼顾每个学生的接收情况（"吃不饱"与"跟不上"并存），难以落实"因材施教"。</li>
                      <li>• <strong className="text-white">设备准入的"二律背悖"：</strong>学校既面临教育数字化转型的硬指标（需要数据），又面临最严苛的电子产品管控红线（不能进手机/手表）。现有智慧校园设备大多是"给领导看的"，而非"给学生用的"。</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-950/20 rounded-xl p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-4">价值</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-white mb-1">对于老师（减负增效的 AI 秘书）</h5>
                        <ul className="text-sm text-gray-400 space-y-1 leading-relaxed">
                          <li>• 告别低效沟通：系统自动生成"学情报告"推送给家长，家长不再追问"孩子今天学了啥/听懂没"</li>
                          <li>• 精准教学雷达：基于全班胶囊的数据汇聚，AI 自动分析出"共性错题"和"知识盲区"，老师第二天上课只需讲 20% 大家都不会的难点，实现"以学定教"</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">对于家长（知情权与参与感）</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">合规的"伴读"视角：不通过实时监控（侵犯隐私），而是通过"认知切片"和"作业辅导指引"，让家长在家庭辅导时能精准衔接学校进度，不再"瞎辅导、乱发火"。</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">对于学校（数字化实绩）</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">无感采集，合规落地：解决了"数据怎么来"的难题。在不改变老师教学习惯、不引入学生分心设备的前提下，实现了常态化的课堂数据留存。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                  <h4 className="text-amber-400 font-semibold mb-4">进校逻辑（B2B2C 侧翼包抄）</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                      <h5 className="font-semibold text-white mb-2">1. 特洛伊木马（Teacher First）</h5>
                      <p className="text-gray-400 leading-relaxed">不直接向家长推销，而是先攻克老师。通过科研课题或教改试点的名义，向班主任/骨干教师赠送或低价提供"AI 助教系统"。一旦老师体验到"不用写教案摘要"、"家长咨询量下降 80%"的甜头，老师会产生路径依赖。</p>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                      <h5 className="font-semibold text-white mb-2">2. 数据生态倒逼（Student Follows）</h5>
                      <p className="text-gray-400 leading-relaxed">当课堂数字化成为老师的"标准工作流"，老师会倾向于建议家长配备胶囊，以便学生能接收到"个性化错题集"和"针对性辅导资源"。</p>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                      <h5 className="font-semibold text-white mb-2">3. 资产分离（规避红线）</h5>
                      <p className="text-gray-400 leading-relaxed">学校/教育局只需采购极少量的教师端设备或 SaaS 服务（低预算，甚至免费试用），规避了复杂的招投标和巨额预算审批；学生端设备定义为"个人文具"，由家长在校外渠道自愿购买。</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">私立/国际校策略</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-950/20 rounded-xl p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-3">痛点</h4>
                    <p className="text-gray-400 leading-relaxed">家长高付费，对教学服务的精细度要求极高，学校需要证明"钱花得值"。</p>
                  </div>
                  <div className="bg-green-950/20 rounded-xl p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-3">价值</h4>
                    <p className="text-gray-400 leading-relaxed">为学校提供"可视化教学质量报告"，助力学校实现教学质量数字化留存，构建学生个性化成长档案。强调"教学质量透明化"与"教学个性化"，作为服务溢价的工具。</p>
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <p className="text-gray-300 italic leading-relaxed">
                    学校可以自豪地告诉家长："我们每一堂课都有AI数字化留存，确保您的孩子没有知识盲区。"
                  </p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-2">进校逻辑</h4>
                  <p className="text-gray-400">学校将其作为"高端数字化教学服务"的一部分，统一采购或推荐购买。</p>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">教培机构策略</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-950/20 rounded-xl p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-3">痛点</h4>
                    <p className="text-gray-400 leading-relaxed">培训班最大的问题是"黑盒"，家长交了钱不知道孩子听懂没，续费难。</p>
                  </div>
                  <div className="bg-green-950/20 rounded-xl p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-3">价值</h4>
                    <p className="text-gray-400 leading-relaxed">我们帮机构把"教学过程透明化"，解决课后信息反馈断层问题。机构利用胶囊可以"今日学习高光时刻"用以宣传，提升教学透明度、续费率和报课率。</p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-2">进校逻辑</h4>
                  <p className="text-gray-400">机构为了"提升续费率"和"展示教学成果"，会主动要求学生使用我们的设备。</p>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">家教场景</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-950/20 rounded-xl p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-3">痛点</h4>
                    <p className="text-gray-400 leading-relaxed">大学生家教/上门私教，家长无法全程监控，担心家教"水时长"。</p>
                  </div>
                  <div className="bg-green-950/20 rounded-xl p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-3">C端价值</h4>
                    <p className="text-gray-400 leading-relaxed">家长直接购买设备给孩子。针对 1 对 1 辅导，家长可通过设备记录辅导过程，确保教学质量，还可以将昂贵的家教内容沉淀为可搜索、可回访的数字资产，保障学习质量。</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 底部导航 */}
      <section className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={onBackToList}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>返回 Q&A 目录</span>
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">上一个问题</span>
            <div className="h-4 w-px bg-gray-700" />
            <span className="text-gray-500 text-sm">下一个问题</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            从<span className="text-gray-500">"进校难"</span>到<span className="text-amber-400">"老师主动推广"</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            不是强制进入，而是成为老师教学的"必要延伸"
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-gray-300">分体式架构突破准入</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-gray-300">AI助教换取数据共建</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-gray-300">四重合规零政策风险</span>
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {/* Q2 内容 */}
      {isQ2 && (
      <>
      {/* 1. 技术壁垒：三层技术架构 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">1. 技术壁垒：三层技术架构</h2>
          
          {/* 认知-行动闭环总览 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-blue-400">完整的认知-行动闭环</h3>
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-500">
                    <Mic className="h-6 w-6 text-blue-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">听得到</p>
                  <p className="text-xs text-gray-500">全息课堂感知</p>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-600" />
                <div className="text-center">
                  <div className="h-16 w-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-amber-500">
                    <Brain className="h-6 w-6 text-amber-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">听得懂</p>
                  <p className="text-xs text-gray-500">教育记忆模型</p>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-600" />
                <div className="text-center">
                  <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-green-500">
                    <Bot className="h-6 w-6 text-green-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">说得对</p>
                  <p className="text-xs text-gray-500">学霸思维Agent</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第一层：全息课堂高精度感知 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center">
                <Mic className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">第一层：全息课堂高精度感知</h3>
                <p className="text-sm text-gray-400">听觉与视觉 · 全息课堂捕获</p>
              </div>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-sky-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">远场语音识别</p>
                      <p className="text-xs text-gray-500">Far-field ASR</p>
                      <p className="text-sm text-gray-400 mt-2">清华大学 CVML 实验室技术，在40人以上嘈杂教室中精准提取老师主讲音轨</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-sky-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">声纹分离</p>
                      <p className="text-xs text-gray-500">Speaker Diarization</p>
                      <p className="text-sm text-gray-400 mt-2">预锁定主讲老师声纹特征，自动过滤同学交谈、桌椅摩擦等杂音</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-sky-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">板书关键帧提取</p>
                      <p className="text-xs text-gray-500">Board Frame Extraction</p>
                      <p className="text-sm text-gray-400 mt-2">自动识别并提取板书内容，实现音频与视觉信息的多模态对齐</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-sky-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">多模态对齐</p>
                      <p className="text-xs text-gray-500">Audio-Visual Alignment</p>
                      <p className="text-sm text-gray-400 mt-2">语音、板书、课件时间轴精准对齐，构建完整的课堂数字化记忆</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二层：专属教育记忆大模型 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">第二层：专属教育记忆大模型</h3>
                <p className="text-sm text-gray-400">记忆与认知 · 上下文流引擎</p>
              </div>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 mb-6">
              <p className="text-gray-300 text-center mb-6">不是更大的模型，是<Highlight color="blue">更懂学习的模型</Highlight></p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: '课堂原生记忆', desc: '100%还原老师讲解、强调、比喻，秒级精准回溯课堂内容', icon: BookOpen, highlight: '别人给"标准答案"，我们给"老师怎么教的"' },
                  { title: '科学复习引擎', desc: '基于艾宾浩斯遗忘曲线，在知识"即将模糊"时主动唤醒', icon: Clock, highlight: '不是"忘了再学"，是"快忘时提醒"' },
                  { title: '个性化学生画像', desc: '精准定位薄弱知识点，追踪认知发展阶段与学习风格', icon: User, highlight: '不是"这题怎么做"，是"你为什么不会这题"' },
                  { title: '知识生命周期 & 证据链', desc: '首次学习→复习记录→掌握程度，全程可追溯', icon: Link2, highlight: '不是"黑箱输出"，是"全程可追溯"' },
                  { title: '考纲精准对齐', desc: '每个知识点锚定课程标准，聚焦高频考点', icon: Target, highlight: '不是"学得全"，是"学得准"' },
                  { title: '认知动态平衡', desc: '精准做加法（新知识入库），果断做减法（纠偏替换）', icon: Scale, highlight: '不是"记得越多越好"，是"记得越准越好"' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-500">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-sm text-white">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.highlight}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-navy to-navy/90 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sunny/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
                <div className="text-4xl">🧠</div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-lg font-semibold mb-1">通用AI训练模型记住世界</p>
                  <p className="text-sunny font-bold text-xl">MeetMind训练模型记住你孩子的学习旅程</p>
                </div>
              </div>
            </div>
          </div>

          {/* 第三层：清北学霸思维辅导Agent */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-mint-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Bot className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">第三层：清北学霸思维辅导Agent</h3>
                <p className="text-sm text-gray-400">行动能力 · 多模态干预闭环</p>
              </div>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-mint-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">分层诊断报告</p>
                      <p className="text-xs text-gray-500">Layered Diagnostic</p>
                      <p className="text-sm text-gray-400 mt-2">AI自动分析知识盲区，生成个性化学习路径和针对性练习</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-mint-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">拟人化交互</p>
                      <p className="text-xs text-gray-500">Voice/Video Output</p>
                      <p className="text-sm text-gray-400 mt-2">自然语音对话，支持追问和澄清，像真正的学霸同桌一样交流</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-mint-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">原生变式题生成</p>
                      <p className="text-xs text-gray-500">Exercise Generation</p>
                      <p className="text-sm text-gray-400 mt-2">基于课堂原题生成变式练习，举一反三巩固薄弱知识点</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-mint-500" />
                    <div>
                      <p className="font-semibold text-white text-sm">学霸思维注入</p>
                      <p className="text-xs text-gray-500">Top Student Mindset</p>
                      <p className="text-sm text-gray-400 mt-2">清华北大学霸的解题思路和学习方法，潜移默化培养孩子思维能力</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 核心技术亮点 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Box className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">分体式时空解耦</h4>
              <p className="text-sm text-gray-400 leading-relaxed">采集胶囊校内无感采集，回家数据回流至伴学基座，突破"进校难"壁垒。</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <div className="h-10 w-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                <Mic className="h-5 w-5 text-amber-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">声纹识别分离</h4>
              <p className="text-sm text-gray-400 leading-relaxed">清华大学 CVML 实验室技术，40人以上嘈杂教室精准锁定主讲老师音轨。</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-5 w-5 text-green-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">语境流引擎</h4>
              <p className="text-sm text-gray-400 leading-relaxed">理解课堂原生语境，将非结构化语音转化为结构化学习数据。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 团队背景 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-14 w-14 bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">团队背景：清华北大联合团队</h2>
          </div>
          
          <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-3 px-6 py-3 bg-navy rounded-full text-white shadow-lg">
                  <GraduationCap className="w-5 h-5 text-sunny" />
                  <span className="font-medium">清华北大联合团队</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed mb-6">
                  团队核心成员来自清华大学计算机视觉与机器学习实验室（CVML）和北京大学，在教育科技、语音识别、自然语言处理领域拥有深厚积累。
                </p>
                <div className="flex flex-wrap gap-3">
                  {['远场语音识别', '教育NLP', '知识图谱', '隐私计算', '多模态对齐', '声纹分离'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-[#0a0a0a] rounded-full text-sm text-gray-300 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 数据壁垒：AGI时代的语境垄断 */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">2. 数据壁垒：如果 AGI 注定到来，我们的生存空间在哪里？</h2>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-blue-500/30 mb-12">
            <QuoteBlock>
              我们的壁垒不是"模型"，而是<Highlight color="blue">"语境（Context）"</Highlight>。如果超级智能的到来不可避免，那么未来最稀缺的资源不再是"解题能力"，而是对<Highlight color="blue">"多样化人类价值函数"</Highlight>的深度理解——即准确把握人类在具体语境下真正需要什么。
            </QuoteBlock>
          </div>

          {/* 破局路径 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">破局路径：以"实用工具"为钩子，构建"语境垄断"</h3>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <p className="text-gray-400 leading-relaxed mb-8">
                我们不奢望用户为了"贡献数据"而使用产品。<Highlight color="blue">壁垒是用户在中长期使用过程中自然留存的结果</Highlight>：
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">工具作为"钩子"</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">通过极致实用的功能（如"课堂录音"、"精选回顾"、"AI智能复习"）切入用户的每日高频场景，解决即时痛点。</p>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="h-10 w-10 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">语境的"沉淀"与"留存"</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">随着用户持续使用分体式硬件记录课堂和学习过程，系统内沉淀了大量属于该个体的、非结构化的<Highlight>私有上下文</Highlight>。</p>
                </div>
                
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="h-5 w-5 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">不可迁移的粘性</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">这种壁垒是"长"出来的。用户使用时间越长，AI 对其认知断点、老师教学风格、个人习惯的理解就越深。即使未来出现更强大的通用 AI，它也无法取代一个<Highlight color="green">"全程陪同你上课、最懂你知识薄弱点"</Highlight>的数字化记忆系统。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 核心洞察 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">核心洞察：从"通用智能"转向"私有语境"</h3>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-950/20 rounded-xl p-6 border border-red-900/50">
                  <h4 className="text-red-400 font-semibold mb-4">通用 AI 的局限</h4>
                  <p className="text-gray-400 leading-relaxed">通用大模型（如豆包、元宝）拥有海量的"世界知识"，但它们<Highlight color="red">无法进入物理课堂</Highlight>，永远缺乏<Highlight color="red">"私有上下文数据"</Highlight>。</p>
                </div>
                
                <div className="bg-green-950/20 rounded-xl p-6 border border-green-900/50">
                  <h4 className="text-green-400 font-semibold mb-4">我们的优势</h4>
                  <p className="text-gray-400 leading-relaxed">竞品在回答"是什么（What）"，我们在理解<Highlight color="green">"你（Who）"</Highlight>和<Highlight color="green">"如何教你（How）"</Highlight>。</p>
                </div>
              </div>
              
              <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-gray-500 text-sm mb-2">通用 AI</h5>
                    <p className="text-gray-400 italic">"勾股定理的定义是：在直角三角形中，两条直角边的平方和等于斜边的平方..."</p>
                    <p className="text-red-400/70 text-sm mt-2">—— 标准化的、教科书式的回答</p>
                  </div>
                  <div>
                    <h5 className="text-blue-400 text-sm mb-2">MeetMind</h5>
                    <p className="text-white italic">"王老师今天上午讲梯子靠墙那个例子时，特别强调了'地面是否水平'这个易错点，还展示了3种常见错误解法..."</p>
                    <p className="text-green-400/70 text-sm mt-2">—— 专属的、课堂原生的回放</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 战略终局 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">战略终局：掌握"人类价值函数"的最后 1 公里</h3>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                这是一个关于 AI 未来的核心命题：<Highlight color="blue">当计算力与知识变得廉价，什么才是昂贵的？</Highlight>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">把握真实需求</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">在 AGI 时代，最紧要的任务是准确把握人类真正需要什么。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">理解"人"</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">每一个学生、每一位老师的价值函数都是多样且独特的。通过深耕"课堂原生语境"，我们不仅在做教育，更是在捕捉人类在具体学习场景下的反馈与意图。</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500 pl-6 py-4 rounded-r-xl">
                <p className="text-gray-200 leading-relaxed">
                  <strong className="text-white">结论：</strong>我们通过硬件进入物理世界，拿到了通往<Highlight color="blue">"人类真实价值函数"</Highlight>的独家门票。这种对<Highlight color="blue">"人类语境"</Highlight>的理解能力，是我们面对大厂和通用 AI 时最宽的护城河。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 竞争壁垒：利用巨头路径依赖进行错位竞争 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-500 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Competitive Moat
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              如果大厂、教育巨头或硬件商入局怎么办？
            </h2>
            <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-2xl p-6 border border-blue-500/30 max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed">
                我们的核心逻辑不是<span className="text-gray-500">"防御"</span>，而是利用巨头的<span className="text-blue-400 font-semibold">路径依赖</span>进行<span className="text-blue-400 font-semibold">错位竞争</span>。
              </p>
              <p className="text-gray-400 mt-4">
                我们赌的是：<Highlight color="blue">"原生语境数据"</Highlight>的价值，终将超越<Highlight color="red">"通用题库"</Highlight>与<Highlight color="red">"标准化内容"</Highlight>。
              </p>
            </div>
          </div>

          {/* 三大竞争对手分析 */}
          <div className="space-y-8 mb-16">
            {/* 互联网大厂 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">互联网大厂</h3>
                  <p className="text-sm text-gray-400">字节、腾讯、阿里等</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">潜在威胁 ★★★</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 rounded-xl p-5 border border-red-900/50">
                  <h4 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    看似的威胁
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• 资金雄厚，可以快速铺量</li>
                    <li>• 技术实力强，AI能力领先</li>
                    <li>• 可以和学校合作（甚至更快）</li>
                    <li>• 我们做什么他们都可以复制</li>
                  </ul>
                </div>
                <div className="bg-green-950/20 rounded-xl p-5 border border-green-900/50">
                  <h4 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    实际的局限：规模化陷阱
                  </h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p><strong className="text-white">市场极度纵深与去中心化：</strong>全国有数十万所学校，每一个课堂都是一个独立的"语境孤岛"。大厂擅长做"标准化、可快速复制"的产品，但教育极其<span className="text-red-400">"重"且"碎"</span>。</p>
                    <p><strong className="text-white">基因不匹配：</strong>大厂的底层逻辑是"流量生意"，需要快速规模化。但教育需要深入毛细血管的落地能力，需要<Highlight color="green">一校一策、一班一策</Highlight>的精细化运营。</p>
                    <p><strong className="text-white">我们的机会：</strong>在这种极度纵深的市场，大厂很难通过单一流量手段垄断。我们比大厂更<Highlight color="green">敏捷</Highlight>，能把<Highlight color="green">"课堂语境"</Highlight>这种非标数据做深、做透。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 教育巨头 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">教育巨头</h3>
                  <p className="text-sm text-gray-400">学而思、猿辅导、作业帮等</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">核心对手 ★★★★★</span>
                </div>
              </div>

              <div className="bg-amber-950/20 rounded-xl p-5 border border-amber-900/50 mb-6">
                <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  致命的路径依赖：创新者的窘境
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  教育巨头确实有学习机业务，但他们面临严重的<span className="text-amber-400">"创新者窘境"</span>——颠覆自己的核心业务，等于革自己的命。
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-red-400" />
                    内容霸权的包袱
                  </h5>
                  <p className="text-sm text-gray-400">巨头最核心的资产是<span className="text-red-400">自研题库和名师网课</span>。他们的学习机本质上是这些内容的"分发终端"。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Scale className="h-4 w-4 text-red-400" />
                    根本的利益冲突
                  </h5>
                  <p className="text-sm text-gray-400">巨头希望学生看<Highlight color="red">"他们的课"</Highlight>，而我们希望学生听好<Highlight color="green">"自己老师的课"</Highlight>。这是两种完全不同的商业逻辑。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-400" />
                    我们的错位竞争
                  </h5>
                  <p className="text-sm text-gray-400">我们不生产内容，我们只是校内课堂内容的<Highlight color="green">"搬运工"和"加工者"</Highlight>。我们在"校内语境"战场拥有品牌中立性。</p>
                </div>
              </div>
            </div>

            {/* 传统录音笔/硬件厂商 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center">
                  <Mic className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">传统录音笔/硬件厂商</h3>
                  <p className="text-sm text-gray-400">搜狗、讯飞录音笔等</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">低威胁 ★★</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="text-gray-400 font-semibold mb-4">工具思维 vs 认知思维</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p>录音笔厂商的底层逻辑是<Highlight color="red">"存储"</Highlight>，用户买的是硬件，生意在卖出那一刻就结束了。</p>
                    <p>他们忽略了数据采集后的<Highlight color="green">"加工、检索与认知对齐"</Highlight>——这才是价值所在。</p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="text-gray-400 font-semibold mb-4">无法跨越的软件鸿沟</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p>他们缺乏大模型算法能力，无法将杂乱的音频流转化为学生能直接使用的知识图谱。</p>
                    <p>我们卖的不是录音机，而是<Highlight color="green">"带耳朵的 AI 专属助教"</Highlight>，硬件只是我们获取语境的"探针"。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 我们Bet什么 */}
          <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-blue-500/30 mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-400" />
              我们 Bet 什么：为什么这个点能成？
            </h3>
            <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
              <QuoteBlock>
                真正能提升学习效率的，不是更全的题库，而是<Highlight color="blue">更深的语境</Highlight>。
              </QuoteBlock>
              <p className="text-gray-300 leading-relaxed mt-6">
                我们用课堂原生上下文及在其基础上开发的应用矩阵去<Highlight color="blue">钩住用户</Highlight>，在此基础上建立学生上下文触手——触及学生的错题情况、认知画像、老师教学风格、教学语境、逻辑思维等等，构建强大的基于上下文语境的AI赋能，形成<Highlight color="blue">闭环和数据飞轮</Highlight>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 颠覆性竞争：降维打击学习机与家教 */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">4. 颠覆性竞争：为什么我们能超越学习机与家教？</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* 降维打击学习机 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">VS</span>
                </div>
                <h3 className="text-xl font-bold">降维打击学习机</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">从"静态图书馆"到"动态助教"</p>

              <div className="space-y-4">
                <div className="bg-red-950/20 rounded-xl p-4 border border-red-900/50">
                  <h4 className="text-red-400 font-medium mb-2">传统学习机</h4>
                  <p className="text-sm text-gray-400">本质上是<Highlight color="red">"电子书+题库+网课"</Highlight>的堆砌，是<Highlight color="red">被动搜索</Highlight>。学生不会了去搜，但往往<span className="text-red-400">不知道自己哪里不会</span>。</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-blue-400 rotate-90 md:rotate-0" />
                </div>
                <div className="bg-green-950/20 rounded-xl p-4 border border-green-900/50">
                  <h4 className="text-green-400 font-medium mb-2">MeetMind</h4>
                  <p className="text-sm text-gray-400">是<Highlight color="green">主动服务</Highlight>。因为 AI "听过课"，它能主动跳出来提醒：<span className="text-green-400">"王老师今天讲的那个重点，你可能还没掌握，我们练一下。"</span></p>
                  <p className="text-sm text-gray-500 mt-2">我们是用<Highlight color="green">"动态语境"</Highlight>去替代<Highlight color="red">"静态内容"</Highlight>。</p>
                </div>
              </div>
            </div>

            {/* 降维打击家教 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">VS</span>
                </div>
                <h3 className="text-xl font-bold">降维打击家教</h3>
              </div>
              <p className="text-sm text-gray-500 mb-6">从"盲目辅导"到"靶向修复"</p>

              <div className="space-y-4">
                <div className="bg-red-950/20 rounded-xl p-4 border border-red-900/50">
                  <h4 className="text-red-400 font-medium mb-2">真人家教</h4>
                  <p className="text-sm text-gray-400">最大的成本在于<Highlight color="red">"信息对齐"</Highlight>。家教要花一半的时间问：<span className="text-red-400">"老师今天讲到哪了？你怎么不会的？"</span></p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-blue-400 rotate-90 md:rotate-0" />
                </div>
                <div className="bg-green-950/20 rounded-xl p-4 border border-green-900/50">
                  <h4 className="text-green-400 font-medium mb-2">MeetMind</h4>
                  <p className="text-sm text-gray-400">AI 拥有<Highlight color="green">上帝视角</Highlight>。它能精准定位当天的思维断层，直接进行<span className="text-green-400">"外科手术式"</span>的修复。</p>
                  <p className="text-sm text-gray-500 mt-2">我们是用 <Highlight color="green">1% 的成本</Highlight>，提供了 <Highlight color="green">100% 全时段</Highlight>的精准陪练。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 护城河总结 */}
          <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Lock className="h-6 w-6 text-blue-400" />
              我们的护城河：语境垄断下的数据资产
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">不可复制性</h4>
                <p className="text-sm text-gray-400">题库可以爬取，名师可以签约，但<span className="text-blue-400">"每一个孩子、在每一堂课上的真实语境"</span>是无法被瞬间复制的。</p>
              </div>
              <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">AI 赋能的深度</h4>
                <p className="text-sm text-gray-400">随着数据的累积，我们的模型不仅懂知识点，更懂<span className="text-blue-400">"人"</span>。我们构建的是一个基于上下文语境的<span className="text-blue-400">认知操作系统</span>。</p>
              </div>
            </div>
            <div className="mt-6 bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
              <p className="text-gray-300 text-center">
                这是一个随用户使用时长而不断增高的<Highlight color="blue">迁移门槛</Highlight>。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-gray-500">壁垒不是"模型"</span>
            <br />
            而是<span className="text-blue-400">"语境"</span>与<span className="text-blue-400">"时间"</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            用户用越久，我们越懂TA。这是通用 AI 永远无法复制的护城河。
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-gray-300">技术壁垒</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-gray-300">数据壁垒</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-gray-300">语境垄断</span>
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {/* Q2-2 内容：团队构建与组织基因 */}
      {isQ2Team && (
      <>
      {/* 1. 双原生驱动：AI原生 + 敏捷原生 */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">1. 组织基因：双原生驱动</h2>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-blue-500/30 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              在这个项目中，<strong className="text-white">团队本身就是产品的第一个实验场景</strong>。我们采用<Highlight color="blue">"双原生"</Highlight>打法，在极少的资源下实现了极高的迭代效率。
            </p>
          </div>

          {/* AI 原生 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                <Brain className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">A. AI 原生 (AI Native)</h3>
                <p className="text-sm text-gray-400">从"工具使用"到"管理思想"</p>
              </div>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <p className="text-gray-300 mb-6">
                我们对 AI 原生组织的定义是：<Highlight color="blue">最能够最大化利用AI快速发展的红利的组织</Highlight>。预判模型能力，提前构建"容器"，以小时级速度接入新模型红利。
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">1. 容器战略</h4>
                  <p className="text-sm text-gray-400">AI 的红利是浪，我们的组织是船。浪来则船高，顺势而行。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">2. 人 + AI &gt; AI</h4>
                  <p className="text-sm text-gray-400">人专注于那些只有人能触及的领域。其余的，交给流动的智能。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 敏捷原生 */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Target className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">B. 敏捷原生 (Agile Native)</h3>
                <p className="text-sm text-gray-400">针对高校创业团队痛点的解法</p>
              </div>
            </div>
            
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <p className="text-gray-300 mb-6">
                针对高校背景团队<Highlight color="red">"时间分散、动力易波动"</Highlight>的痛点，我们建立了一套<Highlight color="cyan">"AI原生的"</Highlight>打法：
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">小步快跑</h4>
                  <p className="text-sm text-gray-400">我们将庞大的系统拆解为<Highlight color="cyan">极小的验证闭环</Highlight>，从问题定义到上线验证，追求极致的周转速度。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">过程即产品</h4>
                  <p className="text-sm text-gray-400">我们将每一次讨论、每一次代码提交都视为<Highlight color="cyan">数据资产沉淀</Highlight>下来。即使面临人员流动，核心资产也能通过 AI 系统无损传承。</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                  <h4 className="font-semibold text-white mb-3">低成本试错</h4>
                  <p className="text-sm text-gray-400">依靠 AI 带来的执行速度优势，我们能以<Highlight color="cyan">极低的成本进行多点试错</Highlight>，在资源有限的情况下快速逼近最优解。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 产品哲学：原子的"乐高池" vs 分子的"预制菜" */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">2. 产品哲学：原子的"乐高池" vs 分子的"预制菜"</h2>
          
          <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-blue-500/30 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed">
              传统应用提供的是<Highlight color="red">"预制好的分子"</Highlight>（标准化功能），而我们提供的是<Highlight color="blue">"灵动的原子"</Highlight>（颗粒化能力）。我们利用 Agent 根据用户当下的意图，实时将原子组装成服务。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* 传统应用 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                  <Box className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">传统应用：分子的"预制菜"</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-950/20 rounded-xl p-4 border border-red-900/50">
                  <h4 className="text-red-400 font-medium mb-2">逻辑</h4>
                  <p className="text-sm text-gray-400">传统软件开发是将原子能力（如搜索、播放、做题）<strong className="text-white">提前打包</strong>成固定的功能模块（分子）。</p>
                </div>
                <div className="bg-red-950/20 rounded-xl p-4 border border-red-900/50">
                  <h4 className="text-red-400 font-medium mb-2">局限</h4>
                  <p className="text-sm text-gray-400">用户只能在菜单里选择"套餐"。比如传统的学习机，只有"名师视频"这个固定功能。无论你是没听懂概念，还是记不住公式，它都只能给你播放同一个视频。这是<Highlight color="red">"千人一面"</Highlight>的。</p>
                </div>
              </div>
            </div>

            {/* MeetMind */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">MeetMind：原子的"乐高池"</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-950/20 rounded-xl p-4 border border-blue-900/50">
                  <h4 className="text-blue-400 font-medium mb-2">原子层 (Capabilities)</h4>
                  <p className="text-sm text-gray-400">我们拥有极细颗粒度的原子能力，例如：<br/>• "提取这段板书的 OCR"<br/>• "定位老师讲这句话的时间戳"<br/>• "识别孩子当下的挫败感情绪"<br/>• "检索班级历史共性错题"</p>
                </div>
                <div className="bg-green-950/20 rounded-xl p-4 border border-green-900/50">
                  <h4 className="text-green-400 font-medium mb-2">Agent 组装层 (Dynamic Orchestration)</h4>
                  <p className="text-sm text-gray-400">当学生提问时，Agent 会根据他的具体语境，<strong className="text-white">实时调度</strong>上述原子进行组合。</p>
                </div>
              </div>
            </div>
          </div>

          {/* 场景示例 */}
          <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 mb-8">
            <h3 className="text-xl font-bold mb-6">场景化组装示例</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                <h4 className="text-amber-400 font-semibold mb-3">场景 A：学生很沮丧</h4>
                <p className="text-sm text-gray-400">Agent 组合调取<Highlight color="amber">"情绪安抚原子"</Highlight> + <Highlight color="amber">"简单例题原子"</Highlight>，先稳定情绪，再循序渐进。</p>
              </div>
              <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                <h4 className="text-green-400 font-semibold mb-3">场景 B：学生想冲刺</h4>
                <p className="text-sm text-gray-400">Agent 组合调取<Highlight color="green">"高频考点原子"</Highlight> + <Highlight color="green">"变式训练原子"</Highlight>，精准突破提分。</p>
              </div>
            </div>
          </div>

          {/* 为什么更具生命力 */}
          <div className="bg-gradient-to-r from-blue-500/10 via-[#111] to-[#111] rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-blue-400" />
              为什么这更具生命力？(Evolvability)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">无限多样的服务</h4>
                <p className="text-sm text-gray-400">这种组合方式可以覆盖教育中无数的<Highlight color="blue">长尾需求 (Long-tail Needs)</Highlight>，这是传统菜单式 App 永远无法穷尽的。</p>
              </div>
              <div className="bg-[#0a0a0a] rounded-xl p-5 border border-gray-800">
                <h4 className="font-semibold text-white mb-3">随 AI 自动进化</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>• <strong className="text-white">原子更强：</strong>随着多模态技术进步，我们的"OCR 原子"、"听觉原子"会自动变强</p>
                  <p>• <strong className="text-white">组装更准：</strong>随着大模型推理能力提升，Agent 的"组装逻辑"会更聪明</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
              <p className="text-gray-300 text-center">
                <strong className="text-white">结论：</strong>我们不需要重写 App，只要接入更强的模型，产品的服务粒度就会自动变得更细、更准。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <span className="text-gray-500">我们是一支</span>
            <span className="text-purple-400">"双原生"</span>
            <span className="text-gray-500">的进化型组织</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            AI Native + Agile Native，让我们能以极小规模创造极大价值。
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-gray-300">教育洞察</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-gray-300">技术天花板</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-gray-300">落地执行力</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-gray-300">AI Native</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="text-gray-300">Agile Native</span>
            </div>
          </div>
        </div>
      </section>
      </>
      )}

      {/* 底部导航 */}
      <section className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button 
            onClick={onBackToList}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>返回 Q&A 目录</span>
          </button>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">上一个问题</span>
            <div className="h-4 w-px bg-gray-700" />
            <span className="text-gray-500 text-sm">下一个问题</span>
          </div>
        </div>
      </section>
    </div>
  );
}
