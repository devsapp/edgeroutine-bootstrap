##  Edgeroutine的示例程序


### 特色
+ 将Edgeroutine的开发完全工程化以及标准化，基于typescript和webpack，可以进行本地开发调试，利用npm生态（注意部分node模块可能无法使用）
+ 丰富的模版案例，如
边缘Gateway路由配置、
边缘Graphql、
边缘Fass到中心Faas联动、
边缘存储事件驱动方案实现、
边缘渲染AI问答联动。
以及官方的相关应用详细请参考"代码示例说明"
+ 支持本地一键部署，支持多环境配置，帮助您快速的进行线上代码落地

### 使用前置条件
+ 开通 [DCDN](https://www.aliyun.com/product/dcdn?spm=5176.serverlessdevs)及[Edgeroutine](https://help.aliyun.com/document_detail/263523.html)服务
+ 下载阿里云[Serverless Devs](http://www.serverless-devs.com/)开发者工具，并按照示例配置好您的秘钥信息（请妥善保管秘钥信息）


### 快速开始

#### 1.初始化指令
```
s init edgeroutine-bootstrap
```
#### 2.选择示例代码进行开发
比如开发 graphql-gateway
```bash
cd <projectPath>/demos/graphql-gateway && npm i
```
本地开发
```bash
npm run dev
```
#### 3.配置及部署
修改s.yaml文件，项目信息，如ername，部署环境,部署代码路径等，执行部署指令
```
s deploy
```




### 代码示例说明

+ base-typescript  基础示例
+ graphql-gateway  graphql 网关示例, [详细](https://help.aliyun.com/document_detail/453640.html)
+ graphql-gateway-with-fc  graphql场景边缘Faas到中心Faas的联动
+ edge-gpt 边缘流式传染 智能问答场景
+ router-map 边缘网关路由方案
+ edge-storage 边缘存储方案（使用eventbridge实现异步缓存写入能力）
+ edge-tianmaojingling  边缘实现天猫精灵的自定义后端服务
### 更多官网代码示例

    [返回1个HTML页面](https://help.aliyun.com/document_detail/365604.html)

    [返回1个JSON](https://help.aliyun.com/document_detail/365663.html)

    [重定向至指定URL](https://help.aliyun.com/document_detail/365664.html)

    [修改URL并重定向](https://help.aliyun.com/document_detail/365665.html)

    [请求一个页面并返回](https://help.aliyun.com/document_detail/365666.html)

    [A/B测试](https://help.aliyun.com/document_detail/365668.html)

    [请求一个JS文件并返回](https://help.aliyun.com/document_detail/365667.html)

    [修改header](https://help.aliyun.com/document_detail/365669.html)

    [简单的身份校验](https://help.aliyun.com/document_detail/365670.html)

    [请求特征识别](https://help.aliyun.com/document_detail/365671.html)

    [更多示例代码](https://help.aliyun.com/document_detail/284528.html)


### 其他说明
目前ER 不支持 ReadableStream , TextDecoder的实例化，所以本地联调这些能行的 ER环境不行，另外本地不支持 cache， EdgeKV所以也无法调试缓存功能，需要部署到线上使用
