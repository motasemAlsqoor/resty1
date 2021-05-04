import './Result.scss'
function Result({ result }) {
    return (
        <div className="json"><pre>{JSON.stringify(result,null,4)}</pre></div>
    );
}
export default Result;