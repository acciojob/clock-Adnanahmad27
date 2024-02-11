//your JS code here. If required.
const p = document.getElementById('timer');
function setTime(){
	let now = new Date();
	let month = now.getMonth() + 1;
	let year = now.getFullYear();
	let day = now.getDate();
	let time =now.toLocaleTimeString();
	let date = `${month}/${day}/${year}`;
	if(Number(time.slice(0,2)) > 11){
		time = Number(time.slice(0,2)) - 12 + time.slice(2);
		p.innerText = `${date}, ${time} PM`;
	}
	//else{
	// 	p.innerText = `${date}, ${time} AM`;
	// }
}
setInterval(setTime , 1000);
setTime();

