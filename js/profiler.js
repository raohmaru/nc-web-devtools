(function() {

var arr3 = [];

function normalFunc() {
	console.time("normalFunc");
	
	var arr1 = new Array(500000);
	for (var i = arr1.length - 1; i >= 0; i--) {
		arr1[i] = new Object();
	};
	
	console.timeEnd("normalFunc");
}

function expensiveFunc1() {
	console.time("expensiveFunc1");
	
	var arr1 = arr2 = new Array(500000);
	for (var i = arr1.length - 1; i >= 0; i--) {
		arr1[i] = new Object();
		if(i % 10000 == 0)
			console.timeStamp("Adding timestamp");
	};
	
	arr1 = undefined;
	
	console.timeEnd("expensiveFunc1");
}

function expensiveFunc2() {
	console.time("expensiveFunc2");
	
	var arr1 = new Array(500000);
	var arr2 = arr1;
	for (var i = arr1.length - 1; i >= 0; i--) {
		arr1[i] = new Object();
	};
	
	arr1 = undefined;
	arr3 = arr3.concat(arr2)
	
	console.timeEnd("expensiveFunc2");
}

$('#csltim-run0').click(function(){
	normalFunc();
});

$('#csltim-run1').click(function(){
	expensiveFunc1();
});

$('#csltim-run2').click(function(){
	expensiveFunc2();
});

$('#csltim-profile1').click(function(){
	console.profile("JS CPU");
	expensiveFunc1();
	console.profileEnd("JS CPU");
});

$('#csltim-profile2').click(function(){
	console.profile("JS CPU");
	expensiveFunc2();
	console.profileEnd("JS CPU");
});


}());