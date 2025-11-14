document.addEventListener('DOMContentLoaded', function () {
  const aiItems = document.querySelectorAll('.ai-item');
  const searchInput = document.getElementById('searchInput');
  const toolsSection = document.getElementById('toolsSection');
  const iframeSection = document.getElementById('iframeSection'); // 这部分不再使用
  const iframeBackButton = document.getElementById('iframeBackButton'); // 这部分不再使用
  const refreshButton = document.getElementById('refreshButton'); // 这部分不再使用
  const currentToolName = document.getElementById('currentToolName'); // 这部分不再使用

  aiItems.forEach(item => {
    item.addEventListener('click', function () {
      const url = this.getAttribute('data-url');
      const name = this.getAttribute('data-name');

      if (url) {
        // 在新标签页打开链接
        window.open(url, '_blank');
      }
    });
  });

  searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();

    aiItems.forEach(item => {
      const name = item.getAttribute('data-name').toLowerCase();
      const description = item.querySelector('.ai-info p').textContent.toLowerCase();

      if (name.includes(searchTerm) || description.includes(searchTerm)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });

  aiItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-4px)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });
});
