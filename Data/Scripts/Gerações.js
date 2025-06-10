import {RunGeraçõesHTML} from "../Infos/Gerações.js";
import {Loading, BotãoEntrar} from "../Utils/HTMLUtils.js";

CarregarDados()

async function CarregarDados(){
  document.querySelector('.skeleton-card').style.display = 'block'
  document.querySelector('.Lista-Gerecional').style.display = 'none'
  try {
    RunGeraçõesHTML()
    Loading('.Lista-Gerecional')
    BotãoEntrar()
  } catch (error) {
    console.log('Esta funcionando?', error)
  }
}