const Icons = ({ icon, spanText }) => {
    return (
        (spanText ? 
        <div className={`icon icon-${icon.props.name}`}>{icon}<span>{spanText}</span></div> :
         <div className={`icon icon-${icon.props.name}`}>{icon}</div>)
    )
}

export default Icons