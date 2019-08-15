export default function WordContainer(props) {
    const styles = {
        fontSize: '40px'
    };
    if (props.value.length > 10) {
        styles.fontSize = '30px';
    } else if (props.value.length > 20) {
        styles.fontSize = '20px';
    }

    return (
        <div className="word-container" style={styles}>
            {props.value}
        </div>  
    );
}