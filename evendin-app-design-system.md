# Evendin App Design System v1

来源：Figma 文件 `evendin`，重点节点 `343:1903 / 01 Marco - 商业机会列表`，辅助参考 `343:5586 / 01 Giulia - 活动发现首页`。当前 Figma 文件内暂无本地 Variables、Text Styles、Paint Styles、Effect Styles，且 `Design system` 画板为空；以下规范为基于现有界面提炼出的 v1 设计系统。

## 1. 设计系统总览

Evendin 的视觉语言是轻背景上的高对比活动/机会卡片：暖白页面底色、深色玻璃卡片、浅蓝紫描边、紧凑移动端信息层级，以及 28px 图标和胶囊式筛选控件。界面应优先服务移动端浏览、快速筛选、活动/机会卡片扫描与轻量行动。

基础原则：

- 信息优先级清晰：页面标题最大，卡片标题强对比，描述与元信息降噪。
- 控件轻量但可触达：主要交互高度不低于 42px，次级芯片为 28px，图标按钮保持 28px 视觉尺寸。
- 视觉重心克制：浅背景承托内容，深色卡片制造沉浸感，蓝紫描边只用于可交互元素。
- 可扩展：用 4px/8px spacing scale、语义色和组件 token 管理页面扩展。

## 2. Typography 字体系统

字体家族：

- Display / Emphasis：`MD Primer Trial`, fallback `Inter, system-ui, sans-serif`
- UI / Body：`Jost`, fallback `Inter, system-ui, sans-serif`
- Utility / Search / 多语言界面：`Inter`, fallback `Noto Sans SC, system-ui, sans-serif`
- 中文内容建议：`Noto Sans SC`, fallback `PingFang SC, Microsoft YaHei, sans-serif`

字体层级：

| Token | 字体 | 字重 | 字号 | 行高 | 字距 | 使用场景 |
|---|---:|---:|---:|---:|---:|---|
| `font.display.page-title` | MD Primer Trial | Bold 700 | 40px | Auto / 44px | 0 | 页面主标题，如 Opportunità |
| `font.title.card` | MD Primer Trial | Semibold 600 | 18px | Auto / 22px | 4% | 深色卡片标题 |
| `font.title.section` | Inter | Semibold 600 | 18px | 24px | 0 | 首页分区标题、价格/行动区 |
| `font.title.compact` | MD Primer Trial | Medium 500 | 16px | 20px | 0 | 卡片价格、底部摘要 |
| `font.body.md` | Inter/Jost | Regular 400 | 14px | 20px | 0 | 用户名、搜索输入较大文案 |
| `font.body.sm` | Jost/Inter | Regular 400 | 12px | 16px | 0 | 芯片、按钮、列表元信息 |
| `font.meta.sm` | Jost | Light 300 | 12px | 122% / 15px | 0 | 卡片地点、时间、类型 |
| `font.caption` | Inter | Regular 400 | 11px | 14px | 0 | 底部导航标签、微型状态 |
| `font.button.md` | Inter | Medium 500 | 12px | 16px | 0 | 主搜索按钮 |
| `font.button.sm` | Jost | Regular 400 | 12px | 16px | 0 | 卡片内小按钮 |

使用建议：

- 页面级标题优先使用 `MD Primer Trial Bold 40`，不要在卡片或控件内部滥用 40px。
- 正文和列表可统一到 Inter/Jost 12-14px；中文密集列表建议 Inter/Noto Sans SC，避免 Jost 中文 fallback 不稳定。
- 卡片标题当前使用 4% 字距，建议仅用于深色卡片标题，不用于正文。

## 3. Color System 颜色系统

核心色：

