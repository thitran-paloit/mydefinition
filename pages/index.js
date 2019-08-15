import React from 'react';
import _ from 'lodash';

import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import WordContainer from '../components/section/WordContainer';
import WordDefinition from '../components/section/WordDefinition';
import Vote from '../components/section/Vote';
import Loading from '../components/section/Loading';

import lib from '../helpers/lib';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            withCover: true,
            loading: true,
            items: [],
            bg: lib.getRandomColor()
        };
    }

    async componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         items: _.shuffle(lib.getData().map(defaultItem => {
        //             defaultItem.count = 2;
        //             return defaultItem;
        //         })),
        //         loading: false,
        //     })
        // }, 1000);

        const response = await fetch(lib.getApiHost() + '/api/definition/request');
        const definitions = await response.json();
        this.setState({
            items: _.shuffle(definitions).map(defaulItem => {
                defaulItem.count = 2;
                return defaulItem;
            }),
            loading: false,
        });
    }

    toggleDefinationVisibility = () => {
        this.setState(prevState => {
            prevState.withCover = !prevState.withCover;
            return prevState;
        });
    }

    hitCounter = async (id) => {
        await fetch(lib.getApiHost() + '/api/definition/' + id + '/hit', {
            method: 'PUT'
        });
    }

    thumbsUpHandler = () => {
        this.setState(prevState => {
            let activeItem = prevState.items.shift();

            if (activeItem.count > 1) {
                activeItem.count--;
                prevState.items.push(activeItem);
            } else {
                //send request to update
                this.hitCounter(activeItem.id);
            }

            prevState.withCover = true;
            prevState.bg = lib.getRandomColor();
            return prevState;
        });
    }

    thumbsDownHandler = () => {
        this.setState(prevState => {
            let activeItem = prevState.items.shift();
            prevState.items.push(activeItem);

            prevState.withCover = true;
            prevState.bg = lib.getRandomColor();
            return prevState;
        });
    }

    render() {        
        let display;
        if (this.state.loading) {
            display = <Loading />
        } else if (this.state.items.length > 0) {
            const activeItem = this.state.items[0];

            display = (
                <div className="word-group">
                    <WordContainer value={activeItem.name} />
                    <WordDefinition value={activeItem.definition} withCover={this.state.withCover} onClick={this.toggleDefinationVisibility} />
                    <Vote onThumbsUp={this.thumbsUpHandler} onThumbsDown={this.thumbsDownHandler} />
                </div>
            );
        } else {
            display = <p className="alert">Yay! You got them all!</p>
        }

        return (
            <Layout>
                <Container bg={this.state.bg}>
                    {display}
                </Container>
            </Layout>
        )
    }
}

export default Home;