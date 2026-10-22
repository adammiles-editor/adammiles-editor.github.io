document.getElementById('year').textContent = new Date().getFullYear();

const modal = document.querySelector('.video-modal');
const player = document.querySelector('.modal-player');
const closeButton = document.querySelector('.modal-close');

document.querySelectorAll('.project').forEach((project) => {
  project.addEventListener('click', () => {
    const id = project.dataset.video;
    player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Portfolio video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    modal.showModal();
  });
});

function closeModal() {
  modal.close();
  player.innerHTML = '';
}

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
modal.addEventListener('cancel', () => {
  player.innerHTML = '';
});
