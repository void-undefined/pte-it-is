// ==UserScript==
// @name        hipin
// @match       *://web.pinai.tech/*
// @grant       none
// @version     1.0
// @author      void_undefined
// @icon        https://static.wixstatic.com/media/a011bf_ce1e668321534907923fd749ba41c809~mv2.png/v1/fill/w_151,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PIN%20AI%20Logo.png
// ==/UserScript==

Object.defineProperty(navigator, 'userAgent', {
  get() {
    return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Mobile';
  },
});
