const targetOrigin = "http://localhost:8080"
let cnt = 0;

const checkSession = () => {
  const opWindow = window.parent.document.querySelector("#op").contentWindow
  opWindow.postMessage(`Hello: ${cnt}!!`, targetOrigin)
}

window.addEventListener("message", e => {
  if (e.origin != targetOrigin) return
  const msg = `${e.data}: ${++cnt}`
  window.parent.document.querySelector("#recv").innerHTML = msg
}, false)

setInterval(checkSession, 3 * 1000)
