$(document).ready(function(){	
	var images = ["http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg",
	"http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg",
	"http://powellong.com/data/wallpapers/199/WDF_2369253.jpg",
	"http://www.elginpk.com/worsley1011_1/gray/cat%204.jpg",
	"https://s-media-cache-ak0.pinimg.com/originals/ed/8e/3a/ed8e3a1b888377a9751d86ebd33a4c47.jpg"]

   $('.button').on('click', function(){
   	$(images[Math.floor(Math.random()*images.length)]).click()
  });
});

  