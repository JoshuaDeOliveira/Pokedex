export function ContadorDeId(){
  let id = 1
   return () => {
    if (id === 650) {
      id = 1;
    } else {
      id++;
    }
    return id;
  };
};