| Token | HEX / RGB | 用途 |
|---|---|---|
| `color.background.default` | `#FFFEFA` / `rgb(255,254,250)` | App 默认页面背景 |
| `color.surface.default` | `#FFFFFF` / `rgb(255,255,255)` | 输入框、芯片、浅色卡片 |
| `color.surface.subtle` | `#F5F5F5` / `rgb(245,245,245)` | 首页搜索/轻背景模块 |
| `color.surface.muted` | `#FAFAFA` / `rgb(250,250,250)` | 次级页面区域 |
| `color.surface.dark` | `#0E0E10` / `rgb(14,14,16)` | 主按钮、深色控件 |
| `color.surface.deep` | `#0B1C23` / `rgb(11,28,35)` | 深色卡片内按钮 |
| `color.primary.500` | `#A0C9CB` / `rgb(160,201,203)` | 品牌浅青、辅助文案、部分价格强调 |
| `color.primary.100` | `#D0E8FF` / `rgb(208,232,255)` | 选中芯片背景 |
| `color.accent.blue` | `#4698FF` / `rgb(70,152,255)` | 交互描边高光 |
| `color.accent.violet` | `#947FFF` / `rgb(148,127,255)` | 交互描边高光 |
| `color.accent.warm` | `#FFCB7D` / `rgb(255,203,125)` | 复合描边暖色高光 |
| `color.accent.orange` | `#F46539` / `rgb(244,101,57)` | 活动图标/节日气氛强调 |
| `color.text.primary` | `#000000` / `rgb(0,0,0)` | 主文字 |
| `color.text.strong` | `#1A1A1A` / `rgb(26,26,26)` | 导航选中、强文本 |
| `color.text.secondary` | `#666666` / `rgb(102,102,102)` | 输入提示、次级文字 |
| `color.text.tertiary` | `#808080` / `rgb(128,128,128)` | 列表辅助信息 |
| `color.text.placeholder` | `#999999` / `rgb(153,153,153)` | 搜索 placeholder |
| `color.text.disabled` | `#B3B3B3` / `rgb(179,179,179)` | 禁用/未选中导航 |
| `color.text.inverse` | `#FFFFFF` / `rgb(255,255,255)` | 深色背景文字 |
| `color.border.default` | `#E0E0E0` / `rgb(224,224,224)` | 芯片边框 |
| `color.border.subtle` | `#EBEBEB` / `rgb(235,235,235)` | 浅色分割线 |
| `color.divider.inverse` | `rgba(255,255,255,0.20)` | 深色卡片分割线 |

卡片渐变：

- `gradient.card.teal`: `linear-gradient(180deg, rgba(0,24,34,0.96), #000000)`
- `gradient.card.warm`: `linear-gradient(180deg, rgba(20,6,0,0.96), #000000)`
- `gradient.card.magenta`: `linear-gradient(180deg, rgba(19,0,12,0.96), #000000)`
- `gradient.button.primary`: `linear-gradient(90deg, #0E0E10 0%, #111822 50%, #0E0E10 100%)`
- `stroke.interactive.glow`: radial layers using `#4698FF`, `#947FFF`, `#FFCB7D`, and soft white highlights.

状态色：

| Token | HEX / RGB | 用途 | 可读性建议 |
|---|---|---|---|
| `color.success.500` | `#33B266` / `rgb(51,178,102)` | 成功、免费/正向状态 | 白底小字对比不足，正文建议用 `#1E874B` |
| `color.warning.500` | `#FFB020` / `rgb(255,176,32)` | 警告、即将截止 | 配深色文字使用 |
| `color.error.500` | `#FF3333` / `rgb(255,51,51)` | 错误、危险状态 | 白底小字建议用 `#D92D20` |
| `color.info.500` | `#4698FF` / `rgb(70,152,255)` | 信息、可点击提示 | 可与蓝紫描边体系统一 |
| `color.disabled.bg` | `#F2F2F2` / `rgb(242,242,242)` | 禁用背景 | 搭配 `#B3B3B3` |

对比度：

- `#000000` on `#FFFEFA` 约 20.81:1，适合主标题和正文。
- `#FFFFFF` on `#0E0E10` 约 19.28:1，适合深色按钮和卡片。
- `#666666` on `#FFFFFF` 约 5.74:1，可用于 12px 输入提示。
- `#A0C9CB` on `#FFFEFA` 约 1.78:1，仅建议用于装饰性辅助文案，不应用作关键信息正文。
- `#808080` on `#FFFFFF` 约 3.95:1，小字号说明文字需谨慎，重要信息建议加深到 `#666666`。

## 4. Spacing & Layout 间距与布局系统

基础单位：使用 4px grid，主要页面间距采用 8px 递进。

