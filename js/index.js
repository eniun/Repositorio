const animation = bodymovin.loadAnimation({
  container: document.getElementById('cargador'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'img/preload.json'
})