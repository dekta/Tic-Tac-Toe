export default function GameBoard ({ onSelectSquare, board }) {
  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) =>
        <l1 key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) =>
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            )}
          </ol>
        </l1>
      )}
    </ol>
  )
}
