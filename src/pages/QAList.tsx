import { useState } from 'react';
import { 
  ChevronRight, ChevronDown, ArrowLeft, FileText,
  Shield, Target, TrendingUp, AlertCircle,
  Cpu, Users, Clock, Building2, Lightbulb
} from 'lucide-react';

interface QAListProps {
  onSelectQA: (categoryId: string, questionId: string) => void;
  onBackToHome: () => void;
}

// 四大类问题结构
const categories = [
  {
    id: 'strategy',
    number: '一',
    title: '产品策略与准入',
    subtitle: '如何解决"进校难"和"合规录音"',
    icon: Target,
    color: 'amber',
    summary: '分体式时空解耦架构、智能文具定位、AI助教利他价值、四重合规体系',
    questions: [
      {
        id: 'q1-1',
        title: '公立校对电子设备管控极严，你们如何解决"进校难"和"合规录音"的问题？',
        hasContent: true
      }
    ]
  },
  {
    id: 'barrier',
    number: '二', 
    title: '竞争壁垒与差异化',
    subtitle: '为什么是我们来做',
    icon: Shield,
    color: 'blue',
    summary: '技术壁垒、数据壁垒、团队基因优势、大厂竞争应对',
    questions: [
      { 
        id: 'q2-1', 
        title: '项目的壁垒在哪里？为什么是我们来做？', 
        subtitle: '涵盖：技术壁垒/数据壁垒/大厂竞争/差异化优势/团队基因/真正的对手',
        hasContent: true 
      },
    ]
  },
  {
    id: 'business',
    number: '三',
    title: '商业模式与市场验证',
    subtitle: '商业闭环与Timing',
    icon: TrendingUp,
    color: 'green',
    summary: '目标用户、商业模式、市场战略、为什么是现在',
    questions: [
      { id: 'q3-1', title: '目标用户是谁？', hasContent: false },
      { id: 'q3-2', title: '用户人群已经确认了吗？', hasContent: false },
      { id: 'q3-3', title: '市场战略是什么？', hasContent: false },
      { id: 'q3-4', title: '商业模式是什么？', hasContent: false },
      { id: 'q3-5', title: '商业闭环是什么？', hasContent: false },
      { id: 'q3-6', title: '为什么是现在做？（Timing）', hasContent: false },
    ]
  },
  {
    id: 'status',
    number: '四',
    title: '项目现状与挑战',
    subtitle: '阶段验证与最大挑战',
    icon: AlertCircle,
    color: 'purple',
    summary: '信用背书、项目阶段、0-1验证、最大挑战',
    questions: [
      { id: 'q4-1', title: '信用背书是什么？', hasContent: false },
      { id: 'q4-2', title: '遇到的最大挑战是什么？', hasContent: false },
      { id: 'q4-3', title: '目前处于什么阶段？', hasContent: false },
      { id: 'q4-4', title: '是否已经完成了0-1的市场验证？', hasContent: false },
    ]
  }
];

const colorMap: Record<string, string> = {
  amber: 'from-amber-500 to-orange-600 border-amber-500/30 text-amber-400 bg-amber-500/10',
  blue: 'from-blue-500 to-blue-600 border-blue-500/30 text-blue-400 bg-blue-500/10',
  green: 'from-green-500 to-emerald-600 border-green-500/30 text-green-400 bg-green-500/10',
  purple: 'from-purple-500 to-violet-600 border-purple-500/30 text-purple-400 bg-purple-500/10',
};

export default function QAList({ onSelectQA, onBackToHome }: QAListProps) {
  const [expandedCategory, setExpandedCategory] = useState<string>('strategy');

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? '' : id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium text-sm sm:text-base">返回首页</span>
          </button>
          
          <div className="flex items-center gap-1.5 sm:gap-2">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
            <span className="font-semibold text-sm sm:text-base">投资人问答</span>
          </div>
          
          <div className="w-16 sm:w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-500 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 block">
            Investor Relations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            投资人问答
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            深入了解 MeetMind 的产品逻辑、竞争壁垒、商业模式与项目现状
          </p>
        </div>
      </section>

      {/* 四大类问题 */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div 
                key={category.id}
                className={`rounded-xl sm:rounded-2xl border transition-all ${isExpanded ? 'border-gray-700' : 'border-gray-800 hover:border-gray-700'}`}
              >
                {/* 类别标题 - 可点击展开 */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-4 sm:p-6 text-left"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* 编号 & 图标 */}
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2 shrink-0">
                      <span className="text-2xl sm:text-3xl font-bold text-gray-600">
                        {category.number}
                      </span>
                      <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${colorMap[category.color].split(' ')[0]} ${colorMap[category.color].split(' ')[1]} flex items-center justify-center`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                    </div>

                    {/* 内容 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {category.title}
                        </h3>
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 shrink-0" />
                        ) : (
                          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 shrink-0" />
                        )}
                      </div>
                      <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${colorMap[category.color].split(' ')[2]}`}>
                        {category.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {category.summary}
                      </p>
                    </div>
                  </div>
                </button>

                {/* 展开的问题列表 */}
                {isExpanded && (
                  <div className="border-t border-gray-800">
                    {category.questions.map((question, index) => (
                      <button
                        key={question.id}
                        onClick={() => onSelectQA(category.id, question.id)}
                        disabled={!question.hasContent}
                        className={`w-full text-left p-4 border-b border-gray-800 last:border-b-0 transition-colors ${
                          question.hasContent 
                            ? 'hover:bg-[#151515] group' 
                            : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-start gap-2 sm:gap-3 mb-1">
                              <span className="text-xs text-gray-600 font-mono shrink-0 mt-0.5">
                                Q{category.number}-{index + 1}
                              </span>
                              <span className={`text-sm leading-relaxed ${question.hasContent ? 'text-gray-300 group-hover:text-white' : 'text-gray-500'}`}>
                                {question.title}
                              </span>
                            </div>
                            {question.subtitle && (
                              <p className="text-xs text-gray-600 pl-6 sm:pl-9">
                                {question.subtitle}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {!question.hasContent && (
                              <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded whitespace-nowrap">
                                待完善
                              </span>
                            )}
                            {question.hasContent && (
                              <ChevronRight className="h-4 w-4 text-gray-600 group-hover:text-amber-500 transition-colors shrink-0" />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 底部 */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">
            共 {categories.reduce((acc, c) => acc + c.questions.length, 0)} 个问题 · 持续更新中
          </p>
          <button 
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            返回官网首页
          </button>
        </div>
      </section>
    </div>
  );
}
