if (Meteor.isClient){
  Template.camera_button.events({
    'click #camera-button': function(){
      // Define the camera settings
      var options = {
        width: 640,
        height: 640,
        quality: 100
      };
      // Call the camera API
      MeteorCamera.getPicture(options, function(error, data){
        if (error){
          // Handle the error as you wish
          console.log(error);
        }else{
          // Store the a base64-encoded data URI for the image
          // taken by the camera
          Session.set('picture', data);
        }
      });
    }
  });
}