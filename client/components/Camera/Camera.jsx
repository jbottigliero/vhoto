Camera = React.createClass({

	getInitialState: function() {
			return {
				src: '',
				canvas: {
					height: 0,
					width	: 0,
				}
			};
	},
	
	componentDidMount() {
	
		var video = React.findDOMNode(this.refs.video);
		
		video.onloadedmetadata = () => {
			
				this.setState({
					canvas: {
						height: video.scrollHeight,
						width	: video.scrollWidth
					}
				});
				
				video.play();
				
				this.streamToCanvas();
				
		};

		this.setState({
			src: window.URL.createObjectURL(this.props.stream)
		});
		
	},
	
	streamToCanvas() {

		var canvas  = React.findDOMNode(this.refs.canvas);
				context = canvas.getContext('2d');
				
		var draw = () => {
			this.setState({
				animation: requestAnimationFrame(draw)
			});
			
			context.drawImage(
				React.findDOMNode(this.refs.video),
				0,
				0,
				this.state.canvas.width,
				this.state.canvas.height
			);
		}
		
		this.setState({
			animation: requestAnimationFrame(draw)
		});

	},
	
	render() {
		
		var className = 'invisible';
		if (this.state.canvas.height > 0) {
			className = 'hidden';
		}
		
    /**
     * @todo Remove React.findDOMNode
     */
		return (
			<div className="camera">
				<canvas
					ref="canvas"
          className="camera-preview"
					height={this.state.canvas.height}
					width={this.state.canvas.width}
				>
				</canvas>
				<video ref="video" className={className} src={this.state.src}></video>
				<CameraActions {...this.props} canvas={React.findDOMNode(this.refs.canvas)} />				
			</div>
		);
	}

});