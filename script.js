const container = document.querySelector('.profile-pic-container');
  const staticImg = container.querySelector('.static-img');
  let gifImg = null;

  container.addEventListener('mouseenter', () => {
    // Zoom static image
    staticImg.style.transform = 'scale(1.1)';

    // Create new gif img element
    gifImg = document.createElement('img');
    gifImg.src = 'Bardach Digital Picture.gif';
    gifImg.alt = 'Profile Animation';
    gifImg.style.position = 'absolute';
    gifImg.style.top = 0;
    gifImg.style.left = 0;
    gifImg.style.width = '100%';
    gifImg.style.borderRadius = '10px';
    gifImg.style.zIndex = '3';
    gifImg.style.objectFit = 'cover';

    // Hide static image
    staticImg.style.display = 'none';

    // Add gif image to container
    container.appendChild(gifImg);
  });

  container.addEventListener('mouseleave', () => {
    // Remove gif image from DOM
    if (gifImg) {
      container.removeChild(gifImg);
      gifImg = null;
    }
    // Show static image again and reset zoom
    staticImg.style.display = 'block';
    staticImg.style.transform = 'scale(1)';
  });

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
  }