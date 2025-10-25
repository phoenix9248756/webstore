// 🌟 Magic Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  if (cursor) {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  }
});

// 🛍 Order Button Function
function orderNow(productName) {
  window.location.href = `order.html?product=${encodeURIComponent(productName)}`;
}

// 🛡️ Site Protection Script
(function(){
  document.documentElement.classList.add('no-select');
  document.body.classList.add('no-select');

  function notify(msg){
    try {
      const id = 'ps-protect-toast';
      if(!document.getElementById(id)){
        const t = document.createElement('div');
        t.id = id;
        t.style.position = 'fixed';
        t.style.right = '15px';
        t.style.bottom = '15px';
        t.style.padding = '10px 14px';
        t.style.background = 'rgba(0,0,0,0.8)';
        t.style.color = '#fff';
        t.style.borderRadius = '6px';
        t.style.fontSize = '13px';
        t.style.zIndex = 999999;
        document.body.appendChild(t);
      }
      const el = document.getElementById('ps-protect-toast');
      el.textContent = msg;
      el.style.opacity = 1;
      setTimeout(()=>{ if(el) el.style.opacity = 0; }, 1800);
    } catch(e){ console.log(msg); }
  }

  document.addEventListener('contextmenu', e => { e.preventDefault(); notify('Right click disabled'); });
  document.addEventListener('keydown', e => {
    const key = (e.key || '').toLowerCase();
    if(e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['i','c','j'].includes(key)) || (e.ctrlKey && ['u','s','p'].includes(key))) {
      e.preventDefault(); notify('Inspect disabled');
    }
  });
  document.addEventListener('selectstart', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());
  console.log('%cStop! Don’t copy site code 🚫', 'color:red;font-size:24px;');
})();
// Disable right-click (context menu)
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  showToast();
}, false);

// Disable common developer shortcuts
document.addEventListener('keydown', function (e) {
  const key = e.key;
  const ctrl = e.ctrlKey || e.metaKey; // metaKey for Mac
  const shift = e.shiftKey;

  // Block F12
  if (e.keyCode === 123 || key === 'F12') {
    e.preventDefault();
    showToast();
  }

  // Block Ctrl+U, Ctrl+S, Ctrl+P
  if (ctrl && ['u', 'U', 's', 'S', 'p', 'P'].includes(key)) {
    e.preventDefault();
    showToast();
  }

  // Block Ctrl+Shift+I / J / C
  if (ctrl && shift && ['i', 'I', 'j', 'J', 'c', 'C'].includes(key)) {
    e.preventDefault();
    showToast();
  }

  // Older browser fallback
  const code = e.keyCode;
  if (ctrl && shift && [73, 74, 67].includes(code)) { // I, J, C
    e.preventDefault();
    showToast();
  }
  if (ctrl && [85, 83].includes(code)) { // U, S
    e.preventDefault();
    showToast();
  }
}, false);

// Simple toast message
function showToast() {
  let t = document.getElementById('rcToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'rcToast';
    t.textContent = 'Right-click disabled on this site.';
    t.style.position = 'fixed';
    t.style.bottom = '20px';
    t.style.left = '50%';
    t.style.transform = 'translateX(-50%)';
    t.style.background = 'rgba(0,0,0,0.8)';
    t.style.color = 'white';
    t.style.padding = '8px 14px';
    t.style.borderRadius = '6px';
    t.style.fontFamily = 'sans-serif';
    t.style.fontSize = '14px';
    t.style.zIndex = '9999';
    t.style.transition = 'opacity 0.3s';
    t.style.display = 'none';
    document.body.appendChild(t);
  }

  t.style.display = 'block';
  t.style.opacity = '1';
  clearTimeout(window.__rc_toast_timeout);
  window.__rc_toast_timeout = setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.style.display = 'none', 300);
  }, 1400);
}
