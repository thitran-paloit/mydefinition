import React from 'react';

import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';

import lib from '../helpers/lib';
import Loading from '../components/section/Loading';


class List extends React.Component {
    constructor() {
        super();

        this.state = {
            bg: lib.getRandomColor(),
            loading: true,
            items: []
        };
    }

    async componentDidMount() {
        const response = await fetch(lib.getApiHost() + '/api/definition');
        const definitions = await response.json();

        this.setState({
            items: definitions,
            loading: false,
        });
    }

    render() {
        let display;
        if (this.state.loading) {
            display = <Loading />
        } else if (this.state.items.length > 0) {
            const items = this.state.items.map((item, key) => <li key={key}>{item.name}</li>);
            display = <ul className="definition-items">{items}</ul>;
        } else {
            display = <p className="alert">No data</p>
        }

        return (
            <Layout>
                <Container bg={this.state.bg}>
                    {display}
                </Container>
            </Layout>
        );
    }
}

export default List;