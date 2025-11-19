//your JS code here. If required.

let age = document.getElementById("age");
let name = document.getElementById("name");
let btn = document.getElementById("btn");
let forms = document.getElementById("forms");

async function message(age,name) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve(name);
			}else{
				reject(name);
			}
		},4000)
	})
}


btn.addEventListener("click", (e) => {
	e.preventDefault();  

	if (age.value === "" || name.value === "") {
		alert("Please enter valid details.");
	} else {
		message(age.value, name.value)
			.then(() => {
				alert(`Welcome, ${name.value}. You can vote.`);
				forms.submit();   
			})
			.catch(() => {
				alert(`Oh sorry ${name.value}. You aren't old enough.`);
				forms.submit();   
			});
	}
});

