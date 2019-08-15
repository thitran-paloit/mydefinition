import React from 'react';
import lib from '../helpers/lib';

const defaultItems = [
    {
        word: 'Serverless computing',
        definition: 'A method of providing backend services on an as-used basis. A Serverless provider allows users to write and deploy code without the hassle of worrying about the underlying infrastructure.'
    },
    {
        word: 'TypeScript',
        definition: 'A superset of JavaScript which primarily provides optional static typing, classes and interfaces'
    },
    {
        word: 'AWS Lambda',
        definition: 'A compute service that lets you run code without provisioning or managing servers'
    },
    {
        word: 'Inflection',
        definition: 'A change in the form of a word (typically the ending) to express a grammatical function or attribute such as tense, mood, person, number, case, and gender.'
    },
    {
        word: 'GraphQL',
        definition: 'A syntax that describes how to ask for data, and is generally used to load data from a server to a client.'
    },
    {
        word: 'PALO IT Core Values',
        definition: 'We Care, We Act, We Share, We Choose and We Deliver'
    }
];

class Import extends React.Component {
    componentDidMount() {
        lib.setData(defaultItems);
    }
    render() {
        return <p>Done!</p>
    }
}

export default Import;