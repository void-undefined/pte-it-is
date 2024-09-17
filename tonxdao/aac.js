// ==UserScript==
// @name        tonxdao auto ac
// @match       *://app.production.tonxdao.app/*
// @grant       none
// @version     1.0
// @author      void_undefined
// @description 13.09.2024, 16:45:21
// ==/UserScript==

const tmp = {
  Telegram: {
    WebApp:{
      platform: 'ios'
    },
    WebView: {
      initParams: {
      }
    }
  }
}

Object.defineProperty(window, 'Telegram', {
  get() {
    tmp.Telegram.WebView.initParams.tgWebAppPlatform = 'ios'
    return tmp.Telegram
  }
})

const TIMEOUT = 1000
const DELAY_TO_START = 5000
const TIME_TO_RELOAD = 5 * 60 * 1000

let GAME_SETTINGS = {
  minDelay: 60,
  maxDelay: 140,
  clickOffset: 10,
  pressureFactor: 0.5
};

const randomDelay = (min, max) => Math.random() * (max - min) + min;
const randomOffset = range => Math.random() * range * 2 - range;
const randomPressure = () => Math.random() * GAME_SETTINGS.pressureFactor + GAME_SETTINGS.pressureFactor;

function createEvent(type, target, options) {
  target.dispatchEvent(new PointerEvent(type, {
      bubbles: true, cancelable: true, view: window, detail: 1, pointerId: 1, width: 1, height: 1,
      tangentialPressure: 0, tiltX: 0, tiltY: 0, pointerType: 'touch', isPrimary: true, ...options
  }));
}

function getCoords(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2, y = rect.top + rect.height / 2;
  return { clientX: x, clientY: y, screenX: window.screenX + x, screenY: window.screenY + y };
}

function clickElement(target) {
  const { clientX, clientY, screenX, screenY } = getCoords(target);
  const options = {
      clientX: clientX, //+ randomOffset(GAME_SETTINGS.clickOffset),
      clientY: clientY, //+ randomOffset(GAME_SETTINGS.clickOffset),
      screenX: screenX, //+ randomOffset(GAME_SETTINGS.clickOffset),
      screenY: screenY, //+ randomOffset(GAME_SETTINGS.clickOffset),
      pressure: randomPressure()
  };
  ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(type => createEvent(type, target, options));
}

function clickDown(target) {
  const { clientX, clientY, screenX, screenY } = getCoords(target);
  const options = {
      clientX: clientX, //+ randomOffset(GAME_SETTINGS.clickOffset),
      clientY: clientY, //+ randomOffset(GAME_SETTINGS.clickOffset),
      screenX: screenX, //+ randomOffset(GAME_SETTINGS.clickOffset),
      screenY: screenY, //+ randomOffset(GAME_SETTINGS.clickOffset),
      pressure: randomPressure()
  };
  ['pointerdown', 'mousedown'].forEach(type => createEvent(type, target, options));
}

function clickUp(target) {
  const { clientX, clientY, screenX, screenY } = getCoords(target);
  const options = {
      clientX: clientX, //+ randomOffset(GAME_SETTINGS.clickOffset),
      clientY: clientY, //+ randomOffset(GAME_SETTINGS.clickOffset),
      screenX: screenX, //+ randomOffset(GAME_SETTINGS.clickOffset),
      screenY: screenY, //+ randomOffset(GAME_SETTINGS.clickOffset),
      pressure: randomPressure()
  };
  ['pointerup', 'mouseup'].forEach(type => createEvent(type, target, options));
}


let daoProfitLast = 0
let userProfitLast = 0
const daxDiff = 20
let isClickedDown = false
let canStart = false

const mainRun = () => {
  if(!canStart) {
    return
  }

  if(!document.querySelector('#root div')) {
    console.log('----> NO APP')
    parent.postMessage({reload:true},"*")
  }

  const canvas = document.querySelector('#root canvas')
    if(canvas) {
      clickDown(canvas)
    }
}

const autoClick = () => {
  setTimeout(()=> {
      mainRun()
      autoClick()
  }, TIMEOUT)
}


mainRun()
autoClick()

setTimeout(()=> {
  canStart = true
}, DELAY_TO_START)


const nextReload = () => {
  setTimeout(()=>{
    if(!isClickedDown) {
      parent.postMessage({reload:true},"*")
    } else {
      nextReload()
    }
  },TIME_TO_RELOAD)
}

nextReload()
