export default function Vote(props) {
    return (
        <div className="vote">
            <div className="thumbsup" onClick={props.onThumbsUp}>
                <i className="fa fa-thumbs-up"></i>
            </div>
            <div className="thumbsdown" onClick={props.onThumbsDown}>
                <i className="fa fa-frown"></i>
            </div>
        </div>
    );
}