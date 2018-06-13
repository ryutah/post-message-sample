window.addEventListener("message", e => {
  const body = new URLSearchParams();
  body.append("message", e.data)
  fetch("/message", {
    method: "POST",
    body,
  }).catch(console.error)
  e.source.postMessage("unchanged", e.origin)
}, false)
