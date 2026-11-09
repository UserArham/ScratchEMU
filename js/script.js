  const iframe = document.querySelector('.iframe-container iframe');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const refreshBtn = document.getElementById('refreshBtn');
  const runBtn = document.getElementById('runBtn');
  const openBtn = document.getElementById('openBtn');
  const websiteNameBtn = document.getElementById('websiteNameBtn');

  const scratch14URL = "https://userarham.github.io/Eaglerscratch-2.0/";
  const websiteName = "https://scratcharchive.naleksuh.com/";

  // Fullscreen toggle
  fullscreenBtn.addEventListener('click', () => {
    const container = document.querySelector('.iframe-container');
    if (container.requestFullscreen) container.requestFullscreen();
    else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
    else if (container.msRequestFullscreen) container.msRequestFullscreen();
  });

  // Refresh iframe
  refreshBtn.addEventListener('click', () => {
    const src = iframe.src;
    iframe.src = '';
    setTimeout(() => { iframe.src = src; }, 50);
  });

  // Run Scratch 1.4 in a new tab
  runBtn.addEventListener('click', () => {
    window.open(scratch14URL, '_blank');
  });

  // Open iframe in a new tab
  openBtn.addEventListener('click', () => {
    window.open(iframe.src, '_blank');
  });

  // Show website name alert only
  websiteNameBtn.addEventListener('click', () => {
    alert("Website name: " + websiteName);
  });
