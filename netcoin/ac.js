// ==UserScript==
// @name        Netcoin Autoclicker
// @match       *://netcoin.layernet.ai/*
// @grant       none
// @version     1.0
// @author      void_undefined
// ==/UserScript==


const sleep = async(time) => {
  await new Promise((resolve) => {
    setTimeout(()=> {
      resolve('')
    }, time)
  })
}

let GAME_SETTINGS = {
  minDelay: 200,
  maxDelay: 400,
  clickOffset: 20,
  pressureFactor: 0.5
};

let CURRENT_POINTS = ''
let directionUp = true
let inRace = false
let isGamePaused = false
const RELOAD_PAGE_TIME = 6 * 60 * 1000

const randomDelay = (min, max) => Math.random() * (max - min) + min;
const randomOffset = range => Math.random() * range * 2 - range;
const randomPressure = () => Math.random() * GAME_SETTINGS.pressureFactor + GAME_SETTINGS.pressureFactor;

function querySelectorIncludesText (selector, text){
  if (!text) {
    return document.querySelector(selector)
  }


  return Array.from(document.querySelectorAll(selector))
    .find(el => el.textContent.includes(text));
}

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
  if (isGamePaused) return;
  const { clientX, clientY, screenX, screenY } = getCoords(target);
  const options = {
      clientX: clientX + randomOffset(GAME_SETTINGS.clickOffset),
      clientY: clientY + randomOffset(GAME_SETTINGS.clickOffset),
      screenX: screenX + randomOffset(GAME_SETTINGS.clickOffset),
      screenY: screenY + randomOffset(GAME_SETTINGS.clickOffset),
      pressure: randomPressure()
  };
  ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(type => createEvent(type, target, options));
}



async function runRace() {
  // window.location.reload()
}

function toggleGamePause() {
  isGamePaused = !isGamePaused;
  pauseResumeButton.textContent = isGamePaused ? 'Resume' : 'Pause';
  pauseResumeButton.style.backgroundColor = isGamePaused ? '#e5c07b' : '#98c379';
}

async function autoClick() {
  if (!isGamePaused) {
      try {
          const mainLayer = document.querySelector('#catch_page > div > div > div')
          if(!mainLayer || !mainLayer.classList.contains('translate-y-full')) {
            const fightBtn = querySelectorIncludesText('button.h-full', 'Fight again')


            if(fightBtn) {
              await sleep(800)
              fightBtn.click()
            }
          }

          const catchNowBtn = querySelectorIncludesText('button.w-full', 'Catch now!')
          if(catchNowBtn) {
              catchNowBtn.click()
          }

          const tapElement = document.querySelector('#catch_page > div > :nth-child(7) > div')
          if(tapElement) {
            clickElement(tapElement)
          }
      } catch (error) { }
  }
  setTimeout(async () => {autoClick()}, randomDelay(GAME_SETTINGS.minDelay, GAME_SETTINGS.maxDelay));
}


function reloadWidget() {
  window.location.reload()

  setTimeout(async () => {reloadWidget()}, RELOAD_PAGE_TIME);
}

const settingsMenu = document.createElement('div');
settingsMenu.className = 'settings-menu';
settingsMenu.style.display = 'none';

const menuTitle = document.createElement('h3');
menuTitle.className = 'settings-title';
menuTitle.textContent = 'OKX Autoclicker';

const closeButton = document.createElement('button');
closeButton.className = 'settings-close-button';
closeButton.textContent = '×';
closeButton.onclick = () => {
  settingsMenu.style.display = 'none';
};

menuTitle.appendChild(closeButton);
settingsMenu.appendChild(menuTitle);


const pauseResumeButton = document.createElement('button');
pauseResumeButton.textContent = 'Pause';
pauseResumeButton.className = 'pause-resume-btn';
pauseResumeButton.onclick = toggleGamePause;
settingsMenu.appendChild(pauseResumeButton);

const runRaceBtn = document.createElement('button');
runRaceBtn.textContent = 'Run race manually';
runRaceBtn.className = 'pause-resume-btn';
runRaceBtn.onclick = runRace;
settingsMenu.appendChild(runRaceBtn);

document.body.appendChild(settingsMenu);

const settingsButton = document.createElement('button');
settingsButton.className = 'settings-button';
settingsButton.textContent = '⚙️';
settingsButton.onclick = () => {
  settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
};
document.body.appendChild(settingsButton);

const style = document.createElement('style');
style.textContent = `
  .settings-menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(40, 44, 52, 0.95);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    color: #abb2bf;
    font-family: 'Arial', sans-serif;
    z-index: 10000;
    padding: 20px;
    width: 300px;
  }
  .settings-title {
    color: #61afef;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .settings-close-button {
    background: none;
    border: none;
    color: #e06c75;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
  }
  .setting-item {
    margin-bottom: 12px;
  }
  .setting-label {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .setting-label-text {
    color: #e5c07b;
    margin-right: 5px;
  }
  .help-icon {
    cursor: help;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #61afef;
    color: #282c34;
    font-size: 10px;
    font-weight: bold;
  }
  .setting-input {
    display: flex;
    align-items: center;
  }
  .setting-slider {
    flex-grow: 1;
    margin-right: 8px;
  }
  .setting-value {
    min-width: 30px;
    text-align: right;
    font-size: 11px;
  }
  .tooltip {
    position: relative;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: #4b5263;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 11px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .pause-resume-btn {
    display: block;
    width: calc(100% - 10px);
    padding: 8px;
    margin: 15px 5px;
    background-color: #98c379;
    color: #282c34;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  .pause-resume-btn:hover {
    background-color: #7cb668;
  }
  .social-buttons {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    white-space: nowrap;
  }
  .social-button {
    display: inline-flex;
    align-items: center;
    padding: 5px 8px;
    border-radius: 4px;
    background-color: #282c34;
    color: #abb2bf;
    text-decoration: none;
    font-size: 12px;
    transition: background-color 0.3s;
  }
  .social-button:hover {
    background-color: #4b5263;
  }
  .social-button img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  .settings-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(36, 146, 255, 0.8);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }
`;
document.head.appendChild(style);

autoClick();

setTimeout(async () => {reloadWidget()}, RELOAD_PAGE_TIME);