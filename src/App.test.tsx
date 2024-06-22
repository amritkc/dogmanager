
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Test", () => {
  test("Validate App Header", () => {
    const dogManagerLabel = 'Dog Manager';
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(dogManagerLabel);
  })


  test("Valadidate app Snapshot test", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  })
})
