# Atena Studio Portfolio Design System

版本：v1.0  
日期：2026-05-01  
适用范围：Homepage、Work page、Navigation、Footer、Selected Projects、Capabilities

---

## 1. 设计定位

Atena Studio 当前界面是一个偏 editorial / portfolio 的黑色视觉系统。整体气质应保持克制、高级、留白充足、字体强势、交互细腻。

核心关键词：

- 黑色背景
- 灰白文字层级
- 12 栏网格
- 大字号标题
- 非对称作品展示
- 精致 hover / scroll motion
- 无圆角图片
- 少装饰、强排版

不要引入常规 SaaS 风格卡片、彩色渐变背景、大面积装饰图形或营销型 hero。

---

## 2. 颜色系统

当前颜色 token 定义在 `app/globals.css` 的 `:root`。

| Token | Value | 用途 |
|---|---:|---|
| `--ash` | `#c5c5c5` | 主文本、标题、按钮文字 |
| `--muted` | `rgba(197, 197, 197, 0.42)` | micro label、弱信息 |
| `--line` | `rgba(197, 197, 197, 0.14)` | 分割线、边框 |
| Black | `#000` | 页面主背景 |
| Surface dark | `#111` / `#151515` / `#171717` | 图片占位、按钮底色 |
| Hover dark | `#272727` | carousel button hover |
| White | `#fff` | 高亮文字、active filter、cursor label 背景 |

使用原则：

- 页面背景始终以黑色为主。
- 标题和重要文字使用 `#fff` 或 `--ash`。
- 描述文字使用 `rgba(197, 197, 197, 0.62 - 0.78)`。
- 线条保持低对比，不要使用纯白粗线。
- 彩色只通过作品图片出现，不作为 UI 大面积装饰色。

---

## 3. 字体系统

字体来源：

- `app/layout.tsx`
- Google Font：`Manrope`
- CSS variable：`--font-sans`

基础字体：

```css
body {
  font-family: var(--font-sans);
  letter-spacing: 0;
}
```

### 3.1 Display Title

用于首页 hero。

```css
.display-title {
  font-size: clamp(42px, 6.2vw, 112px);
  font-weight: 600;
  letter-spacing: -0.06em;
  line-height: 0.92;
  color: #fff;
}
```

### 3.2 Section Title

用于 `About`、`Selected projects`、`Capabilities`、`WORK`。

```tsx
"text-[clamp(38px,5.8vw,92px)] font-semibold leading-[0.94] tracking-[-0.06em] text-white"
```

使用原则：

- Section title 不要加装饰 icon。
- 不要使用过大的 landing page hero 风格。
- 保持紧凑行高和负字距。

### 3.3 Project / Intro Large Text

用于 Selected Projects intro、Work page 项目标题。

```css
font-size: clamp(24px, 2vw, 38px);
font-weight: 600;
letter-spacing: -0.06em;
line-height: 1.02;
color: var(--ash);
```

### 3.4 Micro Label

用于编号、辅助标签、小型 meta。

```css
.micro-label {
  color: var(--muted);
  font-size: clamp(10px, 0.72vw, 14px);
  font-weight: 800;
  line-height: 0.92;
  text-transform: uppercase;
}
```

---

## 4. 网格与间距

### 4.1 页面边距

```css
--page-x: clamp(12px, 1.45vw, 22px);
--grid-gap: clamp(12px, 1.25vw, 20px);
```

### 4.2 主网格

桌面端：

```css
.layout-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding-left: var(--page-x);
  padding-right: var(--page-x);
}
```

移动端：

```css
@media (max-width: 767px) {
  .layout-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
```

使用原则：

- 桌面使用 12 栏。
- 移动使用 4 栏。
- 不要把内容强行居中成常规容器卡片。
- 页面 section 可以有大留白，但元素边缘应跟随 `--page-x` 对齐。

---

## 5. Navigation Bar

组件位置：

- `components/site-chrome.tsx`
- `Header`

结构：

- 左侧：个人 logo
- 中间：`Work`、`About`
- 右侧：`Contacts`
- 底部：SVG elastic line

关键样式：

```tsx
"nav-shell layout-grid fixed left-0 right-0 top-0 z-[1000] h-20 items-start bg-black/90 pt-7 backdrop-blur-md md:pt-8"
```

链接样式：

```css
.tight-link {
  position: relative;
  color: var(--ash);
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
}
```

