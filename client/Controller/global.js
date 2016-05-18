var clock = 1500;
var timeLeft = function() {
    if (clock > 0) {
        clock--;
        Session.set("time", clock);
    } else {
        return Meteor.clearInterval(interval);
    }
};

var interval = Meteor.setInterval(timeLeft, 2000);

Template.registerHelper("time", function() {
    return Session.get("time");
});
Template.registerHelper("slug", function() {
    return slugname(this.title);
});
slugname = function(title) {
    title = title.replace(/\-/g, "(minus)");
    title = title.replace(/\s/g, "-");
    title = title.replace(/\%/g, "(percentag)");
    title = title.replace(/\+/g, "(plush)");
    title = title.replace(/\ô/g, "(ocir)");
    title = title.replace(/\®/g, "(copyright)");
    title = title.replace(/\°/g, "(number)");
    title = title.replace(/\Ô/g, "(bigocir)");
    title = title.replace(/\²/g, "(square)");
    title = title.replace(/\`/g, "(accentaigu)");
    title = title.replace(/\é/g, "(eaccentaigu)");
    title = title.replace(/\É/g, "(bigeaccentaigu)");
    title = title.replace(/\&/g, "(and)");
    title = title.replace(/\//g, "(slash)");
    title = title.replace(/\’/g, "(apostrophe)");
    title = title.replace(/\'/g, "(quote)");
    title = title.replace(/\!/g, "(warning)");
    title = title.replace(/\?/g, "(question)");
    title = title.replace(/\$/g, "(dolla)");
    title = title.replace(/\è/g, "(eaccentgrave)");
    title = title.replace(/\–/g, "(hyphen)");
    //title = title.toLowerCase();
    return title;
}
    
Template.registerHelper("unSlug",function(){
    return unSlugName(this.title);
});
unSlugName = function(title){
    title = title.replace(/\-/g," ");
    title = title.replace(/\(percentag\)/g,"%");
    title = title.replace(/\(plush\)/g,"+");
    title = title.replace(/\(ocir\)/g,"ô");
    title = title.replace(/\(minus\)/g,"-");
    title = title.replace(/\(copyright\)/g,"®");
    title = title.replace(/\(number\)/g,"°");
    title = title.replace(/\(bigocir\)/g,"Ô");
    title = title.replace(/\(square\)/g,"²");
    title = title.replace(/\(accentaigu\)/g,"`");
    title = title.replace(/\(eaccentaigu\)/g,"é");
    title = title.replace(/\(bigeaccentaigu\)/g,"É");
    title = title.replace(/\(and\)/g,"&");
    title = title.replace(/\(slash\)/g,"/");
    title = title.replace(/\(apostrophe\)/g,"’");
    title = title.replace(/\(quote\)/g,"'");
    title = title.replace(/\(warning\)/g,"!");
    title = title.replace(/\(question\)/g,"?");
    title = title.replace(/\(dolla\)/g,"$");
    title = title.replace(/\(eaccentgrave\)/g,"è");
    title = title.replace(/\(hyphen\)/g,"–");
    return title;
}

Getfavorite = function(){
    var userid = Meteor.userId();
    var mId = Session.get('MUSIC-ID');
    var heartempty = '';
    var heartfull = '';
    var fav = favorite.findOne({ musicId: mId, userId: userid });
    if (typeof fav !== 'undefined') {
        heartempty = 'nonelike';
        heartfull = '';
    } else {
        heartempty = '';
        heartfull = 'nonelike';
    }
    var html = '';
    html += '<button type="button" class="btn btn-link unfav ' + heartempty + '" data-fav="">';
        html += '<i class="fa fa-heart"></i>';
    html += '</button>';
    html += '<button type="button" class="btn btn-link fav ' + heartfull + '" data-fav="">';
        html += '<i class="fa fa-heart-o"></i>';
    html += '</button>';
   // html += '<a href="#" data-id="' + productId + '" class="heart pull-right ' + heartempty + ' unlike unlike' + productId + '"><span class="fa fa-heart-o"></span></a>';
    //html += '<a href="#" data-id="' + productId + '" class="heart pull-right ' + heartfull + ' like like' + productId + '"><span class="fa fa-heart fa-heart-full"></span></a>';
    return html;
}
Template.registerHelper('Getfavorite', function(productId) {
    if (productId) {
        return Getfavorite(productId);
    }
});
