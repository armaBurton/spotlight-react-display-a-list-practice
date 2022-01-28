import { render, screen } from '@testing-library/react';
import App from './App';

test('The dragons in the underground lake whose fighting upsets Uther Pendragon\'s tower, as revealed by Merlin; Geoffrey of Monmouth, Historia Regum Britanniae (c.1136)', () => {
  render(<App />);
  const linkElement = screen.getByText(/underground lake whose /i);
  expect(linkElement).toBeInTheDocument();
});