Hover：

- 文字变白
- 下划线收缩到 `scaleX(0.18)`

Elastic line：

- SVG path
- 默认：`M 0 1 Q 50 1 100 1`
- hover：`M 0 1 Q 50 38 100 1`
- spring transition
- `pointer-events: none`

---

## 6. Footer

组件位置：

- `components/site-chrome.tsx`
- `Footer`

内容：

- 左侧大字：`Let's talk`
- 中部导航：`Work`、`About`
- 右侧社媒：`Behance`、`Linkedin`、`Ins`
- 左下角：`Back to top ↑`
- 右下角：Zhang Xuan logo / wordmark

设计规则：

- Footer 背景继续沿用页面黑色和暗网格。
- Logo 可贴近底部边缘，但不能被视觉切断。
- `Back to top` 使用 `.tight-link` 样式。

---

## 7. Homepage 结构

当前顺序：

1. Preloader
2. Header
3. Hero
4. Featured visual / hero video
5. About
6. Selected projects
7. Capabilities
8. Footer

Homepage 主标题：

```text
Hi,I'am
Xuan ZHang
```

Hero video：

- 路径：`/hero-showreel.mp4`
- full-width dark visual
- `object-cover`

---

## 8. Selected Projects

实现位置：

- `app/page.tsx`
- `ProjectsEditorial`
- `ProjectCard`
- `ProjectPreviewImage`

布局：

- 横向 carousel
- 每个 slide 是一组非对称 project group
- 小项目 + 大项目
- 保持 editorial spacing

Project group：

```css
.project-group {
  flex: 0 0 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(48px, 12vw, 240px);
}
```

小卡片：

```css
flex: 0 0 clamp(280px, 30vw, 520px);
aspect-ratio: 5 / 4;
```

大卡片：

```css
flex: 0 0 clamp(520px, 54vw, 900px);
aspect-ratio: 4 / 3;
```

Hover preview：

- 底层封面图保留
- 背景图 hover：`scale(1.06)`、`blur(16px)`、`brightness(0.55)`
- 中心出现方形 preview
- preview 图片使用 `object-fit: cover`
- 每个项目独立轮播 `hoverImages`

Custom cursor label：

- 组件：`components/floating-cursor-label.tsx`
- 样式：白色 pill、黑色文字、marquee
- portal 到 `body`
- `pointer-events: none`

---

## 9. Work Page

页面位置：

- `app/work/page.tsx`

页面路径：

```text
/work
```

结构：

1. Header
2. Work hero
3. Category filter bar
4. Work project list
5. Footer

Work title：

```text
WORK
```

Work title 继承 section title 气质，不使用超大 hero title。

Filter categories：

- `ALL`
- `Brand identity`
- `Digital design`
- `Game design`
- `Vibe coding`

Filter bar：

```css
.work-filter-bar {
  position: sticky;
  top: 80px;
  z-index: 900;
  background: #000;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
```

移动端：

- filter tags 横向滚动
- 不允许页面整体横向溢出

Work project image：

```css
.work-project-row {
  grid-template-columns: clamp(177px, 24vw, 390px) minmax(0, 1fr) auto;
}

.work-project-thumb {
  aspect-ratio: 1 / 1;
  border-radius: 0;
}
```

Image color hover：

```css
.work-project-image {
  filter: grayscale(1);
  transform: scale(1);
}

.work-project-row:hover .work-project-image {
  filter: grayscale(0);
  transform: scale(1.06);
}
```

---

## 10. Capabilities

实现位置：

- `app/page.tsx`
- `Capabilities`

数据：

- `data/projects.ts`
- `capabilities`

当前项目：

1. Brand Identity
2. Digital Design
3. Game Design
4. Vibe coding

行样式：

```tsx
"group grid grid-cols-4 border-b border-ash/15 py-6 md:grid-cols-12 md:py-9"
```

标题动效：

- `SplitHover`
- 字符 hover 上移切换
- row hover 标题轻微右移：`group-hover:translate-x-3`

Image trail：

- 组件：`components/capability-image-trail.tsx`
- hook：`useCapabilityImageTrail`
- portal layer：`.capability-trail-layer`
- item：`.capability-trail-item`
- touch/mobile 隐藏
- `pointer-events: none`

Trail 图片源：

