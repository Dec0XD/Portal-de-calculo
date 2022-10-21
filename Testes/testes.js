function getPDF(selector) {
	kendo.drawing.drawDOM($(selector)).then(function(group){
	  kendo.drawing.pdf.saveAs(group, 'testing.pdf');
	});
  }


  window.onchange = function(){ // acho que é assim a sintaxe

	var opcao_escolhida = document.getElementbyId("join") // o id da tag select
	
	if(opcao_escolhida == Join_A){
	
	}
}

// local save//
function salvar(){
	localStorage.info = document.getElementById("JOBNAME").value;
}

function carregar(){
	document.getElementById('JOBNAME').value = localStorage.info;
}


// pop up//

const modal = document.querySelector(".modal-container")

function openModal(){
	modal.classList.add('active')
}

function closeModal() {
	modal.classList.remove('active')
}

//contas - teste//

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var resultado = document.querySelector("#resp")

function media(){
	resultado.innerHTML = (parseFloat(num1.value) + parseFloat(num2.value))/2
}

