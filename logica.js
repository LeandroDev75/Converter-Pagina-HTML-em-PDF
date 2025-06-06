

function downloadPdf() {

    const item = document.querySelector('.element-to-print');

    let opt = {
        margin: 0.5,
        filename: 'file.pdf',
        html2canvas: { scale: 2},
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'}
    };

    html2pdf().set(opt).from(item).save();


}