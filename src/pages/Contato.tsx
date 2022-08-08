import { NavHeader } from "../Components/NavHeader";
import { Linkedin } from "../Components/Icons/Linkedin";
import { Git } from "../Components/Icons/Git";
import bag from "../assets/bag.png";
import contact from "../assets/contact.png";

export function Contato() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-300 min-h-[100vh] h-full">
      <NavHeader />
      <div className="flex flex-row justify-between">
        <img
          src={bag}
          className="w-[550px] img-fluid d-none d-sm-none d-md-block d-lg-block"
          alt=""
        />
        <div className="flex h-40 items-center flex-col text-center w-full">
          <img src={contact} className="w-[300px] m-8"></img>
          <h2 className="font-ubuntu text-3xl">Cindel Sousa</h2>
          <h3 className="font-ubuntu text-2xl">
            Frontend Developer & UX/UI Designer
          </h3>
          <div className="flex flex-row justify-evenly w-60 m-3">
          <a href="https://www.linkedin.com/in/cindelsousa/">
            <Linkedin />
          </a>
          <a href="https://github.com/Cindelevelyn">
            <Git />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
