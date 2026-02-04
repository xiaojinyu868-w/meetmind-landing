import { useState } from 'react';
import { 
  Cpu, Shield, Users, ChevronRight, ChevronLeft, Zap, 
  Target, Lock, TrendingUp, BarChart3, Lightbulb, 
  ArrowRight, CheckCircle2, Layers, Box, Hexagon
} from 'lucide-react';

// 风格1: 苹果发布会风 - 电影级极简
const AppleStyle = () => (
  <div className="space-y-0">
    {/* Hero - 超大字体电影感 */}
    <div className="min-h-[70vh] flex flex-col justify-center px-12 py-20 bg-black">
      <span className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-6">Strategic Challenge 01</span>
      <h1 className="text-6xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl">
        进校难？
        <br />
        <span className="text-gray-500">根本不是问题。</span>
      </h1>
      <p className="mt-8 text-xl text-gray-400 max-w-2xl leading-relaxed">
        分体式时空解耦架构。校内采集，家庭应用。零阻力进入任何校园。
      </p>
    </div>

    {/* 产品分解 - 苹果式滚动展示 */}
    <div className="bg-[#f5f5f7] py-24 px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900 mb-16">双设备架构。</h2>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <div className="h-16 w-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">采集胶囊</h3>
            <p className="text-gray-500 mt-2">校内端</p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                无屏设计，纯文具定位
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                远场拾音，声纹锁定
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                单机存储，零网络传输
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <div className="h-16 w-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">伴学基座</h3>
            <p className="text-gray-500 mt-2">家庭端</p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                数据自动回流
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                AI 个性化辅导
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                完整学习闭环
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* 核心数据 - 大数字冲击 */}
    <div className="bg-black py-24 px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
        <div>
          <div className="text-6xl font-semibold text-white">100%</div>
          <div className="text-gray-500 mt-2">政策合规</div>
          <div className="text-gray-600 text-sm mt-4">无屏文具定位，不受电子设备管控限制</div>
        </div>
        <div>
          <div className="text-6xl font-semibold text-white">95%+</div>
          <div className="text-gray-500 mt-2">声纹准确率</div>
          <div className="text-gray-600 text-sm mt-4">嘈杂教室精准提取老师音轨</div>
        </div>
        <div>
          <div className="text-6xl font-semibold text-amber-400">0</div>
          <div className="text-gray-500 mt-2">进校阻力</div>
          <div className="text-gray-600 text-sm mt-4">特洛伊木马策略，老师主动推广</div>
        </div>
      </div>
    </div>
  </div>
);

