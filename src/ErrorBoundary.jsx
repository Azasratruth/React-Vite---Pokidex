import React from "react";

// this does all the error handling
class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
	};

	// catch any errors in the component
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
