
import { fireEvent, render, screen } from '@testing-library/react';
import DogForm from '../dogForm';


describe("App Test", () => {
    const addDogmock = jest.fn();
    test("Dog Form Renders Corectly adding dogs", () => {

        render(<DogForm addDog={addDogmock} />)

        fireEvent.change(screen.getByTestId("dogsname"), { target: { value: 'husky' } })
        fireEvent.change(screen.getByTestId("dogsage"), { target: { value: '9' } })
        fireEvent.click(screen.getByTestId("submitdogslist"));
        expect(addDogmock).toHaveBeenCalledWith("husky", 9)
    })

    test("Valididate SnapShot for DogList", () => {
        const components = render(<DogForm addDog={addDogmock} />)
        expect(components).toMatchSnapshot()
    })

})
