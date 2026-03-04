import { HelpCircle, Bomb, RefreshCw, Target, Sparkles, Clock, MessageSquare, BarChart3, Brain, Users, TrendingUp, AlertTriangle } from 'lucide-react'

type SecondaryIdentity = 
  | 'parent-primary' | 'parent-middle' | 'parent-high'
  | 'student-middle' | 'student-high' | 'student-uni' | 'student-grad'
  | 'educator-teacher' | 'educator-admin'
  | 'partner-investor' | 'partner-channel'
  | null

interface PainPointsProps {
  secondaryIdentity?: SecondaryIdentity
}

// 小学/初中家长痛点：信息断层 + 辅导冲突 + 盲目焦虑
const parentYoungPainPoints = [
  {
    icon: HelpCircle,
    number: '01',
    title: '孩子学了什么？',
    description: '孩子回家说"听懂了"，一做题全是错。课堂上漏掉了关键的5%，而你根本不知道他漏在哪。信息断层让辅导无从入手。',
    solution: 'AI同桌完整记录课堂，漏掉的知识点一目了然',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: Bomb,
    number: '02',
    title: '一讲题就鸡飞狗跳',
    description: '你的解法和老师不一样，孩子听得一脸懵。辅导作业变成亲子冲突，孩子抵触、家长崩溃，关系越来越紧张。',
    solution: '用老师原话辅导，逻辑一致不再"打架"',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: RefreshCw,
    number: '03',
    title: '盲目焦虑，无处下手',
    description: '不知道孩子哪里需要补，只能盲目报班、刷题。钱花了不少，效果看不见，焦虑却越来越重。',
    solution: '精准定位薄弱环节，把时间花在刀刃上',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

// 高中家长痛点：效率焦虑 + 沟通障碍 + helpless
const parentHighPainPoints = [
  {
    icon: Clock,
    number: '01',
    title: '时间紧，却盲目刷题',
    description: '高三时间宝贵，孩子却还在盲目刷题。会的题反复做，不会的题没人讲，效率低下，提分缓慢。',
    solution: 'AI分析薄弱环节，针对性复习精准提分',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: '想关心，问多了就烦',
    description: '一问学习情况孩子就嫌烦，沟通越来越少。想帮忙帮不上，只能干着急，亲子关系越来越疏远。',
    solution: '学情数据透明，家长心中有数不追问',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: Target,
    number: '03',
    title: '高考冲刺， helpless',
    description: '高考越来越近，想帮孩子却有心无力。自己的知识早就过时，辅导班鱼龙混杂，不知道还能做什么。',
    solution: 'AI同桌24小时在线，随时解答孩子疑惑',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

// 学生痛点（高中/大学/研究生通用）：课堂遗漏 + 复习低效 + 时间不够
const studentPainPoints = [
  {
    icon: Brain,
    number: '01',
    title: '上课走神，漏听关键点',
    description: '一节课45分钟，难免走神漏听。等回过神来，老师已经讲下一个知识点了，后面的内容越听越懵。',
    solution: 'AI同桌完整记录，漏掉的知识点随时回看',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: RefreshCw,
    number: '02',
    title: '笔记记不全，复习无重点',
    description: '奋笔疾书还是记不全，复习时看着残缺笔记一脸茫然。不知道哪些是重点，复习效率低下。',
    solution: '自动生成知识图谱，复习重点一目了然',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: Clock,
    number: '03',
    title: '熬夜学习，效果却差',
    description: '作业做到深夜，成绩却不见提升。缺的不是努力，是高效的学习方法和精准的反馈。',
    solution: '用更少的时间，获得更高的学习效果',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

// 教师痛点：负担重 + 反馈慢 + 难改进
const teacherPainPoints = [
  {
    icon: MessageSquare,
    number: '01',
    title: '课后答疑，占用大量时间',
    description: '同样的知识点，不同学生反复问。课后答疑占用大量私人时间，疲惫不堪，却不好意思拒绝。',
    solution: 'AI助教7×24小时答疑，减轻教师负担',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: HelpCircle,
    number: '02',
    title: '不知道学生哪里没懂',
    description: '课堂上问"听懂了吗"，学生都说懂了。一考试才发现很多人没懂，却为时已晚，只能开班会批评。',
    solution: '实时学情数据，精准定位知识盲区',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: '教学效果，缺乏数据反馈',
    description: '凭经验教学，却不知道哪些方法有效。想改进教学，却缺乏客观数据支撑，只能摸着石头过河。',
    solution: '如公开课点评般的专业教学反馈',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

// 教育管理者痛点：管理难 + 教师累 + 决策盲
const adminPainPoints = [
  {
    icon: Users,
    number: '01',
    title: '全校学情，难以掌握',
    description: '各班级学情如何？哪些学生需要重点关注？教学质量问题出在哪？缺乏数据，管理只能靠经验和直觉。',
    solution: '全校学情一屏掌握，数据驱动精准管理',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: AlertTriangle,
    number: '02',
    title: '教师负担重，流失率高',
    description: '教师工作量大、压力大，优秀人才留不住。想减负，却找不到有效的工具和方法。',
    solution: 'AI助教为教师减负，提升职业幸福感',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: BarChart3,
    number: '03',
    title: '教育决策，缺乏数据支撑',
    description: '教学改革方向对不对？资源投入有没有效果？没有数据支撑，决策风险大、效果难评估。',
    solution: '全方位教学数据分析，科学决策有据可依',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

// 投资人/渠道商痛点：赛道乱 + 窗口期 + 验证难
const partnerPainPoints = [
  {
    icon: AlertTriangle,
    number: '01',
    title: 'AI教育概念多，落地少',
    description: '市面上AI教育产品层出不穷，大多是概念炒作。真正解决痛点、能落地的产品凤毛麟角，投资风险大。',
    solution: '技术已闭环，数据生产线已跑通，不是概念是产品',
    color: 'bg-sunny',
    iconBg: 'bg-sunny/20',
  },
  {
    icon: Clock,
    number: '02',
    title: '窗口期有限，大厂随时入局',
    description: 'AI教育赛道窗口期只有12-18个月，字节、腾讯等大厂一旦反应过来，竞争将瞬间白热化。',
    solution: '2026年是关键占位年，我们正在完成物理占位',
    color: 'bg-sky',
    iconBg: 'bg-sky/20',
  },
  {
    icon: Target,
    number: '03',
    title: '需要看到真实验证数据',
    description: '不是听故事，是要看真实数据。产品有没有人用？用户留不留得住？商业模式跑不跑得通？',
    solution: '45分钟音频→300字脚本，数据冷启动已启动',
    color: 'bg-mint',
    iconBg: 'bg-mint/20',
  }
]

// 默认痛点（家长版）
const defaultPainPoints = parentYoungPainPoints

const sectionTitles: Record<string, { badge: string; title: string; subtitle: string; cta: string }> = {
  'parent-primary': { badge: '家长的真实困扰', title: '这些场景，你一定不陌生', subtitle: '不是孩子不努力，是学习链路断了', cta: 'MeetMind：把漏掉的5%，变成进步的100%' },
  'parent-middle': { badge: '家长的真实困扰', title: '这些场景，你一定不陌生', subtitle: '不是孩子不努力，是学习链路断了', cta: 'MeetMind：把漏掉的5%，变成进步的100%' },
  'parent-high': { badge: '高考家长的焦虑', title: '高三这一年，最难的是家长', subtitle: '想帮忙帮不上，只能干着急', cta: 'MeetMind：让家长的关心，变成孩子的助力' },
  'student-middle': { badge: '初中生的学习痛点', title: '这些困境，你是否也在经历', subtitle: '不是不够努力，是方法不对', cta: 'MeetMind：打好基础，养成好习惯' },
  'student-high': { badge: '高中生的学习痛点', title: '这些困境，你是否也在经历', subtitle: '不是不够努力，是方法不对', cta: 'MeetMind：用更少的时间，获得更高的效果' },
  'student-uni': { badge: '大学生的学习痛点', title: '这些困境，你是否也在经历', subtitle: '大学不是终点，是新的起点', cta: 'MeetMind：让专业课学习更轻松' },
  'student-grad': { badge: '研究生的效率痛点', title: '研究时间宝贵，不该浪费在笔记上', subtitle: '把更多时间花在创新上', cta: 'MeetMind：提升学术研究效率' },
  'educator-teacher': { badge: '教师的真实负担', title: '这些困扰，每天都在发生', subtitle: '不是不想教好，是精力有限', cta: 'MeetMind：让教师回归教学本质' },
  'educator-admin': { badge: '管理者的真实困境', title: '这些难题，制约着学校发展', subtitle: '不是不想管好，是缺乏数据支撑', cta: 'MeetMind：数据驱动教育管理' },
  'partner-investor': { badge: '投资人的核心关切', title: '这些风险，需要真实答案', subtitle: '不是听故事，是要看数据', cta: 'MeetMind：逻辑已闭环，爆发前夜' },
  'partner-channel': { badge: '渠道商的核心关切', title: '这些顾虑，需要明确回应', subtitle: '不是找产品，是找长期伙伴', cta: 'MeetMind：共享AI教育新蓝海' },
  default: { badge: '家长的真实困扰', title: '这些场景，你一定不陌生', subtitle: '不是孩子不努力，是学习链路断了', cta: 'MeetMind：把漏掉的5%，变成进步的100%' },
}

export default function PainPoints({ secondaryIdentity = null }: PainPointsProps) {
  // 根据身份选择对应的痛点
  let painPoints = defaultPainPoints
  
  if (secondaryIdentity) {
    if (secondaryIdentity.startsWith('parent-primary') || secondaryIdentity.startsWith('parent-middle')) {
      painPoints = parentYoungPainPoints
    } else if (secondaryIdentity.startsWith('parent-high')) {
      painPoints = parentHighPainPoints
    } else if (secondaryIdentity.startsWith('student')) {
      painPoints = studentPainPoints
    } else if (secondaryIdentity.startsWith('educator-teacher')) {
      painPoints = teacherPainPoints
    } else if (secondaryIdentity.startsWith('educator-admin')) {
      painPoints = adminPainPoints
    } else if (secondaryIdentity.startsWith('partner')) {
      painPoints = partnerPainPoints
    }
  }

  const titles = secondaryIdentity ? (sectionTitles[secondaryIdentity] || sectionTitles.default) : sectionTitles.default

  return (
    <section id="pain-points" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 text-coral-dark rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            {titles.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {titles.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {titles.subtitle}
          </p>
        </div>

        {/* Pain Points Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-sunny/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 ${point.color} rounded-full flex items-center justify-center font-bold text-navy shadow-md text-lg`}>
                {point.number}
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${point.iconBg} flex items-center justify-center mb-6`}>
                <point.icon className={`w-7 h-7 text-navy`} aria-hidden="true" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{point.description}</p>
              
              {/* Solution Tag */}
              <div className={`inline-flex items-center gap-2 px-3 py-2 ${point.iconBg} rounded-lg`}>
                <Sparkles className="w-3.5 h-3.5 text-navy" aria-hidden="true" />
                <span className="text-sm font-medium text-navy">{point.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-sunny/20 to-orange/20 rounded-2xl">
            <Target className="w-6 h-6 text-orange" aria-hidden="true" />
            <span className="text-navy font-semibold text-lg">
              {titles.cta}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
