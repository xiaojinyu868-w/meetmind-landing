import { Brain, Layers, Target, Sparkles, Cpu, BookOpen } from 'lucide-react'

type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface VisionSectionProps {
  secondaryIdentity?: SecondaryIdentity
}

export default function VisionSection({ secondaryIdentity = null }: VisionSectionProps) {
  // 只给投资人/渠道商显示
  if (!secondaryIdentity?.startsWith('partner')) {
    return null
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sunny/20 text-navy font-medium rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            中长期愿景
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
            定义<span className="text-orange">个性化学习</span>的新范式
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            教育的终极形态是「千人千面」，但过去做不到——因为不了解学生，也不了解学习场景。
            MeetMind 正在构建个性化学习的双引擎架构，让 AI 真正「懂学习者」+「懂学习场景」。
          </p>
        </div>

        {/* 双引擎架构 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 学习者画像引擎 */}
          <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sunny/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-sunny/20 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-sunny" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">学习者画像引擎</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                教育专属记忆大模型，持续沉淀每一次交互、对话、学习行为，
                构建越来越完善的学习者画像。越用越懂你。
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  记忆沉淀
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  画像构建
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  越用越懂
                </span>
              </div>
            </div>
          </div>

          {/* 上下文理解引擎 */}
          <div className="bg-gradient-to-br from-orange to-orange/90 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">上下文理解引擎</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                多模态学习场景全量接入：课堂音频、课件文档、视频链接、
                学情系统...让 AI 真正「听过这节课」。
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  课堂音频
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  课件文档
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  视频链接
                </span>
                <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  持续拓展
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 应用矩阵展示 */}
        <div className="bg-cream rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-navy rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-sunny" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">基于双引擎的应用矩阵</h3>
                <p className="text-gray-500">因为「懂你」+「懂场景」，所以精准有效</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Cpu, title: '课堂私教', desc: '哪里不会问哪里，引用老师原话' },
              { icon: BookOpen, title: '智能测验', desc: '基于课堂内容生成针对性练习' },
              { icon: Layers, title: '知识闪卡', desc: '自动生成记忆卡片，碎片时间复习' },
              { icon: Brain, title: '思维导图', desc: '一键生成知识图谱，理清逻辑' },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange/30 hover:shadow-lg transition-all"
              >
                <item.icon className="w-8 h-8 text-orange mb-4" />
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 未来拓展 */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500">
              <span className="text-orange font-medium">未来拓展：</span>
              第三方开发者生态 · 更多上下文类型 · 跨场景学习追踪
            </p>
          </div>
        </div>

        {/* 投资逻辑总结 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-navy rounded-full text-white">
            <Sparkles className="w-5 h-5 text-sunny" />
            <span className="font-medium">投资逻辑：不是投一个工具，是投下一代学习基础设施</span>
          </div>
        </div>
      </div>
    </section>
  )
}
