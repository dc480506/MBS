document.getElementById('login').addEventListener('click',
 function(){
	document.querySelector('.loginbox').style.display='flex';
	document.querySelector('.bg').style.opacity='0.6';
});
document.getElementById('close').addEventListener('click',
	function(){
	document.querySelector('.loginbox').style.display='none';
	document.querySelector('.bg').style.opacity='1';
   });
document.querySelector('.fas.fa-bars').addEventListener('click',
	function(){
	document.querySelector('.dropdown').style.display='flex';
	document.querySelector('.dropdown').style.opacity='1';
	document.querySelector('.bg').style.opacity='0.6';
});

document.getElementById('close2').addEventListener('click',
	function(){
	document.querySelector('.dropdown').style.display='none';
	document.querySelector('.bg').style.opacity='1';
	});