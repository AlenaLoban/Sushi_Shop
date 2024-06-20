import { Component, ReactNode, PropsWithChildren } from 'react';
type ErrorBoundaryState =
  | {
      error: any;
      hasError: true;
    }
  | {
      error: null;
      hasError: false;
    };

type ErrorBoundaryProps = PropsWithChildren;

const initialState: ErrorBoundaryState = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  componentDidCatch(error: any) {
    this.setState({ hasError: true, error: error });
  }
  render(): ReactNode {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Something was wrong</p>
          <p>{error?.message}</p>
          <button
            style={{ padding: '10px' }}
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props?.children;
  }
}
export default ErrorBoundary;
