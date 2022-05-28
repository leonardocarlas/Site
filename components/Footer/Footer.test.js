import Footer from "./Footer";
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import {queryByAltText} from "@testing-library/react";
import { render, screen } from '@testing-library/react';

describe('Testing Footer Component', () => {

    it('should render the component', function () {

    });

    it('should render the images', function () {
        render(
                <Provider store={store}>
                    <Footer></Footer>
                </Provider>
        );
        let linkedinImage = screen.getByAltText('Linkedin Profile');
        let logoImage = screen.getByAltText('Logo Image Leonardo Carlassare');
        let githubImage = screen.getByAltText('Github profile');
        expect(linkedinImage).toBeInTheDocument();
        expect(logoImage).toBeInTheDocument();
        expect(githubImage).toBeInTheDocument();
    });
});

