function getPDF(selector) {
	kendo.drawing.drawDOM($(selector)).then(function(group){
	  kendo.drawing.pdf.saveAs(group, 'testing.pdf');
	});
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


var campo_opcao = document.getElementById("select_join")
campo_opcao.addEventListener('change', function () {
	document.getElementById("opt_A").style = "display:none;"
	document.getElementById("opt_B").style = "display:none;"
	document.getElementById("opt_C").style = "display:none;"
	document.getElementById("opt_D").style = "display:none;"
	if(campo_opcao.value=="Join_A"){
		document.getElementById("opt_A").style = "display:block;"
	}
	if(campo_opcao.value=="Join_B"){
		document.getElementById("opt_B").style = "display:block;"
	}
	if(campo_opcao.value=="Join_C"){
		document.getElementById("opt_C").style = "display:block;"
	}
	if(campo_opcao.value=="Join_D"){
		document.getElementById("opt_D").style = "display:block;"
	}
})