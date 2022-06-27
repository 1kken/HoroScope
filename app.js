//DOM elements
const qoute = document.querySelector('#qoute')
const whoru = document.querySelector('#whoru')
const luckyNum = document.querySelector('#luckyNum')
const luckyTime = document.querySelector('#luckyTime')
const comp = document.querySelector('#compatibility')
const signs = document.querySelector('#signs');
let signInput = 'Aries';
const day = document.querySelector('#day');
let dayInput = 'today';
const button = document.querySelector('#submit')

signs.addEventListener('change',function(){
    signInput = this.value;
})
day.addEventListener('change',function(){
    dayInput = this.value;
})

async function getData(signs, day){
const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '6e351c65bfmshb22148c8fad4eb3p140817jsnbec223c1042d',
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
	}
};
    try{
        const res = await fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signs}&day=${day}`, options);
        const data = await res.json();
        const {description, lucky_number,lucky_time,compatibility} = data;
        displayData(signs,description,lucky_number,lucky_time,compatibility)
    }
    catch(error){
        console.log(`cannot get api : ${error}`)
    }

}

function displayData(sign,des, luckNum, luckTime, compa){
    whoru.innerText = sign
    qoute.innerText = des;
    luckyNum.innerText = `lucky Number: ${luckNum}`;
    luckyTime.innerText =`lucky Time: ${luckTime}`;
    comp.innerText=`Compatibility: ${compa}`;
}

button.addEventListener('click', (e)=>{
    getData(signInput,dayInput);
})

