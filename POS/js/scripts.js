
/*script to check the length of zopcode*/
function validate(){
	var textzip =$("#zipcode").val();
	var zl = textzip.length;
	if (zl == 1 ||zl==2||zl==3||zl==4){
		alert("zip code must have 5 digits");
		return false;
	}
}