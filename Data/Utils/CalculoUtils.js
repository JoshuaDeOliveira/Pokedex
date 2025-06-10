export function ContadorDeId(){
  let id = 1
  return (Key) => {
    if (Key === 'Next') {
      id++;
      if (id === 650) {id = 1}
    } else if (Key === 'Previous'){
      id--;
      if (id === 0) {id = 649}
    }
    return id;
  };
};

export function GeraçãoId(tamanho = 10){
   const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resultado = '';
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}