| Token | 值 | 用途 |
|---|---:|---|
| `spacing.2` | 2px | 图标与元信息文字间距 |
| `spacing.4` | 4px | 芯片上下 padding、头像文字间距 |
| `spacing.6` | 6px | 卡片元信息行间距 |
| `spacing.8` | 8px | 小组件内部间距 |
| `spacing.10` | 10px | 芯片组 gap、卡片列表 gap |
| `spacing.12` | 12px | 卡片主区域 gap、按钮内 gap |
| `spacing.14` | 14px | 芯片水平 padding |
| `spacing.16` | 16px | 输入框/按钮水平 padding |
| `spacing.20` | 20px | 页面标题后间距 |
| `spacing.24` | 24px | 页面模块间距 |
| `spacing.32` | 32px | 大模块分隔 |

布局规则：

- 设计基准宽度：393-394px。
- 页面水平安全边距：主控件 15px；卡片列表 13px；内容最大宽度约 368px。
- 顶部状态区高度：约 43px；主标题从 y=77px 开始。
- 搜索区参考图宽度：364px；图标搜索按钮版本为输入框 294px + gap 14px + 搜索按钮 56px；文本主按钮版本可用输入框 267px + gap 25px + 按钮 72px。
- 卡片分体总宽：368px；列表垂直间距 10-12px。
- 卡片媒体区：108 x 225px；右侧深色信息卡约 258 x 225px；两者之间 gap 2px；右侧信息有效内容宽约 226px。
- 底部导航：高度 60px，左右 padding 38px，item gap 44px，固定吸底。
- 移动端适配：360-430px 宽度内保持 13-16px 页边距；卡片宽度使用 `calc(100vw - 26px)`，图片区固定 108px，右侧内容自适应。

参考图对齐与间距规则：

- 所有主模块左边缘遵循两条网格：页面主控件左边距 15px；卡片列表左边距 13px。
- 搜索、筛选、卡片列表在视觉上必须形成清晰纵向轴线，不应出现随机缩进。
- Header 到搜索区、搜索到筛选、筛选到卡片列表使用 16-24px 节奏；卡片之间使用 10-12px。
- Search row 内部垂直居中；输入框和按钮同高 42px。
- Filter row 的 chip 基线、图标按钮中心线必须一致；chip 之间 gap 10px。
- Opportunity card 内部内容从右卡左边缘向内 17px 开始，顶部 padding 17px，右侧 padding 15px，底部 padding 15px。
- 卡片标题到状态组 12px；状态组两行行距 4px；状态组到元信息组 29-32px。
- 元信息行高 15px，行间距 8-10px；图标与文字 gap 10-12px。
- 元信息组到底部分割线约 28-30px；分割线到底部价格/CTA 约 20px。
- 价格和 CTA 底部对齐，CTA 垂直居中于 36px 触控区。

## 5. Border Radius 圆角规范

| Token | 值 | 用途 |
|---|---:|---|
| `radius.xs` | 2px | 马赛克/微装饰块 |
| `radius.sm` | 8px | 卡片内小按钮、标签 |
| `radius.md` | 16px | 卡片、图片容器、底部导航选中态 |
| `radius.lg` | 20px | 搜索输入框 |
| `radius.pill` | 50px / 999px | 主按钮、筛选芯片、胶囊控件 |
| `radius.full` | 999px | 头像、圆形图标按钮 |

使用规则：

- 卡片和图片统一 16px，保持活动内容的柔和感。
- 输入框 20px，按钮/芯片采用 pill，强化可点击性。
- 不建议新增超过 24px 的大圆角卡片，避免破坏当前紧凑风格。

## 6. Button System 按钮规范

Primary Button：

- 高度：42px
- 最小宽度：72px；宽度随内容扩展
- Padding：0 16px
- 圆角：`radius.pill`
- 字体：Inter Medium 12 / 16
- 背景：`gradient.button.primary`
- 文字：`color.text.inverse`
- 描边：1px `stroke.interactive.glow`
- 状态：pressed 降低亮度 8%；focused 显示 2px 外发光 `rgba(70,152,255,0.32)`；disabled 使用 `#F2F2F2` + `#B3B3B3`
- 使用场景：搜索、页面主操作

