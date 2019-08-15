import { Fragment } from 'react';

export default function WordDefinition(props) {
    let additionClass = '';
    if (props.withCover) {
        additionClass = 'with-cover';
    }

    const values = props.value.split("\n").map((line, index) => {
        return (
            <Fragment key={index}>
                {line}
                <br />
            </Fragment>
        );
    });

    return (
        <div className={"word-definition " + additionClass} onClick={props.onClick}>
            <p className="content">{values}</p>
        </div>
    )
}