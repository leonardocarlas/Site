import { fireEvent, render, screen } from '@testing-library/react';
import AddMore from './AddMore';

test('It should call the function handler on click', async () => {
    const fn = jest.fn();
    render(<AddMore onAdd={fn} />);

    fireEvent.click(screen.getByTestId('iconButton'));

    expect(fn).toHaveBeenCalled();
});