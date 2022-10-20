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