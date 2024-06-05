import axios from "axios";
import React, { useEffect, useState } from "react";
import { programeStore } from "../context/UserContext";
import gym from "../images/gym.png";

function MyPrograme() {
  const [password, setpassword] = useState();
  const { programe, updatePrograme } = programeStore();
  const loginToPrograme = async (password) => {
    try {
      const { data } = await axios.get(
        "https://sport-kappa-six.vercel.app/myPrograme/" + password
      );
      updatePrograme(data.programe);
      window.location.href = "/programeDetails";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (programe) loginToPrograme(programe?._id);
  }, []);
  return programe ? (
    <div> Yes programe </div>
  ) : (
    <div className="ProgrameRequest MyPrograme NewPrograme">
      <div>
        <div>
          <h1>مرحبا بك</h1>
          <h2>
            {" "}
            من هنا يمكنك الولوج إلى برامجك <span>
              {" "}
              التدريبي و الغدائي{" "}
            </span>{" "}
          </h2>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="كلمة السر"
          />
          <button onClick={() => loginToPrograme(password)}> دخول </button>
        </div>
      </div>
      <div>
        <img src={gym} alt="Gym" />
      </div>
    </div>
  );
}

export default MyPrograme;
