import { screen } from '@testing-library/react';
import { H1 } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<H1 />', () => {
  it('should render a H1', () => {
    renderTheme(<H1>Hello World</H1>);
    const H1 = screen.getByRole('H1', { name: 'Hello World' });
    expect(H1).toBeInTheDocument();
  });
});
