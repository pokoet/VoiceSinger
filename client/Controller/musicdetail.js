
Template.musicdetail.rendered=function(){
		var title;
		var image;
		var time;
		title = $("ul#playlist li a:first").attr("data-title");
		$(".mp3title").html(title);
		image = $("ul#playlist li a:first").attr("data-image");
		$(".mp3image").attr("src",image);
		var myaudio = $("audio")[0];
		var cur_time = myaudio.currentTime;
		alert(cur_time);
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
};
Template.musicdetail.helpers({
	allsinger:function(){
		var result = singer.find();
		return result;
	},
	getsidebarsinger: function(){
		var result = singer.find();
		return result;
	},
	Issinger:function(){
		var singersidebar = Session.get("searchsingersidebar");
		if(singersidebar) return true;
		else return false;
	},
	getproname:function(id){
		return production.findOne({_id:id}).title;
	},
	getalbumname:function(id){
		return production.findOne({_id:id}).title;
	},
	parthImage:function(id){
		var result = singer.findOne({_id:id}).image;
		if(result)
			return "/img/singer/"+result;
	}
});
Template.musicdetail.events({
	"click #currentplay":function(e){
		e.preventDefault();
		var audioElem = document.getElementById('audio');
		//alert(audioElem);
		if (audioElem.paused){
		    audioElem.play();
			$("#currentplay").addClass("fa-pause");
			$("#currentplay").removeClass("fa-play");
		}
		else{
		    audioElem.pause();
			$("#currentplay").removeClass("fa-pause");
			$("#currentplay").addClass("fa-play");
		}
		
	},
	"click #reload12":function(){
		Meteor._reload.reload();
	}
});

