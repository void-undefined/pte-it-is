// ==UserScript==
// @name        tonxdao ao
// @match       *://web.telegram.org/*
// @grant       none
// @version     1.4
// @author      void_undefined
// ==/UserScript==

const settingsMenuTitle = 'Telegram Auto-opener'

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
const OPEN_APP_INTERVAL = 5 * 1000

const randomDelay = (min, max) => Math.random() * (max - min) + min;
const randomOffset = range => Math.random() * range * 2 - range;
const randomPressure = () => Math.random() * GAME_SETTINGS.pressureFactor + GAME_SETTINGS.pressureFactor;

function querySelectorIncludesText (selector, text){
  if(!text) {
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

  try{
    const { clientX, clientY, screenX, screenY } = getCoords(target);
    const options = {
        clientX: clientX + randomOffset(GAME_SETTINGS.clickOffset),
        clientY: clientY + randomOffset(GAME_SETTINGS.clickOffset),
        screenX: screenX + randomOffset(GAME_SETTINGS.clickOffset),
        screenY: screenY + randomOffset(GAME_SETTINGS.clickOffset),
        pressure: randomPressure()
    };

    ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(type => createEvent(type, target, options));
  } catch(e) {
    console.error(e)
  }
}


function toggleGamePause() {
  isGamePaused = !isGamePaused;
  pauseResumeButton.textContent = isGamePaused ? 'Resume' : 'Pause';
  pauseResumeButton.style.backgroundColor = isGamePaused ? '#e5c07b' : '#98c379';
}

// ======================================== APPS
async function openApp() {
  const opener = document.querySelector('.new-message-bot-commands-view')
  if(opener) {
    clickElement(document.querySelector('.new-message-bot-commands-view'))  
  }

  await sleep(3000)

  const launch = querySelectorIncludesText('.i18n', 'Launch')
  if(launch) {
   clickElement(launch)
  }
}

function closeApp() {
  clickElement(document.querySelector('.Button[title="Close"]'))
}

function closeConfirmApp() {
  clickElement(document.querySelector('.Button.confirm-dialog-button.default.danger'))
}

const runTONDAOApp = async() => {
  await openApp()
}

const TONDAO_HREF = 'https://web.telegram.org/k/#@tonxdao_bot'

const runApp = async () => {
  if(location.href === TONDAO_HREF) {
    await runTONDAOApp()
  }
}

async function scheduleAppOpen() {
  setTimeout(async () => {
    if (isGamePaused) return;

    await runApp()

    scheduleAppOpen()
  }, OPEN_APP_INTERVAL)
}

const settingsMenu = document.createElement('div');
settingsMenu.className = 'settings-menu';
settingsMenu.style.display = 'none';

const menuTitle = document.createElement('h3');
menuTitle.className = 'settings-title';
menuTitle.textContent = settingsMenuTitle;

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
pauseResumeButton.className = 'main-btn';
pauseResumeButton.onclick = toggleGamePause;
settingsMenu.appendChild(pauseResumeButton);

const runButton = document.createElement('button');
runButton.textContent = 'Run test';
runButton.className = 'main-btn';
runButton.onclick = runApp;
settingsMenu.appendChild(runButton);


const openButton = document.createElement('button');
openButton.textContent = 'Open';
openButton.className = 'main-btn';
openButton.onclick = openApp;
settingsMenu.appendChild(openButton);

const closeAppButton = document.createElement('button');
closeAppButton.textContent = 'Close';
closeAppButton.className = 'main-btn';
closeAppButton.onclick = closeApp;
settingsMenu.appendChild(closeAppButton);

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
  .main-btn {
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
  .main-btn:hover {
    background-color: #7cb668;
  }
  .settings-button {
    position: fixed;
    bottom: 120px;
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

window.addEventListener('message', event => {
  if (event.origin === 'https://app.production.tonxdao.app') {
    if(event.data.reload) {
      location.reload()
    }
  } else {
   return;
  }
});

scheduleAppOpen()