App = React.createClass({
	render () {
		return	<main>
              <User>
                <Camera stream={this.props.stream} />
              </User>
							<ImageList />
						</main>;
	}
});