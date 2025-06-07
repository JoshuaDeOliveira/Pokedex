export function Loading(Key){
  setTimeout(() => {
    document.querySelector('.skeleton-card').style.display = 'none'
    document.querySelector(Key).style.display = 'block'
  }, 1500);
}