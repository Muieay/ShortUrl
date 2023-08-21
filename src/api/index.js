const KV_REST_API_URL=import.meta.env.KV_REST_API_URL;
const KV_REST_API_TOKEN=import.meta.env.KV_REST_API_TOKEN;
export async function setKey(key, value) {
    return await fetch(`${KV_REST_API_URL}/set/${key}`, {
        headers: {
            Authorization: `Bearer ${KV_REST_API_TOKEN}`,
        },
        body: value,
        method: 'POST'
    })
}
export async function getKey(key) {
    const response = await fetch(`${KV_REST_API_URL}/get/${key}`, {
        headers: {
            Authorization: `Bearer  ${KV_REST_API_TOKEN}`,
        },
        method: 'POST'
    })
    const data = await response.json()
    return data
}



//当前根路径
export function getRootUrl() {
    var protocol = window.location.protocol;
    var host = window.location.host;
    return protocol + '//' + host;
}

//生成短网址
export function generateShortUrl() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6; // 生成的短网址长度
    let shortUrl = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortUrl += characters.charAt(randomIndex);
    }
    return shortUrl;
}

//判断是否为网址
export function isURL(input) {
    // 定义一个正则表达式，用于匹配网址
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;

    // 使用正则表达式进行匹配
    return urlPattern.test(input);
}