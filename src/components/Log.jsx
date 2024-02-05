export default function Log ({turnsLogs}){
    return (
        
        <ol id="log">
           {turnsLogs.map((turnLog)=>(
            <li key={`${turnLog.square.row}${turnLog.square.col}`}>{turnLog.player} selected {turnLog.square.row}, {turnLog.square.col}</li>
           ))}
        </ol>
    );
}