Icon Search Button：

- 参考图视觉尺寸：56 x 42px；移动端触控热区保持 56 x 42px 或外层 56 x 44px。
- 圆角：pill / 21px。
- 背景：`gradient.button.primary`，中心深黑，边缘带低亮度蓝紫 glow border。
- 图标：搜索 icon 22px，stroke 1.6-1.8px，颜色 `#D0E8FF` 或白色 90%。
- 与搜索输入 gap：14px。
- 用于仅展示搜索图标的搜索行；如果按钮含文字，则使用 Primary Button 的 72 x 42px 版本。

Secondary Button：

- 高度：28-36px
- 圆角：8px 或 pill
- 背景：`#0B1C23` 或 `#FFFFFF`
- 描边：1px `stroke.interactive.glow`
- 字体：Jost Regular 12
- 使用场景：卡片内 `Applicare`、局部行动

Card CTA Button：

- 视觉尺寸：约 90 x 36px；最低不小于 74 x 28px。
- 触控热区：建议 44px 高，可通过透明外层扩大，不改变视觉尺寸。
- 圆角：14-16px，参考图为小胶囊圆角，不是 8px 直角按钮。
- 背景：深色 `#0B1C23` / `#0E0E10`。
- 描边：1px 蓝紫渐变 glow border，可带轻微暖色端点。
- 文案：白色，Jost/Inter 12-13px，Medium 500。
- 图标：右上箭头 13-15px，颜色 `#D0E8FF`。
- 布局：价格在左、CTA 在右，底部基线对齐。

Tertiary / Text Button：

- 高度：32px
- 背景：透明
- 字体：Inter/Jost Regular 12-14
- 颜色：`color.text.primary` 或 `color.info.500`
- 使用场景：轻量跳转、取消、更多

统一状态规则：

- Hover：浅色按钮背景加深 4%，深色按钮亮度提升 4%，描边高光保持。
- Pressed：scale 0.98 或背景亮度降低 8%，持续 100-120ms。
- Focused：添加 `focus.ring`，不改变组件尺寸。
- Disabled：背景 `#F2F2F2`，文字/图标 `#B3B3B3`，描边 `#E0E0E0`，禁用 hover/pressed。

Icon Button：

- 视觉尺寸：28 x 28px
- 推荐点击热区：44 x 44px
- Stroke：1.5px；filter icon 可用 1.17px
- 默认颜色：深色背景上白色 60%；浅色背景上黑色 80%
- Active：可使用渐变图标或黑色容器

Floating Action Button：

- 当前界面未出现；如新增，建议 56 x 56px，圆角 999px，背景 `gradient.button.primary`，图标 24px，阴影 `shadow.fab`。

Loading / Disabled：

- Loading：保留按钮宽高，文字替换为 16px spinner 或 icon；不可改变布局宽度。
- Disabled：背景 `#F2F2F2`，文字/图标 `#B3B3B3`，描边 `#E0E0E0`，禁用 hover/pressed。

## 7. Component Style 组件规范

Navigation Bar：

- 顶部状态栏高约 43px，页面内容从状态栏下方留出 28-34px。
- 页面标题使用 40px，左边距 15px。
- 右侧用户头像 51px，名称 14px，徽标 10px，可作为账户入口。

Bottom Tab Bar：

- 容器：参考 Figma node `348:17961`，约 393-394 x 60px，固定底部。
- 背景：`rgba(0,0,0,0.16)` + glass blur 57。
- Padding：左右 30px；item gap 56px；items 垂直居中。
- Active：66 x 42px，黑色背景，16px 圆角，图标 28px。
- Inactive：图标 32px，白色 stroke，opacity 80%；有文字版本时使用 11px，inactive `#B3B3B3`。
- 生成效果图时若需要保留标签，标签应弱化，不改变 Figma nav 的 60px 高度和图标中心线。

Search Bar：

