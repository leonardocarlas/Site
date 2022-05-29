import Footer from "./Footer";
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import {queryByAltText} from "@testing-library/react";
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

cost mockStore = configureStore([]);

describe('Testing Footer Component', () => {

    let store;
    let component;

    beforeEach( function () {
        store = mockStore({
            isDarkmode : false
        });
        component = renderer.create(
            <Provider store={store}>
                <Footer></Footer>
            </Provider>
        );
    })


    it('should render with given state from Redux store', () => {

    });

    it('should render the images', function () {

        let linkedinImage = screen.getByAltText('Linkedin Profile');
        let logoImage = screen.getByAltText('Logo Image Leonardo Carlassare');
        let githubImage = screen.getByAltText('Github profile');
        expect(linkedinImage).toBeInTheDocument();
        expect(logoImage).toBeInTheDocument();
        expect(githubImage).toBeInTheDocument();
    });
});

