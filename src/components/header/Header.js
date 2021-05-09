import "./Header.scss";
function Header(props) {
  return (
    <>
      <div className="header">Resty</div>
      {props.children}
    </>
  );
}
export default Header;
