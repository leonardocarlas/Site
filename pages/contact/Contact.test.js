import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("Contact Page", () => {

    it("should render the page", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Contact />
                </Provider>
            </BrowserRouter>
        );
    
        const el = screen.getByAltText('coffee-image');
        expect(el).toBeInTheDocument();
    });

    

});