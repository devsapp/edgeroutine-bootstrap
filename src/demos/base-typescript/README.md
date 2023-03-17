## 简介

base-typescript 是最基本的 er 到 typescript 标准功能的封装 

## 使用方式
### 开发
```
npm i & npm run dev
```
通过启动 本地8080端口做一些调试

### 构建部署
```
npm run build
```
生成edge.js

之后使用
```
s deploy 
```
部署到ER应用程序上即可

*** 注意部署的时候需要开通ER以及设置子域 ***

## 基本原理

通过解析路径规则，以及referrer进一步拿到所有路径下的资源。如果没有配置 路径映射，则默认继续请求 / 路径的地址。
