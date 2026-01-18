// 信息断层场景 - 家长端学情报告概念UI
// 展示家长如何实时了解孩子的课堂学习情况

export default function InfoGapMockup() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl overflow-hidden shadow-inner">
      {/* 手机框架 */}
      <div className="relative mx-auto w-[280px] py-6">
        {/* 手机外壳 */}
        <div className="relative bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
          {/* 刘海 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
          
          {/* 屏幕 */}
          <div className="bg-white rounded-[2rem] overflow-hidden">
            {/* 状态栏 */}
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 px-6 pt-8 pb-4">
              <div className="flex items-center justify-between text-white/80 text-xs mb-4">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-white/60 rounded-sm">
                    <div className="w-3/4 h-full bg-white/60 rounded-sm" />
                  </div>
                </div>
              </div>
              
              {/* 标题区 */}
              <div className="text-white">
                <p className="text-xs opacity-80 mb-1">今日学习报告</p>
                <h2 className="text-lg font-semibold">小明的数学课</h2>
                <p className="text-xs opacity-70 mt-1">第三章 · 二次函数</p>
              </div>
            </div>

            {/* 内容区 */}
            <div className="px-4 py-4 space-y-4" style={{ minHeight: '320px' }}>
              {/* 课堂理解度卡片 */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-slate-700">课堂理解度</span>
                  <span className="text-2xl font-bold text-emerald-600">87%</span>
                </div>
                {/* 进度条 */}
                <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                    style={{ width: '87%' }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">高于班级平均 12%</p>
              </div>

              {/* 知识点掌握 */}
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <p className="text-sm font-medium text-slate-700 mb-3">知识点掌握</p>
                <div className="space-y-2">
                  {[
                    { name: '顶点式变换', level: 95, color: 'bg-indigo-400' },
                    { name: '图像平移', level: 82, color: 'bg-violet-400' },
                    { name: '对称轴求解', level: 68, color: 'bg-amber-400' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <span className="text-xs text-slate-600 w-20 truncate">{item.name}</span>
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500 w-8">{item.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI 洞察 */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">💡</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-1">AI 学习建议</p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      "对称轴求解"部分需要巩固，建议今晚用15分钟复习例题3-5
                    </p>
                  </div>
                </div>
              </div>

              {/* 底部提示 */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                <span className="text-xs text-slate-400">实时同步中</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-200/40 to-violet-200/40 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-full blur-xl" />
      </div>
    </div>
  )
}
