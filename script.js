document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const authStatus = document.getElementById('auth-status');
  const fetchBtn = document.getElementById('fetch-btn');
  const urlInput = document.getElementById('url-input');
  const resultContainer = document.getElementById('result-container');
  
  const videoTitle = document.getElementById('video-title');
  const videoAuthor = document.getElementById('video-author').querySelector('span');
  const videoThumb = document.getElementById('video-thumb');
  const linksList = document.getElementById('links-list');

  let isLoggedIn = false;

  // Имитация авторизации в Bastyon
  loginBtn.addEventListener('click', () => {
      isLoggedIn = !isLoggedIn;
      if (isLoggedIn) {
          authStatus.innerHTML = `<i class="fa-solid fa-user-check" style="color: #22c55e;"></i> <span>@bastyon_user</span>`;
          loginBtn.textContent = 'Выйти';
          loginBtn.classList.remove('secondary');
          loginBtn.classList.add('primary');
      } else {
          authStatus.innerHTML = `<i class="fa-solid fa-user-slash"></i> <span>Сеть Bastyon: Гость</span>`;
          loginBtn.textContent = 'Войти';
          loginBtn.classList.remove('primary');
          loginBtn.classList.add('secondary');
      }
  });

  // Обработка запроса на извлечение видео
  fetchBtn.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (!url) {
          alert('Введите корректную ссылку на видео Bastyon');
          return;
      }

      resultContainer.classList.remove('hidden');
      
      // Демо-данные (при реальном развертывании сюда подключается парсер/нода)
      videoTitle.textContent = "Ролик из децентрализованной сети";
      videoAuthor.textContent = "@creator_node";
      videoThumb.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&q=80";

      linksList.innerHTML = '';

      const resolutions = [
          { quality: '720p HD', url: '#' },
          { quality: '480p', url: '#' },
          { quality: '360p', url: '#' },
          { quality: 'Audio (MP3)', url: '#' }
      ];

      resolutions.forEach(res => {
          const a = document.createElement('a');
          a.href = res.url;
          a.className = 'download-btn';
          a.innerHTML = `<i class="fa-solid fa-file-arrow-down"></i> ${res.quality}`;
          a.addEventListener('click', (e) => {
              e.preventDefault();
              alert(`Запуск загрузки потока (${res.quality}).`);
          });
          linksList.appendChild(a);
      });
  });
});