var Images = new Mongo.Collection('images');

Meteor.methods({
  
  getImages() {
      return Images.find().fetch();
  },
  
  addImage(image) {
    return Images.insert({
      src: image.src
    });
  },
  
  addImages(images) {
    images.forEach(function(image){
      Meteor.call('addImage', image);
    });
  },
  
  deleteImage(id) {
    Images.remove(id);
  } 

});

Meteor.startup(function () {
  // code to run on server at startup
});