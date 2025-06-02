export function SalvarData(Key, Data){
  localStorage.setItem(Key, JSON.stringify(Data))
}

export function PegarData(Key){
  return JSON.parse(localStorage.getItem(Key))
}