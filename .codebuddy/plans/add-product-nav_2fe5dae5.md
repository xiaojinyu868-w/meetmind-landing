---
name: add-product-nav
overview: 在导航栏添加"产品"入口链接
todos:
  - id: add-product-nav
    content: "在 Header.tsx 导航栏中添加\"产品\"入口，指向 #product"
    status: completed
  - id: verify-anchor
    content: 验证 ProductShowcase 组件的 id="product" 锚点正确设置
    status: completed
    dependencies:
      - add-product-nav
---

## 需求概述

在导航栏 Header.tsx 中添加"产品"入口，指向页面中的产品功能展示区域（#product 锚点）。

## 核心功能

- 在桌面端导航中添加"产品"链接
- 在移动端菜单中添加"产品"链接
- 点击后平滑滚动到 ProductShowcase 组件区域

## 产品定位

保持现有导航逻辑顺序，将"产品"放在"如何工作"之后、"价值"之前，形成合理的用户浏览路径：痛点 -> 如何工作 -> 产品 -> 价值 -> 用户故事。

## 技术栈

- React + TypeScript
- Tailwind CSS
- 现有导航使用数组映射渲染，只需修改配置数组

## 实现方案

在 Header.tsx 第 4-10 行的 navLinks 数组中插入新的导航项：

```typescript
{ name: '产品', href: '#product' }
```

ProductShowcase 组件已有 `id="product"` 属性，锚点跳转可直接生效。

## 目录结构

```
src/components/Header.tsx  # [MODIFY] 添加产品导航链接
```