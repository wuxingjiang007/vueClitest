;(function(win) {
  var doc = win.document
  var docEl = doc.documentElement
  var metaEl = doc.querySelector('meta[name="viewport"]')
  var dpr = 0
  var scale = 0
  var tid

  if (metaEl) {
    var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
    if (match) {
      scale = parseFloat(match[1])
      dpr = parseInt(1 / scale)
    }
  }

  if (!dpr && !scale) {
    dpr = 1
    var devicePixelRatio = win.devicePixelRatio
    if (win.navigator.appVersion.match(/iphone/gi)) {
      if (devicePixelRatio >= 3) {
        dpr = 3
      } else if (devicePixelRatio >= 2) {
        dpr = 2
      }
    }
    scale = 1 / dpr
  }

  window.dpr = dpr
  docEl.setAttribute('data-dpr', dpr)
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    metaEl.setAttribute(
      'content',
      'initial-scale=' +
        scale +
        ', maximum-scale=' +
        scale +
        ', minimum-scale=' +
        scale +
        ', user-scalable=no'
    )
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl)
    } else {
      var wrap = doc.createElement('div')
      wrap.appendChild(metaEl)
      doc.write(wrap.innerHTML)
    }
  }

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width
    if (width / dpr > 540) {
      width = 540 * dpr
    }
    docEl.style.fontSize = width / 10 + 'px'
  }

  win.addEventListener(
    'resize',
    function() {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    },
    false
  )
  win.addEventListener(
    'pageshow',
    function(e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    },
    false
  )

  function setBodyFontSize(dpr) {
    doc.body.style.fontSize = 12 * dpr + 'px'
  }

  if (doc.readyState === 'complete') {
    setBodyFontSize(dpr)
  } else {
    doc.addEventListener(
      'DOMContentLoaded',
      function() {
        setBodyFontSize(dpr)
      },
      false
    )
  }
  refreshRem()
})(window)
