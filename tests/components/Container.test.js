import { mount } from 'enzyme';
import Container from '../../components/layout/Container';

describe('Container', () => {
    it('should apply background number', () => {
        const wrapper = mount(<Container bg="1" />);
        expect(wrapper.find('div.bg-1')).toHaveLength(1);
    });

    it('should add children inside', () => {
        const wrapper = mount(<Container><div className="mydiv">1</div><p className="myp">2</p></Container>);
        expect(wrapper.find('div.mydiv')).toHaveLength(1);
        expect(wrapper.find('p.myp')).toHaveLength(1);
    });
});