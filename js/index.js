
const form = document.querySelector('#habitsForms');
const nlwSetup = new NLWSetup(form);
const buttonAddRecord = document.querySelector('.activityDayButton');
const dateOfDay = new Date();//.toLocaleDateString("pt-br").slice(0, -5);

buttonAddRecord.addEventListener('click', addRecord);
form.addEventListener('change', saveRecord);

function addRecord(){
    const today = searchDayDate();
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert("Data já cadastrada! Favor verifcar.");
        return;
    }

    nlwSetup.addDay(today);
    console.log(today);
}

function saveRecord(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

function searchDayDate(){
    const day = String(dateOfDay.getDate()).padStart(2, '0');
    const month = String(dateOfDay.getMonth() + 1).padStart(2, '0');
    const fullDate = `${day}/${month}`;

    return fullDate;
}

const data =  JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();
