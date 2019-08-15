import { mount } from 'enzyme';

import WordContainer from '../../components/section/WordContainer';

describe('WordContainer', () => {
    it('should have fontSize = 40px for value less than 10 characters', () => {
        const lessThan10 = mount(<WordContainer value="Short" />);
        expect(lessThan10.find('.word-container').prop('style')).toHaveProperty("fontSize", '40px');
    })

    it('should have fontSize = 30 for 10 < value <= 20 characters', () => {
        const greaterThan10 = mount(<WordContainer value="I'm greater than 10" />);
        expect(greaterThan10.find('.word-container').prop('style')).toHaveProperty('fontSize', '30px');
    })

    it('should have fontSize = 20 for value > 20 characters', () => {
        const greaterThan20 = mount(<WordContainer value="I'm greater than 20 characters" />);
        expect(greaterThan20.find('.word-container').prop('style')).toHaveProperty('fontSize', '20px');
    })

    it('should render value', () => {
        const wrapper = mount(<WordContainer value="MyWord" />);
        expect(wrapper.find('.word-container').text()).toBe('MyWord');
    })
})