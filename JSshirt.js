window.onload = function() {
	alert("Thank you for atention");
};


$(".single-item").slick({
  accessibility: true,
  autoplay: false,
  autoplaySpeed: 1000,
  dots: true,
  fade: false,
});

//いらなめ
function Calculate()
{
	 frm1.result.value = (frm1.firstValue.value * frm1.secondValue.value);
}


function Culculate2() {
  document.getElementById('gokei').value =
  (parseInt(document.getElementById('white1S').value, 10) +
	parseInt(document.getElementById('white1M').value, 10) +
	parseInt(document.getElementById('white1L').value, 10) +
	parseInt(document.getElementById('white1LL').value, 10) +
	parseInt(document.getElementById('white2S').value, 10) +
	parseInt(document.getElementById('white2M').value, 10) +
	parseInt(document.getElementById('white2L').value, 10) +
	parseInt(document.getElementById('white2LL').value, 10) +
	parseInt(document.getElementById('white3S').value, 10) +
	parseInt(document.getElementById('white3M').value, 10) +
	parseInt(document.getElementById('white3L').value, 10) +
	parseInt(document.getElementById('white3LL').value, 10)) * 2000
}
