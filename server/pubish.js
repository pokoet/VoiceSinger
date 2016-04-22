Meteor.publish("users", function () {
    return Meteor.users.find();
});
Meteor.publish("announcements", function () {
    return announcements.find();
});
Meteor.publish("singer", function () {
    return singer.find();
});
Meteor.publish("production", function () {
    return production.find();
});
Meteor.publish("musics", function () {
    return musics.find();
});
 
Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
})





