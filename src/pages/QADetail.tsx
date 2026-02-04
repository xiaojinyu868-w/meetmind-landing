import { useState } from 'react';
import { 
  Cpu, Zap, ChevronRight, Shield, Users, 
  Target, Building2, GraduationCap, Lightbulb, 
  CheckCircle2, Lock, BarChart3, School, ArrowRight,
  Box, Hexagon, Quote,
  Mic, Home, MessageSquare, Clock,
  ArrowLeft, FileText, Construction
} from 'lucide-react';

interface QADetailProps {
  categoryId: string | null;
  questionId: string | null;
  onBackToList: () => void;
  onBackToHome: () => void;
}

// 高亮文本
function Highlight({ children, color = 'amber' }: { children: React.ReactNode; color?: 'amber' | 'blue' | 'green' }) {
  const colors = {
    amber: 'text-amber-400 font-semibold',
    blue: 'text-blue-400 font-semibold',
    green: 'text-green-400 font-semibold'
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

// 问题一完整内容
function Q1Content() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* 硬件形态 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">1. 硬件形态与技术底层支撑</h2>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl">
            我们通过分体式的硬件设计与针对性的底层算法，解决了<Highlight>"进不去教室"</Highlight>和<Highlight>"录不清楚"</Highlight>这两个行业核心痛点。
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
            {/* 采集胶囊 */}
            <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Box className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">采集胶囊</h3>
                  <p className="text-blue-400 text-xs sm:text-sm">校内端</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">极致去敏与准入：</strong>这是一枚极致轻量的智能文具，<Highlight color="blue">不带屏幕、不具备游戏和社交功能、无实时通讯模块</Highlight>。它在物理上彻底剥离了电子产品的成瘾性与干扰性，不属于受控移动终端，而是完全符合规定的辅助学习工具。</p>
                <p><strong className="text-white">专注采集：</strong>采集胶囊专注于教室内的远场拾音。孩子佩戴或摆放后无需任何复杂操作，即可在嘈杂环境下精准锁定老师音轨，实现<Highlight color="blue">无感化的数据捕捉</Highlight>。</p>
                <p><strong className="text-white">时空解耦：</strong>采集胶囊在校内采取<Highlight color="blue">单机静默存储，不联网、不传输</Highlight>。这种时空解耦的设计，既保证了校内数据的绝对安全，也实现了"校内记录、回家分析"的逻辑一致性。</p>
              </div>
            </div>

            {/* 伴学基座 */}
            <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Hexagon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">伴学基座</h3>
                  <p className="text-amber-400 text-xs sm:text-sm">家庭端</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">交互与回流中心：</strong>这是一个带有屏幕的智能交互终端。孩子放学回家后，将采集胶囊插入基座（或通过靠近自动连接无线网络），<Highlight color="amber">校内数据会瞬间回流至基座</Highlight>。</p>
                <p><strong className="text-white">生态闭环：</strong>基座不仅负责充电和存储，更重要的是通过内置的人工智能操作系统，结合基于原生数据的应用矩阵，将非结构化的语音转化为个性化辅导内容，<Highlight color="amber">形成闭环体验</Highlight>。</p>
              </div>
            </div>
          </div>

          {/* 时空解耦可视化 */}
          <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">时空解耦架构示意</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4">
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 border-blue-500">
                  <School className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <p className="text-xs sm:text-sm text-gray-400">校内场景</p>
                <p className="text-xs text-blue-400">无网采集</p>
              </div>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 rotate-90 sm:rotate-0" />
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 border-amber-500">
                  <Box className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
                </div>
                <p className="text-xs sm:text-sm text-gray-400">物理转移</p>
              </div>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 rotate-90 sm:rotate-0" />
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 border-green-500">
                  <Home className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <p className="text-xs sm:text-sm text-gray-400">家庭场景</p>
                <p className="text-xs text-green-400">AI分析应用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术底层 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">技术底层：锁定老师音轨</h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12">
            针对教室内远场、高噪音、高回声的极复杂环境，我们从软硬件两个维度确保了<Highlight>"录得清"</Highlight>与<Highlight>"算得准"</Highlight>：
          </p>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Mic className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 shrink-0" />
                <span>声纹识别分离技术</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">多麦克风阵列：</strong>采集胶囊集成了先进的麦克风阵列，具备强大的远场拾音能力。</p>
                <p><strong className="text-white">预锁定机制：</strong>核心的人工智能引擎会在初始化阶段锁定主讲老师的声纹特征。即便在<Highlight color="blue">40人以上的嘈杂教室</Highlight>中，系统也能精准提取老师的主讲音轨，自动过滤掉周围同学的交谈声、桌椅摩擦声等杂音。</p>
              </div>
            </div>

            <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 shrink-0" />
                <span>数据确权与知识产权保护</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm leading-relaxed">
                <p><strong className="text-white">结构化摘要：</strong>原始音频在基座端被转化为结构化的知识摘要后，系统可设置<Highlight color="green">定时自动销毁原始文件</Highlight>。</p>
                <p><strong className="text-white">底层保护：</strong>这种处理方式从底层逻辑上<Highlight color="green">保护了老师授课的知识产权</Highlight>，确保数据仅用于个人的学习分析，而非原始录音的二次传播。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商业策略 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">商业策略的"特洛伊木马"</h2>

          <QuoteBlock>
            进校的核心阻力在老师。我们的产品是为老师提供价值，逻辑核心在于"利他"。
          </QuoteBlock>

          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-300">AI 工具为老师提供的价值：</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {[
              { title: '提效', content: '胶囊采集的数据经过脱敏后，会为老师生成自动教研报告、课堂重点摘要等内容，帮助老师借助AI工具提高效率', icon: Zap },
              { title: '减负', content: '系统自动将脱敏后的课堂数据转化为教研报告、课堂重点摘要等结构化内容，极大减少老师准备教案、回复家长咨询的时间', icon: Clock },
              { title: '反馈', content: '老师能从系统中获得真实的课堂反馈，像一个面试官一样提供改进建议，辅助老师优化教学方案', icon: MessageSquare },
              { title: '无心理负担', content: '系统具备自动剔除功能，识别并过滤非教学对话，家长收到的是"认知切片"而非完整录音', icon: Shield },
            ].map((item, i) => (
              <div key={i} className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xs sm:text-sm">{i + 1}</div>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* B2B2C 飞轮 */}
          <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-800 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center">B2B2C 杠杆：Teacher First 策略</h3>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 border-blue-500">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1">先行占位</h4>
                <p className="text-xs sm:text-sm text-gray-400">赠送老师AI助教系统</p>
              </div>
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 rotate-90 sm:rotate-0" />
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 border-amber-500">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1">数据惯性</h4>
                <p className="text-xs sm:text-sm text-gray-400">老师习惯"早下班"红利</p>
              </div>
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-amber-500 rotate-90 sm:rotate-0" />
              <div className="text-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border-2 border-green-500">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1">分布式延伸</h4>
                <p className="text-xs sm:text-sm text-gray-400">老师推荐家长购买</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合规体系 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">全维度的合规性体系</h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12">
            解决<Highlight>"行政风险"</Highlight>与<Highlight>"政治正确"</Highlight>：
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
              <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">法律合规</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">产品定位为<Highlight color="green">"个人学习辅助工具"</Highlight>（类比纸质错题本或录音笔），确保原始录音不进行社交平台传播，数据本地化存储，原始音频在生成结构化摘要后，可设置定时自动销毁，从底层逻辑上尊重并保护教师授课的知识产权。</p>
            </div>

            <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">程序合规</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">遵循国家安全标准。通过与科研机构合作课题或地方教育局<Highlight color="green">"新技术试点"</Highlight>名义进入官方白名单。</p>
            </div>

            <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">资产合规</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">在公立体系我们采取<Highlight color="green">"资产分离"</Highlight>原则。基座作为学校"智慧校园资产"由校方采购；胶囊作为"个人学习用品"由家长自愿购买，规避乱收费红线。</p>
            </div>

            <div className="bg-[#111] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-800">
              <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">政策合规</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">响应"双减"号召。定位是<Highlight color="green">"校内课堂提质增效"</Highlight>，减少无效刷题和盲目的校外补习行为，与"双减"政策中"强化学校教育主阵地、提升课堂质量"的目标高度一致。</p>
            </div>
          </div>

          <QuoteBlock>
            我们不是在校外搞一套平行体系，我们是把原本流向家教市场、流向无效教辅的钱和时间，通过我们的分体式硬件，重新引流回'课堂'这个核心原点。我们是校内教育价值的<Highlight color="green">'放大器'</Highlight>，这种定位在任何政策周期下都是最安全的。
          </QuoteBlock>
        </div>
      </section>

      {/* 全场景策略 - Tabs */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">全场景分层策略</h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {['公立校', '私立/国际校', '教培机构', '家教场景'].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-medium transition-all text-xs sm:text-sm ${
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
          <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-gray-800">
            {activeTab === 0 && (
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white">公立校策略</h3>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-red-950/20 rounded-xl p-4 sm:p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">痛点</h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                      <li>• <strong className="text-white">"家校沟通"的黑箱与内耗：</strong>家长普遍存在"教育焦虑"，由于不知道孩子在校的具体表现和学习进度，只能频繁私信老师。老师面临繁重的非教学负担，导致职业倦怠，家校关系紧张。</li>
                      <li>• <strong className="text-white">大班额与个性化的天然矛盾：</strong>公立校普遍班额较大（40-50人），老师只能"广播式"教学，无法兼顾每个学生的接收情况（"吃不饱"与"跟不上"并存），难以落实"因材施教"。</li>
                      <li>• <strong className="text-white">设备准入的"二律背悖"：</strong>学校既面临教育数字化转型的硬指标（需要数据），又面临最严苛的电子产品管控红线（不能进手机/手表）。现有智慧校园设备大多是"给领导看的"，而非"给学生用的"。</li>
                    </ul>
                  </div>

                  <div className="bg-green-950/20 rounded-xl p-4 sm:p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">价值</h4>
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">对于老师（减负增效的 AI 秘书）</h5>
                        <ul className="text-xs sm:text-sm text-gray-400 space-y-1 leading-relaxed">
                          <li>• 告别低效沟通：系统自动生成"学情报告"推送给家长，家长不再追问"孩子今天学了啥/听懂没"</li>
                          <li>• 精准教学雷达：基于全班胶囊的数据汇聚，AI 自动分析出"共性错题"和"知识盲区"，老师第二天上课只需讲 20% 大家都不会的难点，实现"以学定教"</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">对于家长（知情权与参与感）</h5>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">合规的"伴读"视角：不通过实时监控（侵犯隐私），而是通过"认知切片"和"作业辅导指引"，让家长在家庭辅导时能精准衔接学校进度，不再"瞎辅导、乱发火"。</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">对于学校（数字化实绩）</h5>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">无感采集，合规落地：解决了"数据怎么来"的难题。在不改变老师教学习惯、不引入学生分心设备的前提下，实现了常态化的课堂数据留存。</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-amber-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">进校逻辑（B2B2C 侧翼包抄）</h4>
                  <div className="grid md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div className="bg-[#0a0a0a] rounded-lg p-3 sm:p-4 border border-gray-800">
                      <h5 className="font-semibold text-white mb-1 sm:mb-2">1. 特洛伊木马（Teacher First）</h5>
                      <p className="text-gray-400 leading-relaxed">不直接向家长推销，而是先攻克老师。通过科研课题或教改试点的名义，向班主任/骨干教师赠送或低价提供"AI 助教系统"。一旦老师体验到"不用写教案摘要"、"家长咨询量下降 80%"的甜头，老师会产生路径依赖。</p>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-lg p-3 sm:p-4 border border-gray-800">
                      <h5 className="font-semibold text-white mb-1 sm:mb-2">2. 数据生态倒逼（Student Follows）</h5>
                      <p className="text-gray-400 leading-relaxed">当课堂数字化成为老师的"标准工作流"，老师会倾向于建议家长配备胶囊，以便学生能接收到"个性化错题集"和"针对性辅导资源"。</p>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-lg p-3 sm:p-4 border border-gray-800">
                      <h5 className="font-semibold text-white mb-1 sm:mb-2">3. 资产分离（规避红线）</h5>
                      <p className="text-gray-400 leading-relaxed">学校/教育局只需采购极少量的教师端设备或 SaaS 服务（低预算，甚至免费试用），规避了复杂的招投标和巨额预算审批；学生端设备定义为"个人文具"，由家长在校外渠道自愿购买。</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">私立/国际校策略</h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-red-950/20 rounded-xl p-4 sm:p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">痛点</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">家长高付费，对教学服务的精细度要求极高，学校需要证明"钱花得值"。</p>
                  </div>
                  <div className="bg-green-950/20 rounded-xl p-4 sm:p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">价值</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">为学校提供"可视化教学质量报告"，助力学校实现教学质量数字化留存，构建学生个性化成长档案。强调"教学质量透明化"与"教学个性化"，作为服务溢价的工具。</p>
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border-l-4 border-amber-500 p-4 sm:p-6 rounded-r-xl">
                  <p className="text-gray-300 italic text-sm sm:text-base">
                    学校可以自豪地告诉家长："我们每一堂课都有AI数字化留存，确保您的孩子没有知识盲区。"
                  </p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-3 sm:p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm">进校逻辑</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">学校将其作为"高端数字化教学服务"的一部分，统一采购或推荐购买。</p>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">教培机构策略</h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-red-950/20 rounded-xl p-4 sm:p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">痛点</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">培训班最大的问题是"黑盒"，家长交了钱不知道孩子听懂没，续费难。</p>
                  </div>
                  <div className="bg-green-950/20 rounded-xl p-4 sm:p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">价值</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">我们帮机构把"教学过程透明化"，解决课后信息反馈断层问题。机构利用胶囊可以"今日学习高光时刻"用以宣传，提升教学透明度、续费率和报课率。</p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-3 sm:p-4 border border-gray-800">
                  <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm">进校逻辑</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">机构为了"提升续费率"和"展示教学成果"，会主动要求学生使用我们的设备。</p>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">家教场景</h3>
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-red-950/20 rounded-xl p-4 sm:p-6 border border-red-900/50">
                    <h4 className="text-red-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">痛点</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">大学生家教/上门私教，家长无法全程监控，担心家教"水时长"。</p>
                  </div>
                  <div className="bg-green-950/20 rounded-xl p-4 sm:p-6 border border-green-900/50">
                    <h4 className="text-green-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">C端价值</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">家长直接购买设备给孩子。针对 1 对 1 辅导，家长可通过设备记录辅导过程，确保教学质量，还可以将昂贵的家教内容沉淀为可搜索、可回访的数字资产，保障学习质量。</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6">
            从<span className="text-gray-500">"进校难"</span>到<span className="text-amber-400">"老师主动推广"</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
            不是强制进入，而是成为老师教学的"必要延伸"
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-gray-300">分体式架构突破准入</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-gray-300">AI助教换取数据共建</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-800">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-gray-300">四重合规零政策风险</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// 占位内容 - 其他问题
function PlaceholderContent({ categoryId, questionId }: { categoryId: string | null; questionId: string | null }) {
  const categoryNames: Record<string, string> = {
    strategy: '产品策略与准入',
    barrier: '竞争壁垒与差异化',
    business: '商业模式与市场验证',
    status: '项目现状与挑战'
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <Construction className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
          回答完善中
        </h2>
        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
          该问题的详细回答正在整理中，敬请期待。
        </p>
        <div className="bg-[#111] rounded-xl p-4 sm:p-6 border border-gray-800 inline-block">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>类别：{categoryId ? categoryNames[categoryId] : '未知'}</span>
            </div>
            <span className="hidden sm:inline text-gray-700">|</span>
            <span>问题编号：{questionId || '未知'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function QADetail({ categoryId, questionId, onBackToList, onBackToHome }: QADetailProps) {
  // 判断是否显示问题一的完整内容
  const isQ1 = categoryId === 'strategy' && questionId === 'q1-1';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* 主要按钮：返回目录页（第二级） */}
            <button 
              onClick={onBackToList}
              className="flex items-center gap-1.5 sm:gap-2 text-white hover:text-amber-400 transition-colors bg-gray-800/50 hover:bg-gray-800 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium">返回目录</span>
            </button>
            {/* 次要按钮：返回首页（第一级） */}
            <button 
              onClick={onBackToHome}
              className="text-gray-500 hover:text-gray-300 transition-colors text-xs sm:text-sm"
            >
              首页
            </button>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-gray-500 text-xs sm:text-sm">
              {categoryId === 'strategy' ? '一' : categoryId === 'barrier' ? '二' : categoryId === 'business' ? '三' : '四'}
              -{questionId?.split('-')[1] || '1'}
            </span>
            <span className="font-semibold hidden sm:inline">投资人问答</span>
          </div>
          
          <div className="w-16 sm:w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <span className="text-amber-500 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 block">
            {categoryId === 'strategy' ? 'Q1 · Strategic Challenge' : 
             categoryId === 'barrier' ? 'Q2 · Competitive Barrier' :
             categoryId === 'business' ? 'Q3 · Business Model' : 'Q4 · Current Status'}
          </span>
          
          {isQ1 ? (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="sm:hidden">公立校管控极严，如何解决"进校难"和"合规录音"？</span>
                <span className="hidden sm:block">
                  公立校对电子设备管控极严，
                  <br />
                  <span className="text-gray-500">你们如何解决</span>
                  <span className="text-amber-400">"进校难"</span>
                  <span className="text-gray-500">和</span>
                  <span className="text-amber-400">"合规录音"</span>
                  <span className="text-gray-500">的问题？</span>
                </span>
              </h1>
              
              <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 pl-4 sm:pl-8 py-6 sm:py-8 pr-4 sm:pr-6 rounded-r-xl sm:rounded-r-2xl">
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  我们利用<Highlight>"分体式时空解耦"</Highlight>架构，以<Highlight>"智能文具"</Highlight>定义突破校园的物理准入壁垒；通过<Highlight>"AI 助教"</Highlight>的利他价值换取老师的数据共建，从而打通从<Highlight>"校内无感采集"</Highlight>到<Highlight>"家庭个性化应用"</Highlight>的完整闭环。
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight mb-6 sm:mb-8 text-gray-400">
                回答完善中...
              </h1>
              
              <div className="bg-gradient-to-r from-gray-500/10 via-gray-500/5 to-transparent border-l-4 border-gray-500 pl-4 sm:pl-8 py-6 sm:py-8 pr-4 sm:pr-6 rounded-r-xl sm:rounded-r-2xl">
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  该问题的详细回答正在整理中，敬请期待。
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 问题内容 - 条件渲染 */}
      {isQ1 ? <Q1Content /> : <PlaceholderContent categoryId={categoryId} questionId={questionId} />}

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
