
import { Link } from "react-router-dom";
import Container from "./Container";

import styles from './Nav.module.css'
import logo from "../../img/tripi.png";

function Nav(){
    return (

<nav  className={styles.nav}>
    <Container>
    <Link to="/">
          <img src={logo} alt="Trip" />
        </Link>

        <ul className={styles.list}>
<li  className={styles.item}>
<Link to ="/Home">Home</Link>
     </li>
<li className={styles.item}>
<Link to ="/Promocao">Promoção</Link>   
</li>



</ul>
    </Container>

    </nav>

)
}

export default Nav