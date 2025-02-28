import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/"}>
        <img src="/static-images/logo.svg"/>
    </Link>
  )
}

export default Logo
