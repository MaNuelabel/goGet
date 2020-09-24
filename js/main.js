
const submit_btn = document.querySelector(".submit-btn");
const table =  document.querySelector('.tb-container');

let genRandom = 1;

submit_btn.addEventListener('click',
	function info_goGet()
	{
		let fullName = document.querySelector('#fullname'),
			status = document.querySelector('#status');

		let fullname_trim = fullName.value.trim().toString(),
			status_trim = status.value.trim().toString();

			if(fullname_trim === '' || status_trim === '')
			{
				alert('Empty field')
			}else{

				let tb_row = document.createElement('tr'),
					tb_data_ID = document.createElement('td'),
					tb_data_fullname = document.createElement('td'),
					tb_data_status = document.createElement('td');


					tb_data_ID.textContent = genRandom;
					tb_data_fullname.textContent = fullname_trim;
					tb_data_status.textContent = status_trim;

					sqlExecute(genRandom, fullname_trim, status_trim);

					tb_row.append(tb_data_ID, tb_data_fullname, tb_data_status);
					table.appendChild(tb_row);

					document.querySelector('.table-content > span').display = "none";
					table.style.display = "block";

					fullname.value = null;
					status.value = null;


				genRandom++;
			}
	
})

function sqlExecute(number, name, status)
{
	const mySQL_Database =  openDatabase('goGet', 1.0, 'geting all the goGet users information', 1024 * 1024);

		mySQL_Database.transaction((dbTx)=>{
			dbTx.executeSql("CREATE TABLE IF NOT EXISTS goGetDetails(IDNo TEXT UNIQUE, FullName TEXT, Status TEXT)");
			dbTx.executeSql("INSERT INTO goGetDetails VALUES ('"+ number +"', '"+ name +"', '"+ status +"')");		
		});	
		
			
}
