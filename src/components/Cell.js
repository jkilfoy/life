function Cell({col, row, size, barrierSize}) {

    let cellSize = '' + (size - barrierSize) + 'px';

    let style = {
        top: row*size,
        left: col*size,
        width: cellSize,
        height: cellSize,
        display: 'absolute',
        background: 'blue'
    }

    return (
        <div className="cell" style={style} />
    )
}

export default Cell;