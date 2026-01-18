// 反馈断层场景 - 移动端学情追踪概念UI
// 展示精准的学习反馈和漏洞修复

export default function FeedbackGapMockup() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl overflow-hidden shadow-inner">
      {/* 手机框架 */}
      <div className="relative mx-auto w-[280px] py-6">
        {/* 手机外壳 */}
        <div className="relative bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* 刘海 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
          
          {/* 屏幕 */}
          <div className="bg-white rounded-[2rem] overflow-hidden">
            {/* 状态栏 */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 pt-8 pb-4">
              <div className="flex items-center justify-between text-white/80 text-xs mb-4">
                <span>21:32</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-white/60 rounded-sm">
                    <div className="w-1/2 h-full bg-white/60 rounded-sm" />
                  </div>
                </div>
              </div>
              
              {/* 标题区 */}
              <div className="text-white">
                <p className="text-xs opacity-80 mb-1">精准补漏</p>
                <h2 className="text-lg font-semibold">今日课堂断点</h2>
                <p className="text-xs opacity-70 mt-1">3个知识点需要巩固</p>
              </div>
            </div>

            {/* 内容区 */}
            <div className="px-4 py-4 space-y-3" style={{ minHeight: '320px' }}>
              {/* 断点卡片列表 */}
              {[
                {
                  subject: '数学',
                  topic: '二次函数对称轴',
                  time: '10:23',
                  status: 'critical',
                  desc: '老师讲解时走神，错过关键推导',
                  action: '观看3分钟回放',
                },
                {
                  subject: '物理',
                  topic: '牛顿第二定律应用',
                  time: '14:15',
                  status: 'warning',
                  desc: '概念理解但解题步骤不清晰',
                  action: '练习2道例题',
                },
                {
                  subject: '英语',
                  topic: '定语从句省略',
                  time: '15:40',
                  status: 'normal',
                  desc: '基本掌握，需要强化记忆',
                  action: '复习语法点',
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`rounded-xl p-3.5 border transition-all ${
                    item.status === 'critical' 
                      ? 'bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200' 
                      : item.status === 'warning'
                      ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200'
                      : 'bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'critical' 
                          ? 'bg-rose-100 text-rose-600' 
                          : item.status === 'warning'
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {item.subject}
                      </span>
                      <span className="text-xs text-slate-400">{item.time}</span>
                    </div>
                    {item.status === 'critical' && (
                      <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
                    )}
                  </div>
                  <p className="text-sm font-medium text-slate-700 mb-1">{item.topic}</p>
                  <p className="text-xs text-slate-500 mb-2">{item.desc}</p>
                  <button className={`w-full py-2 rounded-lg text-xs font-medium transition-all ${
                    item.status === 'critical'
                      ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white'
                      : item.status === 'warning'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {item.action}
                  </button>
                </div>
              ))}

              {/* 统计卡片 */}
              <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs opacity-80 mb-1">本周修复进度</p>
                    <p className="text-2xl font-bold">89%</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <div className="mt-3 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[89%] bg-white rounded-full" />
                </div>
                <p className="text-xs opacity-70 mt-2">已修复 24/27 个断点</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-xl" />
      </div>
    </div>
  )
}
