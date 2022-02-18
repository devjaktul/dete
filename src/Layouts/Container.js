import BoilerRoom from "../Pages/BoilerRoom";
import Connections from "../Pages/Connections";
import Installations from "../Pages/Installations";
import Res from "../Pages/Res";

const Container = () => {
    return ( 
        <>
            {/* <div className="Page__container"> */}
                <Installations/>
                <BoilerRoom/>
                <Connections/>
                <Res/>
            {/* </div> */}
        </>
     );
}
 
export default Container;