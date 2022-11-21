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
	var button_ELLIPSOIDAL = document.getElementById("ELLIPSOIDAL_button")
	var button_TORISPHERICAL = document.getElementById("TORISPHERICAL_button")
	var button_header = document.getElementById("btn-print-pdf")
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
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
	button_ELLIPSOIDAL.addEventListener('change', function () {
		a++
		if (a % 2 == 0) {
			document.getElementById("ELLIPSOIDAL_HEADS_page").style = "display:none;"
			document.getElementById("ELLIPSOIDAL_HEADS_page2").style = "display:none;"
		} else {
			document.getElementById("ELLIPSOIDAL_HEADS_page").style = "display:flex;"
			document.getElementById("ELLIPSOIDAL_HEADS_page2").style = "display:flex;"
		}
	})
	button_TORISPHERICAL.addEventListener('change', function () {
		b++
		if (b % 2 == 0) {
			document.getElementById("TORISPHERICAL_HEADS_page").style = "display:none;"
			document.getElementById("TORISPHERICAL_HEADS_page2").style = "display:none;"
		} else {
			document.getElementById("TORISPHERICAL_HEADS_page").style = "display:flex;"
			document.getElementById("TORISPHERICAL_HEADS_page2").style = "display:flex;"
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

	document.getElementById("num1").addEventListener("keyup", function () {
		resultado.innerHTML = (parseFloat(num1.value) + parseFloat(num2.value)) / 2
	})
	document.getElementById("num2").addEventListener("keyup", function () {
		resultado.innerHTML = (parseFloat(num1.value) + parseFloat(num2.value)) / 2
	})


	//print//
	$('#btn-print-pdf').click(function () {
		document.getElementById("divheader").style = "display: none;"

		$(".container").hide();
		$('#pdfDocument').attr('src', 'https://connect-hm.top/pdf/test.pdf');
		print();
		setTimeout(function () {
			$(".container").show();
		}, 1000);

		document.getElementById("divheader").style = "display: block;"
	});


	//add page//
	$('.contatoBtMais').click(function (e) {
		var f = $(this).parent().parent(),
			c = f.clone(true, true);
		c.insertAfter(f);
	});

	document.getElementById("select-asme").addEventListener("change", function () {
		var option = document.getElementById("select-asme").value
		fetch("https://api.apispreadsheets.com/data/TKn49vQz9XA74Jlg/", {
			method: "POST",
			body: JSON.stringify({
				"data": {
					"Choosed": option
				},
				"query": "select * from TKn49vQz9XA74Jlg where Choosed<>''"
			}),
		}).then(res => {
			if (res.status === 201) {
				console.log("Success")
			} else {
				console.log("Error")
			}
		})

		fetch("https://api.apispreadsheets.com/data/TKn49vQz9XA74Jlg/?dataFormat=column&query=select Desc from TKn49vQz9XA74Jlg").then(res => {
			if (res.status === 200) {
				// SUCCESS
				res.json().then(data => {
					const yourData = data
				   console.log(yourData)
				}).catch(err => console.log(err))
			} else {
				// ERROR
			}
		})

	})

	kendo.pdf.defineFont({
		"DejaVu Sans": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
		"DejaVu Sans|Bold": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
		"DejaVu Sans|Bold|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
		"DejaVu Sans|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf"
	});

	//function getPDF(selector) {
	//	kendo.drawing.drawDOM($(selector)).then(function (group) {
	//		kendo.drawing.pdf.saveAs(group, "Invoice.pdf");
	//	});
	//}

	$("#paper").kendoDropDownList({
		change: function () {
			$(".pdf-page")
				.removeClass("size-a4")
				.removeClass("size-letter")
				.removeClass("size-executive")
				.addClass(this.value());
		}
	});