import React from 'react';

/**
 * ErrorBoundary – catches unhandled React render errors and shows a
 * friendly fallback instead of a blank white screen.
 *
 * Bug fixed: There was no error boundary, so any uncaught render error
 * would crash the entire application with a white screen and no recovery path.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-6 px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800">Something went wrong</h1>
          <p className="text-slate-500 max-w-md">
            An unexpected error occurred. Please try returning to the home page.
          </p>
          {import.meta.env.DEV && this.state.error && (
            <pre className="bg-red-50 text-red-700 border border-red-200 rounded-xl p-4 text-sm text-left max-w-xl overflow-auto">
              {this.state.error.toString()}
            </pre>
          )}
          <button
            onClick={this.handleReset}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
