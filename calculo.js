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
     var button_ellipsoidal = document.getElementById("ellipsoidal_button")
     var button_TORISPHERICAL = document.getElementById("TORISPHERICAL_button")
     var button_header = document.getElementById("btn-print-pdf")
     var i = 0;
     var j = 0;
     var k = 0;
     var l = 0;
     var m = 0;
     var n = 0;
     button_header.addEventListener('change', function () {
     	l++
     	if (l % 2 == 0) {
     		document.getElementById("titulo").style = "display:block;"
     	} else {
     		document.getElementById("titulo").style = "display:none;"

     	}
     })
     button_cilindrical.addEventListener('change', function () {
     	i++
     	console.log(i)
     	if (i % 2 == 0) {
     		document.getElementById("cilindrical_page").style = "display:none;"
     		document.getElementById("cilindrical_page2").style = "display:none;"
     		document.getElementById("cilindricalArrow").style = "display:none"
     		document.getElementById("cilindricalArrow2").style = "display:none"
     	} else {
     		document.getElementById("cilindrical_page").style = "display:flex;"
     		document.getElementById("cilindrical_page2").style = "display:flex;"
     		document.getElementById("cilindricalArrow").style = "display:flex"
     		document.getElementById("cilindricalArrow2").style = "display:flex"
     	}
     })
     button_conical.addEventListener('change', function () {
     	j++
     	if (j % 2 == 0) {
     		document.getElementById("conical_page").style = "display:none;"
			  document.getElementById("conical_page2").style = "display:none;"
			  document.getElementById("conicalArrow").style = "display:none"
			  document.getElementById("conicalArrow2").style = "display:none"
     	} else {
     		document.getElementById("conical_page").style = "display:flex;"
			  document.getElementById("conical_page2").style = "display:flex;"
			  document.getElementById("conicalArrow").style = "display:flex"
			  document.getElementById("conicalArrow2").style = "display:flex"
     	}
     })
     button_spherical.addEventListener('change', function () {
     	k++
     	if (k % 2 == 0) {
     		document.getElementById("SPHERICAL_page").style = "display:none;"
			  document.getElementById("SPHERICAL_page2").style = "display:none;"
			  document.getElementById("sphericalArrow").style = "display:none"
			  document.getElementById("sphericalArrow2").style = "display:none"
     	} else {
     		document.getElementById("SPHERICAL_page").style = "display:flex;"
			  document.getElementById("SPHERICAL_page2").style = "display:flex;"
			  document.getElementById("sphericalArrow").style = "display:flex"
			  document.getElementById("sphericalArrow2").style = "display:flex"
     	}
     })
     button_ellipsoidal.addEventListener('change', function () {
     	m++
     	if (m % 2 == 0) {
     		document.getElementById("ELLIPSOIDAL_HEADS_page").style = "display:none;"
			  document.getElementById("ELLIPSOIDAL_HEADS_page2").style = "display:none;"
			  document.getElementById("ellipsoidalArrow").style = "display:none"
			  document.getElementById("ellipsoidalArrow2").style = "display:none"
     	} else {
     		document.getElementById("ELLIPSOIDAL_HEADS_page").style = "display:flex;"
			  document.getElementById("ELLIPSOIDAL_HEADS_page2").style = "display:flex;"
			  document.getElementById("ellipsoidalArrow").style = "display:flex"
			  document.getElementById("ellipsoidalArrow2").style = "display:flex"
     	}
     })
     button_TORISPHERICAL.addEventListener('change', function () {
     	n++
     	if (n % 2 == 0) {
     		document.getElementById("TORISPHERICAL_HEADS_page").style = "display:none;"
			  document.getElementById("TORISPHERICAL_HEADS_page2").style = "display:none;"
			  document.getElementById("torisphericalArrow").style = "display:none;"
			  document.getElementById("torisphericalArrow2").style = "display:none;"
     	} else {
     		document.getElementById("TORISPHERICAL_HEADS_page").style = "display:flex;"
			  document.getElementById("TORISPHERICAL_HEADS_page2").style = "display:flex;"
			  document.getElementById("torisphericalArrow").style = "display:flex;"
			  document.getElementById("torisphericalArrow2").style = "display:flex;"
     	}
     })




     //print//
     $('#btn-print-pdf').click(function () {
		document.getElementById("brh").style = "display: none;"
     	document.getElementById("divheader").style = "display: none;"
     	document.getElementById("sectionFinalpage").style = "display: none;"
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
     $('.contatoBtMais').click(function (e) {
     	var f = $(this).parent().parent(),
     		c = f.clone(true, true);
     	c.insertAfter(f);
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