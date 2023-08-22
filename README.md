

<div align="center">
    <h1 align="center">Short URL Generator</h1>
    <p>No need for servers, deploy quickly | <a href="https://short-url-jade.vercel.app">Demo</a></p>
    English / [简体中文](./README_CN.md) 
    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Muieay/ShortUrl)
</div>

## Getting started

1. Click the button on the right to start the deployment: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Muieay/ShortUrl) and simply log in using your Github account;
2. Connect the KV Database: Your project -> Storage -> Connect a Database -> Choose KV (create if not available);
3. Check the environment variables (usually created automatically during the previous step);
4. Once deployment is complete, you can start using it;
5. (Optional) [Bind a custom domain](https://vercel.com/docs/concepts/projects/domains/add-a-domain): The domain DNS provided by Vercel might be blocked in some regions, binding a custom domain will allow direct access.







#### Environment Variables

| Key                         | Value               |
| :-------------------------- | :------------------ |
| KV_URL                      | redis://default:xxx |
| **KV_REST_API_URL**         | urlxxx              |
| **KV_REST_API_TOKEN**       | tokenxxx            |
| KV_REST_API_READ_ONLY_TOKEN | tokenxxx            |

