import Typical from "react-typical";
import fruits from "../assets/fruits.png";
import { NavHeader } from "../Components/NavHeader";
import { Col } from "react-bootstrap";

export function Index() {


  return (
    <div className="container-fluid" style={{margin: 0, padding: 0}}>
      <div className="bg-gradient-to-b from-white to-gray-300 min-h-[100vh] h-full">
        <NavHeader />
        <div className="flex flex-row">
          <Col md={7}>
            <img src={fruits} className="w-[600px] img-fluid d-none d-sm-none d-md-block d-lg-block" alt="" />
          </Col>
          <Col xs={12} md={4}>
            <div className="flex flex-col justify-center items-center h-60">
              <h2 className="font-ubuntu text-3xl">Direto do campo para</h2>
              <h2 className="font-ubuntu text-3xl text-verde">
                <Typical
                  steps={["sua casa", 1000, "seu restaurante", 1000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h2>
            </div>
            <div className="flex flex-col">
              <button className="bg-laranja h-14 rounded-[50px] font-ubuntu text-white text-xl m-3">
                Para sua casa
              </button>
              <button className="bg-verde h-14 rounded-[50px] font-ubuntu text-white text-xl m-3">
                Para seu restaurante
              </button>
            </div>
          </Col>
          </div>
          <footer className="text-center opacity-50">@Cindel Sousa</footer>
      </div>
      </div>
  );
}
