Images = new Mongo.Collection('images');

navigator.getUserMedia =	navigator.getUserMedia ||
													navigator.webkitGetUserMedia ||
													navigator.mozGetUserMedia ||
													navigator.msGetUserMedia;
																		
if (!navigator.getUserMedia) {
	/**
	 * @todo
	 */
	console.error('Unable to load getUserMedia');
	return; 
}

Meteor.startup(function(){
	
	var waiting = React.render(<Waiting />, document.getElementById('root'));
			
	navigator.getUserMedia(
		{ audio: false, video: true},
		function(stream) {
			React.render(<App stream={stream} />, document.getElementById('root'));
		},
		function(err) {
			console.error('Unable to load getUserMedia stream.' + err);
		}
	);

});