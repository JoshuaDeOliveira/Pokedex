export function Nome(Key){
  const Limpo = Key.replace("original-", "");
  const transformado = Limpo.charAt(0).toUpperCase() + Limpo.slice(1);
  return transformado
}

export function Formatar(Num){
  return Num.toString().padStart(3, '0')
}
