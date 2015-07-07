ImageList = new React.createClass({
	mixins: [ReactMeteorData],
	
	getMeteorData() { 
		return {
			images: Images.find().fetch()
		};
	},
  
  componentDidUpdate() {
    window.scrollTo(0, this.getDOMNode().scrollHeight);  
  },
	
	render() {
		return <ul className="list-inline media">
			{this.data.images.map(function(image){
				return (
					<li key={image._id}>
						<img src={image.src} className="img-square" height="100px" width="100px" />
					</li>
				)
			})}
		</ul>;
	}
});