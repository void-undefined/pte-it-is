// ==UserScript==
// @name        TG OPENER
// @match       *://web.telegram.org/*
// @grant       none
// @version     1.0
// @author      -
// @description 05.10.2024, 03:45:42
// ==/UserScript==


const id = setInterval(() => {
  if(document.querySelector('body').innerText.includes('Waiting for network...')) {
    clearInterval(id)
    window.location.reload()
  }
},100)