Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/dashboard', {
	name: 'dashboard'
});
// add user
Router.route('/user', {
	name: 'user'
});
// all user 
Router.route('/alluser', {
	name: 'alluser'
});
//login
Router.route('/login', {
	name: 'login'
});
// register
Router.route('/register', {
	name: 'register'
});
// dashboard for member
Router.route('/member', {
	name: 'member'
});
// add new announcement
Router.route('/addnew', {
	name: 'addnew'
});
Router.route('/updatenew/:_id', {
	name: 'updatenew',
	data: function(){
        var currentList = this.params._id;
        var result = announcements.findOne({ _id: currentList });
		return result;
    }
});

// add singer
Router.route('/addsinger', {
	name: 'addsinger'
});
// all singer
Router.route('/allsinger', {
	name: 'allsinger'
});
Router.route('/updatesinger/:_id', {
	name: 'updatesinger',
	data: function(){
        var id = this.params._id;
        var result = singer.findOne({_id: id });
		return result;
    }
});

// index page Male
Router.route('/artist/male', {
	name: 'male'
});
// index page Female
Router.route('/artist/female', {
	name: 'female'
});

// all production 
Router.route('/admin/allproduction', {
	name: 'allproduction'
});
// all albums 
Router.route('/admin/allalbums/:_id', {
	name: 'allalbums',
	data: function(){
	var id = this.params._id;
	var result = production.find({parent:id});
	return {getAllalbums:result};
	}	
});
// list music 
Router.route('/admin/listmusic/:_id', {
	name: 'listmusic',
	data: function(){
        var id = this.params._id;
		var result = musics.find({singerid: id }).map(function(document, index){
			document.index = index+1;
			return document;
		});
		return {getmusics:result};
    }
});
// all production 
Router.route('/admin/addproduction', {
	name: 'addproduction'
});

///////////////////////////////////// front end ////////////////////////////////////////////////
Router.route('/', {
	name: 'index',
	data: function () {
		var result = singer.find({});
		var showSinger = Session.get("showsinger");
		if(showSinger) return {singer:result};
		else return false;
		//return {singer:result};
    }
});
/*Router.route('/searchsingerhomepage', {
	name: 'searchsingerhomepage',
	data: function () {
		return {singer:singer.find()};
    }
});*/
// musicdatail 
// Router.route('/musicdetail/:_id', function (){
// 	//name: 'musicdetail',
// 	this.render('musicdetail', {
// 		data:function(){
// 			var id = this.params._id;
// 			var result = musics.find({singerid:id});
// 			var singer_re = singer.find({});
// 			return {musicplay:result,singer:singer_re};		
// 		},
// 		action: function () {
// 		    // render all templates and regions for this route
// 		    alert("action");
// 		    this.render();
// 		}
// 	});
// });
// Router.map(function () {
//   this.route('musicdetail', {
//     	path: '/musicdetail/:_id',
//     	data:function(){
// 			var id = this.params._id;
// 			var result = musics.find({singerid:id});
// 			var singer_re = singer.find({});
// 			return {musicplay:result,singer:singer_re};		
// 		},
// 		onRun:function(){
// 			alert("onRun");
// 		},
// 		onRerun:function(){
// 			alert("rerun");
// 		}
// 	});
// });
Router.map(function () {
    this.route('musicdetail', {
        path: '/musicdetail/:_id',
        data:function(){
			var id = this.params._id;
			var result = musics.find({singerid:id});
			var singer_re = singer.find({});
			return {musicplay:result,singer:singer_re};	
		},
         onAfterAction: function () {
		    Tracker.afterFlush(function () {
		      	//alert("afteraction");
		      	var title;
				var image;
				var time;
				title = $("ul#playlist li a:first").attr("data-title");
				$(".mp3title").html(title);
				image = $("ul#playlist li a:first").attr("data-image");
				$(".mp3image").attr("src",image);
				var myaudio = $("audio")[0];
				var cur_time = myaudio.currentTime;
				//alert(cur_time);
				var play = $("ul#playlist li a:first").attr("data-src");
				$("#audio").attr("src",play);
				var audio;
				var playlist;
				var tracks;
				var current;

				init();
				function init(){
					//alert('init');
				    current = 0;
				    audio = $('#audio');
				    playlist = $('#playlist');
				    tracks = playlist.find('li a');
				    len = tracks.length - 1;
				    audio[0].volume = .20;
				    audio[0].play();
				    playlist.find('a').click(function(e){
				    	//alert("A click");
				    	title = $(this).attr("data-title");
				    	$(".mp3title").html(title);
				    	image = $(this).attr("data-image");
				    	$(".mp3image").attr("src",image);
				    	var myaudio = $("audio")[0];
						var cur_time = myaudio.duration;
						//alert(cur_time);
				        e.preventDefault();
				        link = $(this);
				        current = link.parent().index();
				        run(link, audio[0]);
				    });
				    audio[0].addEventListener('ended',function(e){
				    	//alert("Listener");
				        current++;
				        if(current == len){
				            current = 0;
				            link = playlist.find('a')[0];
				        }else{
				            link = playlist.find('a')[current];    
				        }
				        run($(link),audio[0]);
				    });
				}
				function run(link, player){
						//alert("run");
				        player.src = link.attr('data-src');
				        par = link.parent();
				        par.addClass('active').siblings().removeClass('active');
				        audio[0].load();
				        audio[0].play();
				}
		    });
		  }
    });
});
// Router.route('/post/:_id', function () {
//   this.render('Post', {
//     data: function () {
//       return Posts.findOne({_id: this.params._id});
//     }
//   });
// });
Router.route('/playlist', {
	name: 'playlist'
});