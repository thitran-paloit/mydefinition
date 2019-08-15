import { mount } from 'enzyme';
import WordDefinition from '../../components/section/WordDefinition';

describe('WordDefinition', () => {
    it('should render value', () => {
        const wrapper = mount(<WordDefinition value="I'm the definition" />);
        expect(wrapper.find('.content').text()).toBe("I'm the definition");
    })

    it('should have .word-definition class', () => {
        const wrapper = mount(<WordDefinition value="" />);
        expect(wrapper.find('.word-definition').length).toBe(1);
    })

    it('should have with-cover class when withCover is true', () => {
        const wrapper = mount(<WordDefinition value="" withCover="true" />);
        expect(wrapper.find('.with-cover').length).toBe(1);
    });

    it('should not have with-cover class when withCover is false', () => {
        const wrapper = mount(<WordDefinition value="" />);
        expect(wrapper.find('.with-cover').length).toBe(0);
    });

    it('should break to new line with <br/>', () => {
        const value = "a\nb\nc"
        const wrapper = mount(<WordDefinition value={value} />);
        expect(wrapper.find('br').length).toBe(3);
    })

    it('should call handle click event', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<WordDefinition value="" onClick={mockFn} />);
        wrapper.find('.word-definition').simulate('click');

        expect(mockFn.mock.calls.length).toBe(1);
    })
});