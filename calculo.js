     // local save//
     function salvar() {
     	localStorage.info = document.getElementById("JOBNAME").value;
     }

     function carregar() {
     	document.getElementById('JOBNAME').value = localStorage.info;
     }


     // pop up//

     const modal = document.querySelector(".modal-container")

     function openModal() {
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
     	if (campo_opcao.value == "Join_A") {
     		document.getElementById("opt_A").style = "display:block;"
     	}
     	if (campo_opcao.value == "Join_B") {
     		document.getElementById("opt_B").style = "display:block;"
     	}
     	if (campo_opcao.value == "Join_C") {
     		document.getElementById("opt_C").style = "display:block;"
     	}
     	if (campo_opcao.value == "Join_D") {
     		document.getElementById("opt_D").style = "display:block;"
     	}
     })

     




     //print//
     $('#btn-print-pdf').click(function () {
		document.getElementById("brh").style = "display: none;"
     	document.getElementById("divheader").style = "display: none;"
     	document.getElementById("sectionFinalpage").style = "display: none;"

     	$(".container").hide();
     	$('#pdfDocument').attr('src', 'https://connect-hm.top/pdf/test.pdf');
     	print();
     	setTimeout(function () {
     		$(".container").show();
     	}, 1000);


		document.getElementById("sectionFinalpage").style = "display: block;"
     	document.getElementById("divheader").style = "display: block;"
		document.getElementById("brh").style = "display: block;"
     });


     //add page//
	$('#addbuttonDesign').click(function() {
	   $('#design_page').clone().insertAfter('.Section').find('#design_page').val('');
   });
	 
	//remove page//
	$("#removeButtonDesign").click(function(){
		$('#design_page').remove();
	});

	// add page Cilindrical
$('#addbuttonCilindrical').click(function () {
	$('#cilindrical_page').clone()
	('#cilindrical_page2').clone().insertAfter('.Section').find('#design_page').val('');
   });
	 
	//remove page//
	$("#removeButtonCilindrical").click(function(){
		$('#design_page').remove();
   });


     

     function up(max) {
     	document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
     	if (document.getElementById("myNumber").value >= parseInt(max)) {
     		document.getElementById("myNumber").value = max;
     	}
     }

     function down(min) {
     	document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
     	if (document.getElementById("myNumber").value <= parseInt(min)) {
     		document.getElementById("myNumber").value = min;
     	}
     }