
import { render, screen } from '@testing-library/react';
import DogList from '../dogList';
import { DogListProps } from '../../../utils/constant';


describe("DogList Test", () => {
    const DogListProsMock: DogListProps = { dogs: [{ name: "husky", age: 12 }], LastUpdate: "22.6.2024, 19:21:38" };

    test("Validate DogList Test", () => {
        const dogListLabel = "Dog's List";
        render(<DogList dogs={DogListProsMock.dogs} LastUpdate={DogListProsMock.LastUpdate} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(dogListLabel);
    })


    test("Valadidate Dog List Snapshot test", () => {
        const component = render(<DogList dogs={DogListProsMock.dogs} LastUpdate={DogListProsMock.LastUpdate} />);
        expect(component).toMatchSnapshot();
    })
})
