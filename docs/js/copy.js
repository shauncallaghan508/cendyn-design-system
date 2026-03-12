(function () {
  document.querySelectorAll('pre code[data-copyable]').forEach(function (block) {
    var pre = block.closest('pre');
    if (!pre || pre.querySelector('.copy-btn')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn absolute top-2 right-2 px-3 py-1 text-sm rounded border border-secondary-300 bg-white hover:bg-secondary-50 text-secondary-700';
    btn.textContent = 'Copy';
    pre.style.position = 'relative';
    pre.appendChild(btn);
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(block.textContent).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();
