<div align="center">
    <h1 align="center">短网址生成器</h1>
    <p>无需服务器，快速部署 | <a href="https://short-url-jade.vercel.app">演示站点</a></p>

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Muieay/ShortUrl)

</div>

## 开始使用

1. 点击右侧按钮开始部署： [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Muieay/ShortUrl)，直接使用 Github 账号登录即可；
2. 连接KV Database，你的项目->Storage->Connect a Database->选择KV（没有就创建）
3. 检查环境变量（一般执行上一步时就会自动创建）
4. 部署完毕后，即可开始使用；
5. （可选）[绑定自定义域名](https://vercel.com/docs/concepts/projects/domains/add-a-domain)：Vercel 分配的域名 DNS 在某些区域被污染了，绑定自定义域名即可直连。



#### 环境变量

| Key                         | Value               |
| :-------------------------- | :------------------ |
| KV_URL                      | redis://default:xxx |
| **KV_REST_API_URL**         | urlxxx              |
| **KV_REST_API_TOKEN**       | tokenxxx            |
| KV_REST_API_READ_ONLY_TOKEN | tokenxxx            |