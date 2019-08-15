import { mount } from 'enzyme';
import Navigation from '../../components/layout/Navigation';

describe("Navigation", () => {
    it('should render #main-navigation', () => {
        const wrapper = mount(<Navigation />);

        expect(wrapper.find('#main-navigation')).toHaveLength(0);
    });
})