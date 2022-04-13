import { shallow } from "enzyme";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    test('debe de mostrar los valores por defecto', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor tomando el valor pasado al componente al props', () => {
        const wrapper = shallow(<CounterApp value={100} />);

        const valorContador = wrapper.find('h2').text();

        expect(valorContador).toBe('100');
    });
});