
 function populateUFs(){
     const ufSelect = document.querySelector("select[name=uf]")

     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
     .then( res => res.json() )
     .then( states => {

        for (const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
       
     } )
 }

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade<option>"
    citySelect.disabled = true
    
    fetch(url)
     .then( res => res.json() )
     .then( cities => {

        for (const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
       
     } )
}

document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)




//itens de coleta
//pegar todos os LI's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", hundleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function hundleSelectedItem(event){
    const itemLi = event.target

    //add or remove a class with JS
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // console.log('Item ID: ', itemId)

    /* verificar se existe itens selecionnado, se sim
     pegar os itens selecionado */
    const alreadySelected = selectedItems.findIndex( item  => {
        const itemFound = item == itemId //true or false
        return itemFound
    })

    console.log(alreadySelected)

    //se ja estiver selecionado
    if(alreadySelected >= 0){
        //tirar da selecao
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }
    else{
        //se nao estiver selecionado //adicionar selecao
       
        selectedItems.push(itemId)
    }

    // console.log('selectedItems: ', selectedItems)
   
    //atualizar o campo escondido
    collectedItems.value = selectedItems

}
