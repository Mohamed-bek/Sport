import React, { useState, useEffect, useContext } from "react";
import imgAbout from "../images/About us page-amico.png";
import { AppContext } from "../App";

function About() {
  return (
    <div
      className="About animate__animated animate__bounceInLeft delay-1 "
      id="About"
    >
      <div className="cont">
        <h1 className="animate__animated animate__bounceInDown delay-2">
          من <span>نحن</span>
        </h1>
        <div className="AboutCont">
          <div className="Info">
            <p>
              نحن فريق متكامل من الخبراء في المجال الرياضي الصحي ،النفسي
              والغذائي. ملتزمون بتقديم افضل الخدمات واسرعها مقابل مبالغ رمزيه
              باستخدام احدث الطرق والاساليب وهذا بهدف واحد وهو الوصول لراحتك
              شعارنا التميز الامانه الثقه والفعالية. يتصل فريقنا مباشره بطبيبك
              الخاص من اجل جمع اكبر كم من المعلومات والبيانات المتعلقه بحالتك
              الصحيه وبعد دراسه تلك البيانات من جميع النواحي يتم خلق برنامج
              رياضي مناسب لك، برنامج غذائي حسب متطلباتك الصحية، بالاضافه الى
              مرافقه نفسيه. كما نمنحك المجال للتواصل المباشر مع المختصين واطرح
              تساؤلاتك واشكالياتك . اضافه الى ذلك نقوم بحملات تحسيسيه وتوعويه
              للاستفاده منها كما تمنح المنصه عروض وخصوم لمشاركها الاوفياء. نحن
              هنا لمرافقتك نحو صحه افضل تحت شعار التميز الامانه الثقه والفعاليه.{" "}
            </p>
          </div>
          <div className="imgCont">
            <img src={imgAbout} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