- 参考图搜索区总宽：364px，左边距 15px。
- 图标搜索按钮版本：输入框 294 x 42px，gap 14px，按钮 56 x 42px。
- 文本搜索按钮版本：输入框 267 x 42px，gap 25px，按钮 72 x 42px。
- 搜索输入：白底，20-21px 圆角，1px 蓝紫暖色复合渐变描边，padding 0 16px。
- Placeholder：Inter Regular 14 / 20，`#666666`；密集界面可用 12px。
- 搜索按钮：pill，深色渐变背景，1px 蓝紫复合描边，图标 22px。
- Search row 所有元素必须垂直中心对齐，不能出现按钮比输入框更高或更低。
- 搜索输入外描边应轻薄，不能变成粗霓虹框；hover/focus 才增强 glow。

Tag / Chip：

- 高度：28px。
- Padding：4px 14px。
- Gap：芯片之间 10px。
- Active：`#D0E8FF` 背景，蓝紫复合描边 0.8px。
- Inactive：白底，`#E0E0E0` 0.8px 描边。
- 字体：Jost Regular 12，黑色 80%。

Filter Row Reference：

- 参考图 chip 高度固定 28px，垂直中心线一致。
- Active chip `Tutti` 约 42 x 28px；短中文 active chip 可扩展到 100-110px，但高度仍为 28px。
- 中等 chip 如 `Qualificati` 约 80 x 28px；长 chip 如 `Al momento` 约 90-92 x 28px。
- Chip gap：10px；filter icon 与 chip rail 之间保持 12-18px，根据屏宽调整。
- Active 浅色筛选：`#D0E8FF` 背景 + 蓝色描边 + 极轻 glow。
- Wireframe 中文 active chip `本周末` 指定背景：`#CEECFF`，文字黑色 85-90%，可保留小白/深色 icon；边框使用蓝紫轻描边。
- Active 深色筛选：用于强操作或 wireframe 黑色按钮，使用 `gradient.button.primary` + 白字 + 白色 18px 图标。
- Inactive chip：白底、`#E0E0E0` 1px border、黑色 80% 文案，不加厚重阴影。
- Filter icon button：视觉图标 24-28px，点击热区 44 x 44px；图标 stroke 使用蓝紫渐变感，不能是默认黑色漏斗。

Opportunity Card：

- 参考图类型：分体式横向机会卡，不是单块整卡。
- 总体尺寸：368 x 225px，卡片列表左右边距 13px。
- 左侧媒体：108 x 225px，圆角 16-18px，object-fit cover，独立成卡。
- 左侧媒体与右侧信息卡 gap：2px，可轻微贴合但不可重叠到破坏圆角。
- 右侧信息卡：约 258 x 225px，圆角 22-24px，深色线性渐变，glass blur 100。
- 右侧信息卡背景：不是透明浅玻璃，而是深黑渐变玻璃。可用 teal/warm/magenta tint。
- 右侧信息卡描边：1px 极细蓝紫 glow edge，克制，不做强霓虹外框。
- 右侧内容 padding：top 17px，left 17px，right 15px，bottom 15px；有效内容宽约 226px。
- 标题：MD Primer Trial / Inter Semibold 18px / 22px，白色，字重 600-700；可保留轻微 4% 字距。
- 标题最长一行约 190-210px；过长时优先换行，不压缩字号到不可读。
- 状态与余量：Jost/Inter 12px / 16px，白色 92%；状态行可加 `✓`，状态和余量行间距 2-4px。
- 标题到状态组：约 12px；状态组到元信息组：约 29-32px。
- 元信息：图标 15-16px，文字 Jost Light/Regular 12px / 15px，颜色 rgba(255,255,255,0.72-0.80)。
- 元信息行：三行结构固定为 location / date / type；图标与文字 gap 10-12px；行间距 8-10px。
- 分割线：1px，`rgba(255,255,255,0.20)`，可用细虚线或低透明实线；位于元信息组与底部价格区之间。
- 分割线距底部价格区：约 20px。
- 底部：价格 16-17px / 20px，Semibold 600；CTA 约 90 x 36px，右对齐。
- 卡片之间：垂直 gap 10-12px；不要大于 16px。
- 左图处理：真实活动氛围图 + 暗角 + 蓝紫/暖橙叠色；底部隐私块可用半透明 blur 小块，不能使用原始灰色马赛克。
- 右卡信息必须完整可扫读：标题、资格、剩余名额、地点、日期、类型、分割线、价格、CTA 均不可省略。

