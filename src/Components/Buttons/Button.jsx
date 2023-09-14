
function Button(props) {
    return (
    <button type="button" style={{backgroundColor: props.color}}>
      {props.description}
    </button>
    )
}

export default Button