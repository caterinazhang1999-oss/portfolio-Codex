# PROJECT_CONTEXT

## 项目目标
- 个人设计作品集网站：展示 Xuan Zhang / Atena Studio 的品牌、数字设计、游戏设计、vibe coding 作品。
- 优先目标：强视觉表达、清晰作品浏览、可下载/外链作品集、快速联系。
- 内容主线：Home 的个人叙事 + Selected projects + Capabilities，Work 页统一承载作品归档与筛选，详情页展示单个项目。

## 技术栈
- Next.js 14 App Router，React 18，TypeScript。
- Tailwind CSS 3 + `app/globals.css` 自定义全局样式。
- Framer Motion 负责 reveal、hover、cursor、preloader 动效。
- `next/image` 管理图片资源，静态资源位于 `public/`。
- `lucide-react` 用于少量图标。
- 构建输出：`next.config.mjs` 设置 `output: "standalone"`。

## 页面结构
- `app/layout.tsx`：全站 metadata、Manrope 字体、`ScrollActivity`。
- `app/page.tsx`：首页；顺序为 `Preloader`、`Header`、`Hero`、`FeaturedVisual`、`About`、`Selected projects`、`Capabilities`、`Footer`。
- `app/work/page.tsx`：作品列表页；按 URL query `category` 同步筛选状态。
- `app/work/[slug]/page.tsx`：项目详情页；从 `data/projects.ts` 静态生成详情、metadata、前后项目导航。
- `data/projects.ts`：作品、分类、能力项、hover 图片、详情图集的单一数据源。

## 主要组件结构
- `components/site-chrome.tsx`：`Header`、`Footer`、共享 `reveal` 动效配置。
- `components/scroll-activity.tsx`：滚动方向 class 与底部 blur 层。
- `components/floating-cursor-label.tsx`：作品 hover 的跟随标签。
- `components/capability-image-trail.tsx`：Capabilities hover 图片轨迹。
- 首页本地组件：`Preloader`、`Hero`、`FeaturedVisual`、`PersonalIntro`、`ProjectPreviewImage`、`ProjectCard`、`ProjectsEditorial`、`Capabilities`。
- Work 页本地组件：`WorkProjectRow`。

## 当前设计风格
- 基调：黑色 editorial portfolio，冷灰文字，高对比，大字号压缩标题。
- 字体：展示标题使用本地 Druk Text Trial；正文/界面使用 Manrope 变量字体。
- 网格：桌面 12 列，移动端 4 列；全局间距来自 `--page-x` 和 `--grid-gap`。
- 视觉：大图、视频、作品 hover 模糊/放大、能力区图片 trail、弹性玻璃导航、轻微噪点纹理。
- 色彩：主背景 `#000`，正文 `--ash: #c5c5c5`；About 和项目详情使用浅色块 `#f4f4f1`。
- 交互：Framer Motion reveal、滚动缩放反馈、hover cursor label、横向项目 carousel、sticky work filter。

## 修改原则
- 先看 `data/projects.ts`，优先用数据驱动新增/调整作品。
- 新增作品资源放入 `public/`，再在 `data/projects.ts` 补齐 `image`、`workImage`、`heroImage`、`hoverImages`、`gallery`。
- 页面结构改动优先保持现有组件边界；跨页面复用才提取到 `components/`。
- 样式优先延续 `app/globals.css` 里的设计语言和 CSS 变量。
- 修改布局时同时检查桌面、平板、移动端网格。
- 修改动效时保留 `prefers-reduced-motion` 兜底。
- 修改外链、邮箱、下载文件时同步检查可访问性和 `rel/target/download`。

## 禁止行为
- 不要无目的重构全站结构。
- 不要绕过 `data/projects.ts` 在页面里硬编码作品数据。
- 不要删除用户新增的 `public/` 资源或设计系统文档。
- 不要把首页改成营销 landing page；首页应直接呈现作品集体验。
- 不要引入新 UI 框架或大型依赖，除非任务明确需要。
- 不要把全局设计改成单一浅色、卡片化或模板化 SaaS 风格。
- 不要在未确认前替换作者姓名、邮箱、Behance/portfolio 链接。

## 常用工作流程
- 查看状态：`git status --short --branch`
- 启动开发：`npm run dev`
- 构建验证：`npm run build`
- Lint：`npm run lint`
- 新增作品：准备资源到 `public/` -> 更新 `data/projects.ts` -> 检查 `/work` 筛选 -> 检查 `/work/[slug]` 详情。
- 调整首页：先定位 `app/page.tsx` 对应本地组件，再补 `app/globals.css` 响应式样式。
- 调整导航/页脚：修改 `components/site-chrome.tsx`，再检查 Home、Work、Detail 三类页面。
- 调整视觉系统：优先改 CSS 变量、字体、全局 class；避免分散的局部覆盖。