Opportunity Card Response Spec（生成响应专用）：

这张参考图的卡片区域，准确风格不是“普通磨砂玻璃卡片”，而是：

**左侧独立氛围图片 + 右侧深色机会信息卡的分体式横向卡片。**

卡片结构：

- 每条活动卡由两个并排模块组成：左侧竖向图片卡，右侧深色信息卡。
- 左图宽约 `108px`，高约 `225px`，独立圆角，不是嵌在右侧卡片里。
- 右侧信息卡宽度更大，高度与左图一致，圆角更大，约 `22–24px`。
- 两个模块之间有很小的间距或轻微贴合，形成“拼接式机会卡”效果。

左侧图片风格：

- 使用真实活动氛围图：舞台、嘉年华面具、灯光、人群、展览。
- 图片是竖向裁切，强烈沉浸感。
- 底部有半透明模糊方块 / 隐私遮罩效果，不是灰色占位块。
- 图片整体有暗角、蓝紫或暖橙叠色，增强夜间活动氛围。

右侧信息卡风格：

- 深色玻璃质感，但不是透明浅玻璃，而是“深黑渐变玻璃卡”。
- 背景以黑色为底，叠加方向性渐变：
  - 第一张偏深青黑：`#061C22 → #000000`
  - 第二张偏暖棕黑：`#1A0802 → #000000`
  - 第三张偏紫红黑：`#19000C → #000000`
- 卡片边缘有非常细的蓝紫高光描边，整体克制，不是强霓虹边框。
- 右侧卡片内部留白充足，信息纵向排列清晰。

信息层级：

- 标题最大、最亮：白色，约 `24–28px`，粗体。
- 资格与剩余名额靠近标题，白色，形成快速判断。
- 地点、日期、类型使用浅灰白，透明度约 `65–75%`。
- 图标是细线 outline，颜色跟随元信息，低对比但清楚。
- 分割线是细虚线或低透明白线。
- 价格在底部左侧，字号较大。
- CTA 在底部右侧，是小型胶囊 / 圆角按钮。

按钮规范描述：

- CTA 不是实心亮色按钮。
- 使用深色背景，圆角约 `14–16px`。
- 边框为蓝紫渐变描边。
- 文案白色，右侧有小箭头图标。
- 按钮视觉尺寸约 `90 × 36px`，但保留触控感。

可用于生成图的卡片区域提示词：

```text
Use split horizontal opportunity cards: a separate vertical event image tile on the left and a larger dark glass information panel on the right. The left media tile is about 108px wide and 225px tall, fully rounded with 18–20px radius, showing real event atmosphere photography with dark vignette, blue/purple or warm orange lighting, and subtle frosted privacy blocks near the bottom. The right panel is the same height, wider, with 22–24px rounded corners, deep black gradient glass background, subtle teal/warm/magenta tint, very fine blue-violet glow edge, and premium high-contrast typography.

Inside the right panel: large bold white event title, qualification status and remaining slots below, three muted metadata rows with thin outline icons, a low-opacity divider line, then price on the bottom left and a compact dark CTA button on the bottom right. CTA uses dark fill, 14–16px radius, blue/violet glow border, white text, and a small arrow icon. The card should feel like a premium urban event opportunity card, not a flat list card and not a gray placeholder.
```

Generic Card：

- 背景：`color.surface.default` 或深色渐变，按内容类型选择。
- 圆角：16px。
- Padding：16px；密集列表可降到 12px。
- 边框：浅色卡片使用 `#EBEBEB` 1px；深色卡片使用内部 divider，不加外边框。
- 使用场景：活动推荐、列表聚合、账户信息块。

Modal / Bottom Sheet：

- Overlay：`rgba(0,0,0,0.36)`。
- Modal 宽度：移动端左右保留 24px 安全边距；圆角 16px。
- Bottom Sheet：全宽，顶部圆角 20px 20px 0 0，背景白色。
- Padding：顶部 16px，左右 20px，底部遵循 safe area。
- Handle：36 x 4px，圆角 999px，颜色 `#D9D9D9`。
- 标题：Inter Semibold 18；正文 Inter/Jost 13-14；主操作使用 Primary 或 Secondary Button。

