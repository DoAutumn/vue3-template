# 支持主题（包括暗黑模式、灰度模式）、国际化（包括ElementPlus）、Axios简单封装、AppStore、UserStore的简单Frame

### 目录结构
.
└── frame
    ├── axios           // Axios简单封装
    ├── components      // 对外提供的组件
    ├── directives      // 对外提供的指令
    ├── elementPlus     // 全局引入ElementPlus的部分组件
    ├── i18n            // 国际化
    ├── store           // AppStore、UserStore
    ├── styles          // 主题
    ├── utils
    ├── index.less
    └── index.ts

### 依赖
- node v16.20.1
- vite 4.3.9
- vue 3.2.47
- element-plus 2.3.7

其他详见package.json


### 使用示例
- src/目录下是一个使用了该Frame的基础Vue3工程的代码部分