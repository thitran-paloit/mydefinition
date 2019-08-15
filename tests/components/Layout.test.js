import { mount } from 'enzyme'
import Layout from '../../components/layout/Layout';

describe('Layout', () => {
    it('should render only 1 Header component', () => {
        const wrapper = mount(<Layout />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should render only 1 Head component', () => {
        const wrapper = mount(<Layout />);
        expect(wrapper.find('Head')).toHaveLength(1);
    });

    it('should render navigtaion items', () => {
        const wrapper = mount(<Layout />);
        expect(wrapper.find('Navigation')).toHaveLength(1);
    });
})