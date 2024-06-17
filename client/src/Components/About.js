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
              والغذائي. ملتزمون بتقديم أفضل الخدمات وأسرعها مقابل مبالغ رمزية
              باستخدام أحدث الطرق والأساليب وهذا بهدف واحد وهو الوصول لراحتك
              شعارنا التميز الأمانة، الثقة والفعالية. يتصل فريقنا مباشرة بطبيبك
              الخاص من أجل جمع أكبر كم من المعلومات والبيانات المتعلقة بحالتك
              الصحية وبعد دراسة تلك البيانات من جميع النواحي يتم خلق برنامج
              رياضي مناسب لك، برنامج غذائي حسب متطلباتك الصحية. كما نمنحك المجال
              للتواصل المباشر مع المختصين واطرح تساؤلاتك. إضافة إلى ذلك نقوم
              بحملات تحسيسية وتوعوية للاستفادة منها كما تمنح المنصة عروض وخصوم
              لمشاركها الأوفياء. نحن هنا لمرافقتك نحو صحة أفضل تحت شعار التميز
              الأمانة،الثقة والفعالية .
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
