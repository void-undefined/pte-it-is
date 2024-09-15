// ==UserScript==
// @name        tonxdao simple
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
