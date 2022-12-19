import { fireEvent, render } from "@testing-library/react";
import { ErrorComponent } from "Error";
import React from "react";

describe('error page', () => {
    it('show alert with less info', async () => {
       const {findByText} = render(<ErrorComponent errorCode={'test'}/>)
       const showLess = findByText('showing less');
       expect(showLess).toBeDefined();
    })

    it('show alert with more info', async () => {
        const {findByText} = render(<ErrorComponent errorCode={'test'}/>)
        const button = await findByText('Show more');
        fireEvent.click(button);
        const moreText = await findByText('showing more')
        expect(moreText).toBeDefined();
    });
})