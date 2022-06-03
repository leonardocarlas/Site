import { screen, render, getByTestId } from "@testing-library/react";
import Board from './Board';

describe('Testing Board Component', () => {
    it('should render the component', async () => {
        render(<Board></Board>);
        expect(screen.getByTestId('board')).toBeInTheDocument();
    });
})