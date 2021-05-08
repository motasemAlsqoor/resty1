import "./Result.scss";
//conditional rendering 
//keeping calculation out of render method
const renderResult = (result) => {
    if(result.length==0) return null;
    return  (
        <div className="json">
            Result
            <pre>{JSON.stringify(result, null, 4)}</pre>
        </div>
    );
  }
const Result = ({ result })=>renderResult(result);

export default Result;
