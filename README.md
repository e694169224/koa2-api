# koa2-api
一个简单的koa2模板
## 1、简介
koa2-api是一个自己学习并使用的koa2模板，目前正在完善中，数据库使用了 mongodb,采用了nodemon跟babel进行编译
## 2、快速开始
### For development
```
# install packages
$npm install

# install nodemon
$npm install -g nodemon

# run
$npm run dev

# build
$npm run build
```

## 3、目录结构
```
`
|---src
|   |--apis
|   |   |--index.js
|   |   |--test.js
|   |--config
|   |   |--demo
|   |   |   |--app.js
|   |   |   |--mongodb.js
|   |   |--dev
|   |   |   |--与demo的内容一样
|   |--app.js
|   |--db.js
|--dist
|--package.json
|--README.md
```
其中：
* `apis` 用于存放路由文件，`index.js`用于扫描`apis`目录下的所有js文件并暴露出去，用于app.js中引用
* `config`用于存放配置文件，`demo`文件夹有示例说明，在 dev环境运行时，需要复制一份并改名为 dev
* `app.js`入口文件
* `db.js`连接数据库的文件
* `dist`运行`$npm run build`后编译完成的文件