Input Field：

- 默认高度 42px，圆角 20px，padding 0 16px。
- 默认背景白色，描边可使用 `stroke.interactive.glow`。
- Focus 状态保持描边并增加 2px 外发光。
- Error 状态使用 `color.error.500` 描边，辅助文字使用 12px。

List Item：

- 标题：Inter Semibold 16。
- 时间/位置：Inter Regular 12-13，`#808080` 或 `#666666`。
- 价格/行动：Inter Semibold 18。
- 建议最小高度 72px，左右 padding 16px。

Avatar：

- 用户头像：51 x 51px，圆形。
- 小徽标：10 x 10px，贴右下角。
- 列表头像建议 40px / 48px 两档。

Divider：

- 浅色背景：`#EBEBEB`，1px。
- 深色卡片：`rgba(255,255,255,0.20)`，1px。

Toast / Alert：

- Toast：深色背景 `#0E0E10`，白字，圆角 12px，padding 12px 16px。
- Success：使用 `#1E874B` 文本或图标，避免小字号直接用 `#33B266` 在白底上。
- Error：使用 `#D92D20` 文本或图标，正文保持 12-14px。

Empty State：

- 插图或图标 48-64px。
- 标题 Inter Semibold 16，正文 Inter Regular 13，按钮使用 Secondary。
- 背景保持 `#FFFEFA`，不要使用大面积单色块。

## 8. Effects 视觉效果规范

| Token | 参数 | 使用场景 |
|---|---|---|
| `effect.glass.card` | blur 100 | 深色机会卡片背景 |
| `effect.glass.tabbar` | blur 57 | 底部导航背景 |
| `effect.overlay.image-teal` | linear `rgba(160,201,203,0.65)` to transparent | 第一张活动图顶部氛围 |
| `effect.overlay.image-orange` | linear `rgba(255,85,0,0.52)` to transparent | 暖色活动图 |
| `effect.overlay.image-pink` | linear `rgba(223,156,210,0.72)` to transparent | 粉色活动图 |
| `shadow.card` | `0 8px 24px rgba(0,0,0,0.12)` | 若需要从背景中抬升浅色卡片 |
| `shadow.fab` | `0 12px 32px rgba(14,14,16,0.24)` | FAB 或浮层主操作 |
| `focus.ring` | `0 0 0 2px rgba(70,152,255,0.32)` | 键盘焦点 |

交互反馈：

- Pressed：按钮和芯片整体 scale 0.98 或亮度 -8%，持续 100-120ms。
- Hover：移动端可不定义；桌面预览时提高边框亮度或背景亮度 4%。
- Focus：必须有可见 focus ring，尤其搜索、筛选、底部导航。
- Overlay：弹窗遮罩用 `rgba(0,0,0,0.36)`；Bottom Sheet 背景白色，圆角 20px 20px 0 0。

## 9. Iconography 图标规范

- 风格：线性 outline 为主，关键 active icon 可使用渐变填充。
- 尺寸：底部导航、筛选、卡片辅助图标统一 28px / 16px 两档。
- Stroke：常规图标 1.5px；filter icon 约 1.17px。
- 圆角：线性图标端点和转角保持 round；几何图标保持简洁。
- Active：黑色容器 + 彩色渐变 icon，或文字/图标使用 `#1A1A1A`。
- Inactive：深色底部栏中白色 60%；浅色背景中 `#B3B3B3`。
- 图标与文字间距：卡片元信息 2px，按钮内 6-8px，导航标签 4px。

## 10. Design Tokens

