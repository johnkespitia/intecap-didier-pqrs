import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import App from './App.jsx';

describe('App Component', () => {
  it('should render the App component correctly', () => {
    render(<App />);
    const linkElement = screen.getByText(/count is/i);
    expect(linkElement).toBeInTheDocument();
  });
});