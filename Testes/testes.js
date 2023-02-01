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

const selection = document.querySelector('button')

function scroll(){
    selection = addEventListener('click', () => {
        window.scroll({top: window.innerHeight, behavior: "smooth"})
    })
}
/* create the PDF document */

var doc = new pdf();
doc.text(20, 20, 'hello, I am PDF.');
doc.text(20, 30, 'i was created in the browser using javascript.');
doc.text(20, 40, 'i can also be created from node.js');

/* Optional - set properties on the document */
doc.setProperties({
  title: 'A sample document created by pdf.js',
  subject: 'PDFs are kinda cool, i guess',        
  author: 'Marak Squires',
  keywords: 'pdf.js, javascript, Marak, Marak Squires',
  creator: 'pdf.js'
});

doc.addPage();
doc.setFontSize(22);
doc.text(20, 20, 'This is a title');
doc.setFontSize(16); 
doc.text(20, 30, 'This is some normal sized text underneath.');

var fileName = "testFile"+new Date().getSeconds()+".pdf";
var pdfAsDataURI = doc.output('datauri', {"fileName":fileName});

