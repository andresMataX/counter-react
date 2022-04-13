import { shallow } from "enzyme";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar los valores por defecto', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor tomando el valor pasado al componente al props', () => {
        const wrapper = shallow(<CounterApp value={100} />);

        const valorContador = wrapper.find('h2').text();

        expect(valorContador).toBe('100');
    });

    test('debe de incrementar con el botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const valorContador = wrapper.find('h2').text().trim();

        expect(valorContador).toBe('11');
    });

    test('debe de decrementar el valor con -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const valorContador = wrapper.find('h2').text().trim();

        expect(valorContador).toBe('9');
    });

    test('debe de reiniciar el valor del contador al presionar el botón', () => {
        const wrapper = shallow(<CounterApp value={105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const valorContador = wrapper.find('h2').text().trim();

        expect(valorContador).toBe('105');
    });
});