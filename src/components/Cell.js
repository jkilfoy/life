function Cell({x, y, width, height, status}) {

    let style = {
        top: y,
        left: x,
        width: width + 'px',
        height: height + 'px',
    }

    return (
        <div className={"cell " + status}  style={style} />
    )
}

export default Cell;