```ts
capabilityTrailImages = {
  "Brand Identity": ["/work-project-01.png", "/work-project-04.png", "/project-01.png"],
  "Digital Design": ["/work-project-02.png", "/work-project-01.png", "/work-project-03.png"],
  "Game Design": ["/work-project-03.png", "/work-project-02.png", "/project-03.png"],
  "Vibe coding": ["/work-project-04.png", "/work-project-02.png", "/work-project-01.png"]
}
```

---

## 11. Motion System

全局 reveal：

```ts
export const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}
```

Scroll blur / lag：

- 控制组件：`components/scroll-activity.tsx`
- 滚动时 body 添加：
  - `is-scrolling`
  - `scroll-down`
  - `scroll-up`
- 停止滚动后 150ms 移除

CSS：

```css
.scroll-effect-layer {
  transition:
    filter 260ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

body.is-scrolling .scroll-effect-layer {
  filter: blur(1.4px);
  transform: scale(0.998);
}

body.is-scrolling.scroll-down .scroll-effect-layer {
  transform: translateY(-3px) scale(0.998);
}

body.is-scrolling.scroll-up .scroll-effect-layer {
  transform: translateY(3px) scale(0.998);
}
```

不会被 scroll blur 影响的元素：

- Navigation
- Work sticky filter bar
- custom cursor label
- capability image trail layer

Reduced motion：

- `prefers-reduced-motion: reduce` 下关闭 blur / transform
- 全局动画时长降到极短

---

## 12. 图片与资源

Logo：

- `/xuan-symbol-crop.png`
- `/xuan-wordmark-crop.png`

Hero video：

- `/hero-showreel.mp4`

Homepage project images：

- `/project-01.png`
- `/project-02.png`
- `/project-03.png`
- `/project-04.png`

Work page color images：

- `/work-project-01.png`
- `/work-project-02.png`
- `/work-project-03.png`
- `/work-project-04.png`

About portrait：

- `/about-portrait.jpg`

---

## 13. 响应式规则

Desktop：

- 12 栏 grid
- 大标题
- 非对称 projects
- Work list 图片尺寸：`clamp(177px, 24vw, 390px)`
- Capabilities image trail 开启

Tablet：

- 保持横向项目 carousel
- 项目尺寸适度缩小
- Work filter sticky 在 nav 下方

Mobile：

- 4 栏 grid
- Project group 改为单列
- Work filter 横向滚动
- Work list 图片尺寸：`clamp(92px, 28vw, 132px)`
- custom cursor label 隐藏
- capability image trail 隐藏

---

## 14. Interaction Checklist

新增或修改界面时必须检查：

- Header fixed 是否始终可见
- Nav elastic line 是否跟随 header
- Work link 是否跳转 `/work`
- About link 是否跳转 `/#about`
- Contacts 是否跳转当前页面 `#contact`
- Work filter 是否 sticky 在 nav 下方
- Work image 默认黑白，hover 彩色
- Selected Projects carousel 是否保持非对称
- Project hover preview 是否正常
- Custom cursor label 是否不阻挡点击
- Capabilities trail 是否只在 desktop hover 触发
- Scroll blur 是否不影响 nav / sticky / cursor / trail
- Mobile 是否无横向溢出

---

## 15. Do / Don't

Do：

- 使用黑色背景和灰白层级。
- 使用当前 `layout-grid`。
- 使用无圆角图片。
- 使用 clamp 响应式字号。
- 保持 motion 克制。
- 保持图像作为主要视觉冲击。

Don't：

- 不要新增彩色渐变背景。
- 不要使用卡片嵌套卡片。
- 不要把作品列表改成普通等宽 grid。
- 不要给项目图片加圆角。
- 不要让装饰动效阻挡鼠标事件。
- 不要在 Work page 添加白色网格背景。
- 不要让滚动 blur 影响 Navigation 或 sticky filter。

---

## 16. 维护建议

项目数据统一维护在：

```text
data/projects.ts
```

新增项目时至少补充：

- `title`
- `year`
- `role`
- `type`
- `category`
- `image`
- `workImage`
- `hoverImages`
- `description`
- `href`

新增能力分类时同步更新：

- `capabilities`
- `projectCategories`
- `capabilityTrailImages`

---

## 17. 当前线上地址

Homepage：

```text
https://portfolio-codex-liart.vercel.app/
```

Work page：

```text
https://portfolio-codex-liart.vercel.app/work
```
