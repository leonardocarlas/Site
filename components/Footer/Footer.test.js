import Footer from "./Footer";
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import {queryByAltText} from "@testing-library/react";
import { render, screen } from '@testing-library/react';
import { Util } from "../../utils/util";
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
    useRouter() {
      return ({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null)
      });
    },
  }));

describe('Testing Footer Component', () => {



      beforeEach( async () => {
        const useRouter = jest.spyOn(require("next/router"), "useRouter");

        useRouter.mockImplementation(() => ({
        route: '/',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn()
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null)
        }));
    })

    it('should render the component', function () {

    });

    it('should render the images', function () {
        render(
                <Provider store={store}>
                    <Footer></Footer>
                </Provider>
        );
        let githubImage = screen.getByTestId('linkedinImage');
        expect(githubImage).toBeInTheDocument();
    });
});
