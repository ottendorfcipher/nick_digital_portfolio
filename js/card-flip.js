const card5 = document.querySelectorAll('.card5_inner').forEach(card5 => {
    card5.addEventListener('click', event => {
        card5.classList.toggle('is-flipped');
    })
  })