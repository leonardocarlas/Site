import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';


describe('Testing Button Component', () => {

    it('should call the function handler', async () => {
        let fn = jest.fn();
        render(
            <Button callback={fn}></Button>
        );
        fireEvent.click(screen.getByTestId('button'));
        expect(fn).toHaveBeenCalled();
    });

    it('should have the text passed inside', async () => {
        let text = 'trial';
        render(
            <Button label={text}></Button>
        );
        expect(screen.getByTestId('button')).toBeInTheDocument();
    });

})