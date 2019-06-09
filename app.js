function clears()
{
	document.getElementById("number").value=null;
	
}

function disp(a)
{
   document.getElementById('number').value=document.getElementById('number').value+(a);

}

function calculate(){

 if(document.getElementById('number').value){
 	document.getElementById('number').value=eval(document.getElementById('number').value)
 }

}