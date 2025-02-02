function insert_Row() {
    //Write your code here
	let insert = document.querySelector("#sampleTable");

	let newRow = "<tr><td>New Cell1 </td> <td>New Cell2</td></tr>";
	insert.innerHTML = newRow + insert.innerHTML;
  
  
}
