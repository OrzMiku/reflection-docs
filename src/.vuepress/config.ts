import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  
  lang: "zh-CN",
  title: "Reflection 整合包",
  description: "优化模组、实用工具、生活质量的改进、美化功能、OptiFine特性以及修复错误的一站式解决方案",

  // 主题配置
  theme,
});
