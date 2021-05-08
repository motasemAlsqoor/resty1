import "./Result.scss";
//conditional rendering
//keeping calculation out of render method
const renderResultOrLoading = (result, isLoading) => {
  if (isLoading) {
    return <div className="loader"></div>;
  } else {
    return (
      <div className="json">
        <h3>Result</h3>
        <pre>{JSON.stringify(result, null, 4)}</pre>
      </div>
    );
  }
};
const Result = ({ result, isLoading }) => {
  if (result.length === 0) return null;
  return renderResultOrLoading(result, isLoading);
};

export default Result;
