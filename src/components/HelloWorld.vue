<script setup>
import { ref } from 'vue'
import { getRootUrl, generateShortUrl, isURL, setKey} from '../api/index'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

const inputUrl = ref()
const copyShort = () => {
  if (!isURL(inputUrl.value)) return;
  const short = generateShortUrl();
  //存入key
  setKey(short, inputUrl.value)
  const text = getRootUrl() + "/show/" + short;
  copyText(text)
  $toast.open({
    message: "网址复制成功！",
    position: "bottom",
    queue: true
  })
}

const copyText = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('文本已复制到剪贴板');
    })
    .catch((error) => {
      console.error('复制失败:', error);
    });
}

// 防抖函数
function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 添加防抖功能的 copyShort 方法
const debouncedCopyShort = debounce(copyShort, 500); // 设置延迟时间为 500 毫秒
</script>

<template>
  <div class="wrapper">
    <div class="input-data">
      <input type="text" required v-model="inputUrl">
      <div class="underline"></div>
      <label>网址输入</label>
    </div>
    <div class="btn-box">
      <a href="#" class="btn" @click="debouncedCopyShort">Copy Short URL</a>
    </div>
  </div>
  <router-link to="/show/hello">Hello</router-link>
</template>

<style scoped>
.wrapper {
  width: 450px;
  background-color: #fff;
  /* 内边距（上下左右） */
  padding: 40px;
  /* 盒子阴影 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.wrapper .input-data {
  /* 相对定位 */
  position: relative;
  width: 100%;
  height: 40px;
}

.wrapper .input-data input {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid #c0c0c0;
}

/* 输入框获得焦点时 */
.wrapper .input-data input:focus~label,
/* 输入框的值为合法时 */
.wrapper .input-data input:valid~label {
  /* label上移，同时改变字号、颜色 */
  transform: translateY(-25px);
  font-size: 15px;
  color: #2c6fdb;
}

.wrapper .input-data label {
  position: absolute;
  bottom: 10px;
  left: 0px;
  color: #808080;
  /* 点击label可以穿透到输入框 */
  pointer-events: none;
  /* 给动画添加过渡，不会太过生硬 */
  transition: all 0.3s ease;
}

.wrapper .input-data .underline {
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;
  background-color: #2c6fdb;
  /* 沿X轴放大 */
  transform: scaleX(0);
  /* 动画过渡 */
  transition: all 0.3s ease;
}

.wrapper .input-data input:focus~.underline,
.wrapper .input-data input:valid~.underline {
  /* 沿X轴缩小 */
  transform: scaleX(1);
}

.btn-box {
  width: 300px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all .2s;
  position: relative;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
}

.btn:active {
  transform: translateY(-3px);
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all .3s;
}

.btn:hover::after {
  background-color: rgb(0, 238, 255);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
</style>
