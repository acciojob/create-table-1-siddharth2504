function insert_Row() {
    //Write your code here
	let table = document.querySelector("#sampleTable");
	let row = table.insertRow(0);
	for(let i = 0;i<2;i++){
		let cell = row.insertCell(i);
		cell.innerHTML = `New Cell${i+1}`
	}
}