// index frontend
Template.index.helpers({
	getSinger: function(){
		var result = singer.find({});
		console.log(result);
		return result;
	},
	countSinger: function(){
		return result = singer.find({}).count();
	},
	numMusic: function(singer){
		console.log("SINGER"+singer);
		var result = musics.find({singerid:singer}).count();
		console.log("result"+result);
		return result;
	}
});

// male 
Template.male.helpers({
	getMale: function(){
		var result = singer.find({gender:"Male"});
		console.log(result);
		return result;
	},
	countMale: function(){
		return result = singer.find({gender:"Male"}).count();
	}
});
// female 
Template.female.helpers({
	getFemale: function(){
		var result = singer.find({gender:"Female"});
		console.log(result);
		return result;
	},
	countFemale: function(){
		return result = singer.find({gender:"Female"}).count();
	}
});

