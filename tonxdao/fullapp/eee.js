// 1726251715.136162
// 1726251811.248584
// 1726258102.090968
// 1726259844.859645

function calculateEnergy() {
  const energy = 200
  const maxEnergy = 1000
  const energyPerSecond = 1
  const last_energy_change = 1726259844.859645
  const r = new Date().getTime()
  const n = energy
  const i = last_energy_change * 1e3
  const s = i + 3e4
  const o = (r - new Date(s).getTime()) / (1e3 / energyPerSecond)
  const u = Math.min(maxEnergy, Math.floor(energy + Math.max(0, o)))
  console.log("plus energy", o)
  console.log("newEnergy", u)
}

calculateEnergy()