```css
:root {
  --color-background-default: #fffefa;
  --color-surface-default: #ffffff;
  --color-surface-subtle: #f5f5f5;
  --color-surface-muted: #fafafa;
  --color-surface-dark: #0e0e10;
  --color-surface-deep: #0b1c23;

  --color-primary-100: #d0e8ff;
  --color-primary-500: #a0c9cb;
  --color-accent-blue: #4698ff;
  --color-accent-violet: #947fff;
  --color-accent-warm: #ffcb7d;
  --color-accent-orange: #f46539;

  --color-text-primary: #000000;
  --color-text-strong: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-tertiary: #808080;
  --color-text-placeholder: #999999;
  --color-text-disabled: #b3b3b3;
  --color-text-inverse: #ffffff;

  --color-border-default: #e0e0e0;
  --color-border-subtle: #ebebeb;
  --color-divider-inverse: rgba(255, 255, 255, 0.20);

  --color-success-500: #33b266;
  --color-success-accessible: #1e874b;
  --color-warning-500: #ffb020;
  --color-error-500: #ff3333;
  --color-error-accessible: #d92d20;
  --color-info-500: #4698ff;
  --color-disabled-bg: #f2f2f2;

  --font-family-display: "MD Primer Trial", Inter, system-ui, sans-serif;
  --font-family-body: Jost, Inter, system-ui, sans-serif;
  --font-family-ui: Inter, "Noto Sans SC", system-ui, sans-serif;

  --font-size-caption: 11px;
  --font-size-body-sm: 12px;
  --font-size-body-md: 14px;
  --font-size-title-compact: 16px;
  --font-size-title-card: 18px;
  --font-size-display: 40px;

  --line-height-caption: 14px;
  --line-height-body-sm: 16px;
  --line-height-body-md: 20px;
  --line-height-title-compact: 20px;
  --line-height-title-card: 22px;
  --line-height-display: 44px;

  --letter-spacing-default: 0;
  --letter-spacing-card-title: 0.04em;

  --spacing-2: 2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;

  --radius-xs: 2px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  --gradient-button-primary: linear-gradient(90deg, #0e0e10 0%, #111822 50%, #0e0e10 100%);
  --gradient-card-teal: linear-gradient(180deg, rgba(0,24,34,0.96) 0%, #000000 100%);
  --gradient-card-warm: linear-gradient(180deg, rgba(20,6,0,0.96) 0%, #000000 100%);
  --gradient-card-magenta: linear-gradient(180deg, rgba(19,0,12,0.96) 0%, #000000 100%);
  --stroke-interactive-glow-blue: #4698ff;
  --stroke-interactive-glow-violet: #947fff;
  --stroke-interactive-glow-warm: #ffcb7d;

  --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-fab: 0 12px 32px rgba(14, 14, 16, 0.24);
  --focus-ring: 0 0 0 2px rgba(70, 152, 255, 0.32);
  --blur-card-glass: 100px;
  --blur-tabbar-glass: 57px;
}
```

组件 token：

```json
{
  "button.primary.height": "42px",
  "button.primary.paddingX": "16px",
  "button.primary.radius": "radius.pill",
  "button.primary.background": "gradient.button.primary",
  "button.primary.border": "stroke.interactive.glow",
  "button.secondary.height": "28px",
  "button.secondary.radius": "radius.sm",
  "chip.height": "28px",
  "chip.paddingX": "14px",
  "chip.paddingY": "4px",
  "chip.radius": "radius.pill",
  "input.search.height": "42px",
  "input.search.width.mobile": "267px",
  "input.search.radius": "radius.lg",
  "card.opportunity.width": "calc(100vw - 26px)",
  "card.opportunity.maxWidth": "368px",
  "card.opportunity.height": "225px",
  "card.opportunity.radius": "radius.md",
  "card.opportunity.mediaWidth": "108px",
  "tabbar.height": "60px",
  "tabbar.paddingX": "38px",
  "tabbar.itemGap": "44px",
  "tabbar.active.width": "71px",
  "tabbar.active.height": "42px"
}
```

## 11. 使用建议

- 先在 Figma 中创建 `Primitives` 与 `Semantic` 两层 Variables：颜色、间距、圆角、字体尺寸分开管理。
- 将 `MD Primer Trial` 限定在标题和价格等品牌表达场景；常规 UI 组件统一 Inter/Jost。
- `#A0C9CB` 很有品牌感，但在浅背景上对比度不足，应作为装饰/辅助，不承担关键阅读信息。
- 后续新增页面应优先复用 Search Bar、Chip、Opportunity Card、Bottom Tab Bar 四个核心组件。
- 组件库落地时建议先做 Button、Chip、Search Field、Bottom Tab、Opportunity Card，再补 Modal、Toast、Empty State。