// 风格2: 麦肯锡咨询风 - 逻辑金字塔
const McKinseyStyle = () => (
  <div className="bg-white min-h-screen">
    {/* 顶部导航条 */}
    <div className="bg-[#051c2c] text-white px-8 py-4 flex items-center justify-between">
      <span className="font-semibold tracking-wider">MEETMIND</span>
      <span className="text-sm text-gray-400">INVESTOR Q&A | 01</span>
    </div>

    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* 核心问题 */}
      <div className="border-l-4 border-[#00a9ce] pl-6 py-2 mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">核心挑战</p>
        <h1 className="text-3xl font-bold text-gray-900">
          公立学校对电子设备实施严格管控，如何解决产品"进校难"问题？
        </h1>
      </div>

      {/* 金字塔结构 - 结论先行 */}
      <div className="bg-[#051c2c] text-white rounded-lg p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="bg-[#00a9ce] text-white text-xs font-bold px-2 py-1 rounded">结论</div>
          <div>
            <p className="text-xl font-semibold leading-relaxed">
              通过"分体式时空解耦"架构重新定义产品形态，以"智能文具"身份突破准入壁垒；
              同时以"AI 助教"的利他价值换取教师群体支持，实现从"强制推广"到"自然渗透"的转变。
            </p>
          </div>
        </div>
      </div>

      {/* 三大支柱 */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 bg-[#00a9ce] rounded flex items-center justify-center text-white font-bold">1</div>
            <span className="font-semibold text-gray-900">产品架构</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            采集胶囊（校内）+ 伴学基座（家庭）。时空解耦设计，校内零网络、零传输、纯文具定位。
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 bg-[#00a9ce] rounded flex items-center justify-center text-white font-bold">2</div>
            <span className="font-semibold text-gray-900">推广策略</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            特洛伊木马策略。先让老师成为受益者（AI 助教提效），再由老师向家长推荐学生端设备。
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 bg-[#00a9ce] rounded flex items-center justify-center text-white font-bold">3</div>
            <span className="font-semibold text-gray-900">合规保障</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            资产分离原则。学校采购教师端（智慧校园资产），家长自愿购买学生端（个人文具）。
          </p>
        </div>
      </div>

      {/* 数据支撑 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-[#00a9ce]" />
          关键指标
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#051c2c]">100%</div>
            <div className="text-xs text-gray-500 mt-1">政策合规率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#051c2c]">95%+</div>
            <div className="text-xs text-gray-500 mt-1">声纹识别准确率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#051c2c]">80%+</div>
            <div className="text-xs text-gray-500 mt-1">教师接受度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#051c2c]">0</div>
            <div className="text-xs text-gray-500 mt-1">学校沟通成本</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 风格3: 硅谷路演风 - YC Demo Day风格
const YCStyle = () => (
  <div className="bg-[#0a0a0a] text-white min-h-screen">
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* 简洁标题 */}
      <div className="mb-16">
        <p className="text-[#ff6600] font-mono text-sm mb-4">PROBLEM → SOLUTION</p>
        <h1 className="text-5xl font-bold leading-tight">
          Schools ban electronics.
          <br />
          <span className="text-gray-500">We don't look like electronics.</span>
        </h1>
      </div>

      {/* 痛点直击 */}
      <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8 border border-gray-800">
        <div className="flex items-center gap-3 text-red-400 mb-4">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <span className="font-mono text-sm">THE PROBLEM</span>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed">
          Public schools in China have <span className="text-white font-semibold">zero-tolerance policies</span> for electronic devices. 
          Phones, tablets, and smartwatches are completely banned. This is a $50B edtech market that's been locked.
        </p>
      </div>

      {/* 解决方案 */}
      <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8 border border-[#ff6600]/30">
        <div className="flex items-center gap-3 text-[#ff6600] mb-4">
          <div className="h-2 w-2 rounded-full bg-[#ff6600]" />
          <span className="font-mono text-sm">OUR SOLUTION</span>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          We built a <span className="text-white font-semibold">split-form decoupled architecture</span>. 
          A screen-free "Capsule" collects audio at school (it's classified as stationery, not electronics). 
          A "Hub" at home processes the data and provides AI tutoring.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
            <Cpu className="h-6 w-6 text-gray-400 mb-3" />
            <div className="font-semibold">Campus Capsule</div>
            <div className="text-sm text-gray-500 mt-1">No screen. No wifi. Just records.</div>
          </div>
          <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800">
            <Zap className="h-6 w-6 text-[#ff6600] mb-3" />
            <div className="font-semibold">Home Hub</div>
            <div className="text-sm text-gray-500 mt-1">AI analysis. Personalized tutoring.</div>
          </div>
        </div>
      </div>

      {/* 增长飞轮 */}
      <div className="mb-8">
        <p className="font-mono text-sm text-gray-500 mb-4">THE FLYWHEEL</p>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="h-16 w-16 bg-[#ff6600] rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-sm">Give Teachers AI</div>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-600" />
          <div className="text-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div className="text-sm">They Want Data</div>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-600" />
          <div className="text-center">
            <div className="h-16 w-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-sm">Parents Buy In</div>
          </div>
        </div>
      </div>

      {/* 核心指标 */}
      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
        <div>
          <div className="text-4xl font-bold text-[#ff6600]">100%</div>
          <div className="text-gray-500 text-sm mt-1">Compliance Rate</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white">95%+</div>
          <div className="text-gray-500 text-sm mt-1">Voice Accuracy</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white">0</div>
          <div className="text-gray-500 text-sm mt-1">Sales Resistance</div>
        </div>
      </div>
    </div>
  </div>
);

// 风格4: 建筑精密风 - 包豪斯/工业设计
const BauhausStyle = () => (
  <div className="bg-[#e8e6e1] min-h-screen font-mono">
    {/* 顶部标尺 */}
    <div className="bg-[#1a1a1a] text-white px-8 py-3 flex items-center justify-between text-xs tracking-widest">
      <span>MEETMIND INDUSTRIAL</span>
      <div className="flex gap-8">
        <span>QA-01</span>
        <span>REV.02</span>
        <span>2024</span>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* 工程标题 */}
      <div className="border-b-2 border-[#1a1a1a] pb-6 mb-12">
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-6xl font-bold text-[#1a1a1a]">01</span>
          <span className="text-sm text-gray-500 tracking-widest">CHALLENGE</span>
        </div>
        <h1 className="text-2xl font-bold text-[#1a1a1a] max-w-2xl">
          公立学校电子设备准入限制与合规录音的技术实现路径
        </h1>
      </div>

      {/* 系统架构图 */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="h-5 w-5 text-[#c41e3a]" />
          <span className="font-bold text-sm tracking-widest">SYSTEM ARCHITECTURE</span>
        </div>
        
        <div className="bg-white border-2 border-[#1a1a1a] p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* 校内单元 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#c41e3a]" />
              <div className="pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Box className="h-6 w-6 text-[#1a1a1a]" />
                  <span className="font-bold text-lg">UNIT A</span>
                </div>
                <h3 className="text-xl font-bold mb-2">采集胶囊</h3>
                <p className="text-sm text-gray-600 mb-4">CAPTURE CAPSULE</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#c41e3a]" />
                    <span>无屏硬件设计</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#c41e3a]" />
                    <span>远场麦克风阵列</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#c41e3a]" />
                    <span>本地离线存储</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#c41e3a]" />
                    <span>零网络传输</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 家庭单元 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#1a1a1a]" />
              <div className="pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Hexagon className="h-6 w-6 text-[#1a1a1a]" />
                  <span className="font-bold text-lg">UNIT B</span>
                </div>
                <h3 className="text-xl font-bold mb-2">伴学基座</h3>
                <p className="text-sm text-gray-600 mb-4">LEARNING HUB</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#1a1a1a]" />
                    <span>数据无线同步</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#1a1a1a]" />
                    <span>AI 语音分析</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#1a1a1a]" />
                    <span>个性化内容生成</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-[#1a1a1a]" />
                    <span>家长端可视化</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 连接指示 */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-300">
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="text-gray-500">时空解耦</span>
              <div className="h-px w-20 bg-[#1a1a1a]" />
              <span className="font-bold">校内采集 → 家庭处理</span>
              <div className="h-px w-20 bg-[#1a1a1a]" />
              <span className="text-gray-500">合规闭环</span>
            </div>
          </div>
        </div>
      </div>

      {/* 技术指标表格 */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-5 w-5 text-[#c41e3a]" />
          <span className="font-bold text-sm tracking-widest">TECHNICAL SPECIFICATIONS</span>
        </div>
        
        <table className="w-full border-2 border-[#1a1a1a] bg-white">
          <thead className="bg-[#1a1a1a] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs tracking-widest">PARAMETER</th>
              <th className="px-4 py-3 text-left text-xs tracking-widest">VALUE</th>
              <th className="px-4 py-3 text-left text-xs tracking-widest">NOTE</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Policy Compliance</td>
              <td className="px-4 py-3">100%</td>
              <td className="px-4 py-3 text-gray-600">文具定位，非电子设备</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Voice Recognition Accuracy</td>
              <td className="px-4 py-3">≥95%</td>
              <td className="px-4 py-3 text-gray-600">40+人嘈杂教室环境</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 font-medium">Teacher Adoption Rate</td>
              <td className="px-4 py-3">≥80%</td>
              <td className="px-4 py-3 text-gray-600">AI助教价值驱动</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Data Security</td>
              <td className="px-4 py-3">Bank-grade</td>
              <td className="px-4 py-3 text-gray-600">本地存储+自动销毁</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 底部执行摘要 */}
      <div className="bg-[#1a1a1a] text-white p-6">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="h-5 w-5 text-[#c41e3a]" />
          <span className="font-bold text-sm tracking-widest">EXECUTIVE SUMMARY</span>
        </div>
        <p className="text-gray-300 leading-relaxed">
          通过分体式架构重新定义产品形态，以"智能文具"突破准入壁垒，以"AI助教"换取教师支持，
          实现零阻力校园渗透。资产分离原则确保合规，特洛伊木马策略驱动增长。
        </p>
      </div>
    </div>
  </div>
);

// 风格5: 金融时报风 - 严肃商业新闻
const FTStyle = () => (
  <div className="bg-[#fff1e5] min-h-screen">
    {/* 经典报头 */}
    <div className="border-b-4 border-[#9e2f50] pb-4 mb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <span className="text-[#9e2f50] font-serif text-2xl font-bold italic">MeetMind</span>
          <span className="text-gray-500 text-sm">Investor Briefing · Q1 2024</span>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 pb-16">
      {/* 大标题 */}
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#333] leading-tight mb-4">
        How a Chinese edtech start-up found a way into the world's most restrictive classrooms
      </h1>
      
      <p className="text-xl text-gray-600 font-serif italic mb-8 border-b border-gray-300 pb-6">
        Split-form 'spatiotemporal decoupling' architecture allows screen-free campus presence
      </p>

      {/* 作者信息 */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <span>By MeetMind Team</span>
        <span>|</span>
        <span>Strategic Analysis</span>
      </div>

      {/* 首字下沉 */}
      <div className="prose prose-lg max-w-none">
        <p className="first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:font-bold first-letter:text-[#9e2f50]">
          Chinese public schools operate under some of the world's strictest electronic device policies. 
          Phones, tablets, and smartwatches are uniformly banned. For edtech companies, this has long 
          represented an impenetrable barrier to a $50 billion market opportunity.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          MeetMind's solution lies in what the company calls <span className="font-semibold text-[#9e2f50]">"spatiotemporal decoupling"</span> — 
          a split-form architecture that physically separates data collection from processing. 
          The campus unit, called the "Capture Capsule," is deliberately designed without screens, 
          network connectivity, or any feature that might classify it as an electronic device.
        </p>

        {/* 引用块 */}
        <blockquote className="border-l-4 border-[#9e2f50] pl-6 my-8 italic text-xl text-gray-700">
          "We don't sell electronics. We sell stationery that happens to be very smart."
        </blockquote>

        <p className="text-gray-700 leading-relaxed">
          The device is classified as a learning aid rather than a controlled mobile terminal, 
          placing it in the same regulatory category as a paper notebook or voice recorder.
        </p>

        {/* 数据框 */}
        <div className="bg-white border border-gray-200 p-6 my-8">
          <h3 className="font-serif font-bold text-lg mb-4 text-[#333]">The Two-Unit System</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#9e2f50] mb-2">Campus: Capture Capsule</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Screen-free, game-free design</li>
                <li>• Far-field microphone array</li>
                <li>• Local offline storage only</li>
                <li>• No network transmission</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#9e2f50] mb-2">Home: Learning Hub</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wireless data sync</li>
                <li>• AI-powered analysis</li>
                <li>• Personalized tutoring</li>
                <li>• Parent dashboard</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          The go-to-market strategy employs what management terms a "Trojan Horse" approach. 
          Rather than targeting parents directly, MeetMind first provides teachers with an 
          "AI Teaching Assistant" system at no cost. Once educators experience productivity 
          gains — automated lesson summaries, reduced parent communication overhead, 
          data-driven teaching insights — they become advocates for the student-facing product.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          This creates a unique B2B2C dynamic where the school facilitates adoption without 
          bearing procurement costs. Parents purchase student devices as "personal learning supplies," 
          circumventing regulations against institutional device purchases.
        </p>
      </div>

      {/* 底部关键数据 */}
      <div className="mt-12 pt-8 border-t-2 border-[#9e2f50]">
        <div className="grid grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-serif font-bold text-[#9e2f50]">100%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Policy Compliance</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#333]">95%+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Voice Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#333]">80%+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Teacher Adoption</div>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-[#333]">Zero</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Sales Resistance</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 风格6: 高端深色科技 - 太空舱/特斯拉风
const TeslaStyle = () => (
  <div className="bg-black text-white min-h-screen">
    {/* 视频感标题区 */}
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-blue-400 text-sm tracking-[0.5em] uppercase mb-6">The School Entry Problem</p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6">
          SOLVED
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Decoupled architecture. Zero friction. Total compliance.
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>

    {/* 产品展示 - 太空舱风格 */}
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Dual-Unit System</h2>
          <p className="text-gray-500">Separated by space and time. United by intelligence.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* 胶囊 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative bg-[#111] rounded-3xl p-10 border border-gray-800 h-full">
              <div className="absolute top-6 right-6 text-xs text-gray-600 font-mono">UNIT-01</div>
              <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/25">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Capture Capsule</h3>
              <p className="text-blue-400 text-sm mb-6">Campus Unit</p>
              
              <div className="space-y-4">
                {['Screen-free stationery design', 'Far-field voice capture', 'Offline local storage', 'Zero network transmission'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="h-1 w-8 bg-blue-500/50" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 基座 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            <div className="relative bg-[#111] rounded-3xl p-10 border border-gray-800 h-full">
              <div className="absolute top-6 right-6 text-xs text-gray-600 font-mono">UNIT-02</div>
              <div className="h-20 w-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/25">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Learning Hub</h3>
              <p className="text-amber-400 text-sm mb-6">Home Unit</p>
              
              <div className="space-y-4">
                {['Automatic data sync', 'AI analysis engine', 'Personalized tutoring', 'Parent dashboard'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="h-1 w-8 bg-amber-500/50" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 数据展示 - 太空风格 */}
    <div className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-8">
          {[
            { value: '100%', label: 'Compliance', sub: 'Policy certified' },
            { value: '95%+', label: 'Accuracy', sub: 'Voice recognition' },
            { value: '80%+', label: 'Adoption', sub: 'Teacher support' },
            { value: '0', label: 'Friction', sub: 'Campus entry' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 底部CTA */}
    <div className="py-24 text-center px-6">
      <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">The Strategy</p>
      <h2 className="text-3xl font-bold mb-6">Trojan Horse Deployment</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Give teachers AI superpowers. Let them do the selling.
      </p>
    </div>
  </div>
);

export default function StylePreview() {
  const [activeStyle, setActiveStyle] = useState(0);

  const styles = [
    { name: '苹果发布会', desc: '电影级极简，超大留白', component: AppleStyle },
    { name: '麦肯锡咨询', desc: '逻辑金字塔，结论先行', component: McKinseyStyle },
    { name: '硅谷路演', desc: 'YC风格，直击痛点', component: YCStyle },
    { name: '工业设计', desc: '包豪斯精密，工程图纸', component: BauhausStyle },
    { name: '金融时报', desc: '严肃新闻，深度分析', component: FTStyle },
    { name: '特斯拉科技', desc: '太空舱，未来感', component: TeslaStyle },
  ];

  const ActiveComponent = styles[activeStyle].component;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 风格选择器 */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">选择 Q&A 页面风格</h1>
            <span className="text-sm text-gray-500">共 {styles.length} 种风格</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {styles.map((style, index) => (
              <button
                key={index}
                onClick={() => setActiveStyle(index)}
                className={`px-4 py-2 rounded-lg text-left whitespace-nowrap transition-all ${
                  activeStyle === index
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="font-medium text-sm">{style.name}</div>
                <div className={`text-xs ${activeStyle === index ? 'text-gray-400' : 'text-gray-500'}`}>
                  {style.desc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 预览区 */}
      <div className="pt-36">
        <ActiveComponent />
      </div>

      {/* 底部反馈 */}
      <div className="bg-white border-t py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-2">当前预览: <span className="font-semibold">{styles[activeStyle].name}</span></p>
          <p className="text-sm text-gray-500">请告诉我你喜欢哪种风格，或需要调整的地方</p>
        </div>
      </div>
    </div>
  );
}
