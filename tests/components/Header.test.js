import { mount } from 'enzyme'
import Header from '../../components/layout/Header';

describe('Header', () => {
    it('should render name of application', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.find('h1.logo').text()).toBe('MyDefinition')
    });

    it('should render inside <header /> native tag', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.find('header')).toHaveLength(1);
    })
})