# AI工具集合 - Chrome侧边栏插件

这是一个Chrome浏览器侧边栏扩展插件，集合了多个主流AI工具，让你可以快速访问各种AI助手。

## 功能特点

✨ **多AI工具集成**
- 包含10+个主流AI工具（ChatGPT、Claude、Gemini、通义千问、文心一言等）
- 直接在侧边栏中使用AI工具，无需切换标签页
- 美观的渐变色界面设计

🖥️ **侧边栏内嵌展示**
- 点击AI工具后，直接在侧边栏中加载使用
- 一键返回工具列表，快速切换不同AI
- 刷新按钮可重新加载当前AI工具

🔍 **搜索功能**
- 实时搜索过滤AI工具
- 支持名称和描述搜索

🎨 **精美界面**
- 现代化的渐变色设计
- 流畅的动画过渡效果
- iframe全屏展示，沉浸式体验

## 安装步骤

### 1. 加载扩展到Chrome

1. 打开Chrome浏览器
2. 在地址栏输入 `chrome://extensions/`
3. 在右上角启用"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择这个文件夹 `sidebar`
6. 扩展安装成功！

### 2. 使用方法

1. 点击Chrome工具栏上的插件图标（紫色渐变的AI图标）
2. 侧边栏会从右侧弹出，显示所有AI工具列表
3. 点击任意AI工具卡片，该AI工具会直接在侧边栏中加载
4. 使用顶部的"← 返回"按钮可返回工具列表
5. 使用"🔄"按钮可刷新当前AI工具页面
6. 使用搜索框可以快速查找特定的AI工具

## 项目结构

```
sidebar/
├── manifest.json          # 扩展配置文件
├── background.js          # 后台服务脚本
├── sidebar.html           # 侧边栏页面
├── sidebar.css            # 侧边栏样式
├── sidebar.js             # 侧边栏交互逻辑
├── icons/                 # 图标文件夹
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md              # 说明文档
```

## 代码说明

### manifest.json
**作用**：Chrome扩展的配置文件
- `manifest_version: 3`：使用最新的Manifest V3规范
- `side_panel`：配置侧边栏功能，指定侧边栏页面为sidebar.html
- `permissions: ["sidePanel"]`：申请侧边栏权限
- `action`：配置工具栏图标和点击行为
- `background`：配置后台服务Worker

### background.js
**作用**：后台服务脚本，处理扩展的核心逻辑
- 监听插件图标点击事件
- 当用户点击图标时，打开侧边栏面板
- 使用`chrome.sidePanel.open()`API打开侧边栏

### sidebar.html
**作用**：侧边栏的主页面结构
- 包含两个主要区域：工具列表区（tools-section）和iframe展示区（iframe-section）
- 工具列表区包含标题、搜索框和AI工具卡片
- iframe展示区包含返回按钮、工具名称显示和刷新按钮
- 每个AI工具使用`data-url`属性存储网址，`data-name`属性存储名称
- 包含10个预设的AI工具（可根据需要添加更多）

### sidebar.css
**作用**：侧边栏的样式设计
- **工具列表区**：使用渐变色背景（紫色到蓝色），卡片式设计
- **iframe展示区**：全屏展示，顶部工具栏带有操作按钮
- **响应式布局**：两个区域通过display控制显示/隐藏切换
- **动画效果**：平滑的过渡动画和hover效果
- **按钮样式**：半透明背景的返回和刷新按钮

### sidebar.js
**作用**：侧边栏的交互逻辑
1. **iframe加载**：点击AI工具时，隐藏工具列表，显示iframe并加载对应网址
2. **返回功能**：点击返回按钮，清空iframe并显示工具列表
3. **刷新功能**：重新加载当前iframe中的AI工具页面
4. **搜索过滤**：实时过滤显示匹配的AI工具
5. **动画交互**：鼠标悬停的平滑动画效果
<img width="425" height="1214" alt="image" src="https://github.com/user-attachments/assets/a7323654-55e5-4565-bb59-41561c464898" />

## 自定义修改

### 添加新的AI工具

在 `sidebar.html` 的 `<div class="ai-list">` 中添加新的AI工具：

```html
<div class="ai-item" data-url="https://你的AI工具网址.com" data-name="工具名称">
  <div class="ai-icon">🎯</div>
  <div class="ai-info">
    <h3>工具名称</h3>
    <p>工具描述</p>
  </div>
</div>
```

### 修改颜色主题

在 `sidebar.css` 中修改渐变色：

```css
background: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);
```

### 修改搜索逻辑

在 `sidebar.js` 中的搜索事件监听器中修改过滤条件。

## 技术栈

- **HTML5**：页面结构，包括iframe内嵌框架
- **CSS3**：样式、动画和响应式布局
- **JavaScript**：交互逻辑和DOM操作
- **Chrome Extension API**：
  - `chrome.sidePanel.open()`：打开侧边栏
  - `chrome.action.onClicked`：监听图标点击
- **iframe技术**：在侧边栏中嵌入完整的AI工具网页

## 浏览器兼容性

- ✅ Chrome 114+ (支持Manifest V3和Side Panel API)
- ✅ Edge 114+ (基于Chromium)
- ❌ Firefox (不支持Side Panel API)
- ❌ Safari (不支持Side Panel API)

## 常见问题

### Q: 为什么点击图标没有反应？
A: 请确保Chrome版本在114以上，并且已经正确加载扩展。

### Q: 为什么某些AI工具在iframe中无法加载？
A: 部分网站设置了X-Frame-Options或CSP策略，禁止在iframe中加载。这种情况下，该AI工具可能无法在侧边栏中显示。你可以在sidebar.js中修改代码，让这些网站在新标签页打开。

### Q: 如何修改AI工具列表？
A: 直接编辑 `sidebar.html` 文件中的AI工具列表即可。

### Q: 如何让某个工具在新标签页打开而不是iframe？
A: 在sidebar.js中，可以为特定工具添加判断条件，使用`chrome.tabs.create({url})`替代iframe加载。

### Q: 能否在Firefox中使用？
A: 目前不支持，因为Firefox不支持Chrome的Side Panel API。

## 许可证

MIT License

## 作者

Robin

---

如有问题或建议，欢迎反馈！
