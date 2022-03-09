const gpmDisplay = document.getElementById('gpm');
const psdDisplay = document.getElementById('psd');
const vsdDisplay = document.getElementById('vsd');
const npdDisplay = document.getElementById('npd');
const algaDisplay = document.getElementById('alga');
const darbdDisplay = document.getElementById('darbd');
const sodraDisplay = document.getElementById('sodra');
let npd;
let atlyginimas
function checked() {
    var result = document.getElementById('checke');
    if(result.checked) {
        if(atlyginimas < 1678) {
            npd = 460 - 0.26 * (atlyginimas - 730);
        } else if (atlyginimas >= 1678) {
            npd = 400 - 0.18 * (atlyginimas - 642);
        }
    } else {
        npd = 0;
    }
    if(npd < 0) {
        npd = 0;
    }
}
function calc() {
    atlyginimas = document.getElementById('atlyginimas').value;
    checked();
    npdDisplay.innerHTML = npd;
    let gpm = ((atlyginimas - npd) * 0.2).toFixed(2);
    gpmDisplay.innerHTML = gpm;
    let psd = (atlyginimas * 0.0698).toFixed(2);
    psdDisplay.innerHTML = psd;
    let vsd = (atlyginimas * 0.1252).toFixed(2);
    vsdDisplay.innerHTML = vsd;
    algaDisplay.innerHTML = (atlyginimas - gpm - psd - vsd).toFixed(2);
    let darbd = (atlyginimas * 0.0177).toFixed(2);
    sodraDisplay.innerHTML = darbd;
    darbdDisplay.innerHTML = darbd;
}