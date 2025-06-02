export function Loading(){
  setTimeout(() => {
    document.querySelector('.skeleton-card').style.display = 'none'
    document.querySelector('.Lista-Gerecional').style.display = 'block'
  }, 2000);
}