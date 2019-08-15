import React from 'react';

import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import lib from '../helpers/lib';

class Create extends React.Component {
    constructor() {
        super();
        this.state = {
            isSaving: false,
            error: false,
            word: '',
            definition: '',
            bg: lib.getRandomColor()
        }
    }

    showError = () => {
        this.setState({
            error: 'Missing params'
        });
    }

    handleSave = async () => {
        if (this.state.word == '' || this.state.definition == '') {
            this.showError();
            return;
        }
        this.setState({
            isSaving: true,
            error: false,
        });

        await fetch(lib.getApiHost() + ':8000/api/definition', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.word,
                definition: this.state.definition,
            })
        });

        this.setState({
            isSaving: false,
            error: false,
            word: '',
            definition: '',
        });

        alert('Done');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: e.target.value != '' ? false : 'Missing params',
        });
    }

    render() {
        let message = '';
        if (this.state.error) {
            message = <div className="alert alert-danger">{this.state.error}</div>;;
        }

        let btn = <button className="btn btn-primary" onClick={this.handleSave}>Save</button>;
        if (this.state.isSaving) {
            btn = <button disabled className="btn btn-primary">Saving...</button>;
        }

        return (
            <Layout>
                <Container bg={this.state.bg}>
                    <div className="word-group">
                        {message}
                        <div className="word-container">
                            <input type="text" name="word" placeholder="..." value={this.state.word} length="50" onChange={this.handleChange} />
                        </div>  

                        <div className="word-definition">
                            <textarea name="definition" placeholder="Definition goes here" value={this.state.definition} length="300" onChange={this.handleChange}></textarea>
                        </div>

                        <div className="word-group-footer">
                            {btn}
                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }
}

export default Create;