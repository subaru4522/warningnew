# 终端风格警告页面

这是一个模拟终端风格的警告页面，带有逐字显示效果和基本命令交互功能。

## 部署到GitHub Pages

1. 创建一个新的GitHub仓库，命名为 `你的用户名.github.io` (例如 `subaru.github.io`)
2. 将这些文件上传到仓库的根目录：
   - index.html
   - style.css
   - script.js
3. 等待几分钟，GitHub会自动部署您的页面
4. 访问 `https://你的用户名.github.io` 查看效果

## 自定义内容

- 修改 `script.js` 中的 `fullWarningText` 来更改警告信息
- 调整 `style.css` 中的颜色变量来改变主题
- 在 `processCommand` 函数中添加更多命令响应

## 技术特点

- 纯HTML/CSS/JavaScript实现
- 响应式设计，适配各种屏幕尺寸
- 绿色主题终端风格
- 文字逐字显示动画效果