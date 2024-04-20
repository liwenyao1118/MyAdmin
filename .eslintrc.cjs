/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 配置文件的位置作为项目根目录
  root: true,
  // 运行环境，提供不同的全局变量供eslint识别
  env: {
    // 浏览器端的api
    browser: true,
    // node端全局变量，主要识别 module exports等
    node: true,
    // 目标语言版本包含的js语法
    es2021: true
  },
  // 解析器用于将 JavaScript 代码转换为 ESLint 可以理解的抽象语法树
  // 默认：Espree，只转换 js，默认支持 ES5 的语法，可以通过parserOptions设置为最新标准的语法
  // 可选：esprima，高性能的js解析器，支持es6标准语法，但不支持非标准的例如flow和typescript
  // 可选: @babel/eslint-parser,配合babel使用，babel首先将代码转换为AST，该解析器则会将其装换位eslint能懂的esTree
  // 可选：@typescript-eslint，配合Typescript包使用，Typescript包也具有解析和转换ts代码到AST的过程，但是生成的AST内容与格式（esTree）与eslint识别的不一致，因此需要这个解析器做兼容处理
  // parser: '@typescript-eslint',
  // 解析器选项，会作为参数传递给解析器
  parserOptions: {
    // 默认识别es5的语法
    // 手动指定目标语言的es版本，‘latest’表示最新
    ecmaVersion: 'latest',
    //设置为"script"（默认），或者"module"代码在ECMAScript模块中
    sourceType: 'module'
  },
  // 规则继承
  extends: [
    // 通过eslint-plugin-vue安装的vue3语法
    'plugin:vue/vue3-essential',
    // eslint自带的大约60种规则，recommended推荐，all全部
    'eslint:recommended',
    // 通过@vue/eslint-config-typescript安装的ts语法
    '@vue/eslint-config-typescript',
    // 通过@vue/eslint-config-prettier添加，表示在eslint检查过程中跳过prettier的格式化规则，防止格式化冲突
    // 该规则会告诉 ESLint 忽略与 Prettier 格式化规则有冲突的部分。这样，ESLint 仍然会执行其他规则的检查，但不会引发与 Prettier 格式化规则冲突的问题。
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // 规则的重写，用于禁用/覆盖前面的规则
  overrides: [],
  // 引入插件
  // plugins: ['vue', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off', // 使用分号：关闭

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off' // 对模板中的自定义组件强制执行属性命名样式
  }
}
