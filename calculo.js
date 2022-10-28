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

	var button_cilindrical = document.getElementById("cilindrical_button")
	var button_conical = document.getElementById("conical_button")
	var button_spherical = document.getElementById("spherical_button")
	var button_header = document.getElementById("btn-print-pdf")
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	button_cilindrical.addEventListener('change', function () {
		i++
		console.log(i)
		if (i % 2 == 0) {
			document.getElementById("cilindrical_page").style = "display:none;"
			document.getElementById("cilindrical_page2").style = "display:none;"
		} else {
			document.getElementById("cilindrical_page").style = "display:flex;"
			document.getElementById("cilindrical_page2").style = "display:flex;"
		}
	})
	button_conical.addEventListener('change', function () {
		j++
		if (j % 2 == 0) {
			document.getElementById("conical_page").style = "display:none;"
			document.getElementById("conical_page2").style = "display:none;"
		} else {
			document.getElementById("conical_page").style = "display:flex;"
			document.getElementById("conical_page2").style = "display:flex;"
		}
	})
	button_spherical.addEventListener('change', function () {
		k++
		if (k % 2 == 0) {
			document.getElementById("SPHERICAL_page").style = "display:none;"
			document.getElementById("SPHERICAL_page2").style = "display:none;"
		} else {
			document.getElementById("SPHERICAL_page").style = "display:flex;"
			document.getElementById("SPHERICAL_page2").style = "display:flex;"
		}
	})
	button_header.addEventListener('change', function () {
		l++
		if (l % 2 == 0) {
			document.getElementById("titulo").style = "display:block;"
		} else {
			document.getElementById("titulo").style = "display:none;"

		}
	})


	//contas - teste//

	var num1 = document.querySelector("#num1");
	var num2 = document.querySelector("#num2");
	var resultado = document.querySelector("#resp")

	function media() {
		resultado.innerHTML = (parseFloat(num1.value) + parseFloat(num2.value)) / 2
	}

	//print//
	$('#btn-print-pdf').click(function () {
		$(".container").hide();
		$('#pdfDocument').attr('src', 'https://connect-hm.top/pdf/test.pdf');
		print();
		setTimeout(function () {
			$(".container").show();
		}, 1000);
	});


//add page//
	$('.contatoBtMais').click(function (e) {
		var f = $(this).parent().parent(),
			c = f.clone(true, true);
		c.insertAfter(f);
	});
	