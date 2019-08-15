import { mount } from 'enzyme';
import Vote from '../../components/section/Vote';

describe('Vote', () => {
    it('should has .vote class for container', () => {
        const wrapper = mount(<Vote />);
        expect(wrapper.find('div.vote')).toHaveLength(1);
    })

    it('should call onThumbsUp', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<Vote onThumbsUp={mockFn} />);

        wrapper.find('.thumbsup').simulate('click');
        expect(mockFn.mock.calls.length).toBe(1);
    })

    it('should call onThumbsDown', () => {
        const mockFn = jest.fn();
        const wrapper = mount(<Vote onThumbsDown={mockFn} />);

        wrapper.find('.thumbsdown').simulate('click');
        expect(mockFn.mock.calls.length).toBe(1);
    })
});