CameraActions = React.createClass({
	
	getDefaultProps: function() {
		return {
			canvas: null
		}
	},
	
	getInitialState() {
		return {
			recording: false,
			animation: null,
			frames: []
		}
	},
	
	record() {
		
		var recording = !this.state.recording;
		
		if (recording === false) {
			this.stopRecording();
			return;
		}
	
		var canvas = this.props.canvas;
		
		var draw = () => {
			this.setState({
				animation: requestAnimationFrame(draw),
				frames: this.state.frames.concat([{
					src: canvas.toDataURL('image/jpeg', 1)
				}])
			});	
		}
		
		this.setState({
			animation: requestAnimationFrame(draw),
			recording: true
		});
	},
	
	stopRecording() {
		cancelAnimationFrame(this.state.animation);
		
		this.setState({
			recording: false,
			animation: null
		});
		
	},
	
	submit() {
		this.stopRecording();
		
    Meteor.call('addImages', this.state.frames);
		
		this.setState({
			frames: []
		});		
	},

	effect() {
		/**
     * @todo
     */
	},

	render() {
		
		var text = this.state.recording === true ? 'Recording...' : 'Record';
		
		return (			
			<ul className="list-unstyled camera-actions">
				<li>
					<button onClick={this.record} className="btn btn-block">{text}</button>
				</li>
				<li>
					<button onClick={this.submit} className="btn btn-block">Submit</button>
				</li>
				<li>
					<button onClick={this.effect} className="btn btn-block">Something...</button>
				</li>
			</ul>
			
		);
	}

});