import React from "react";
import { FaChevronDown } from "react-icons/fa";
import gym from "../images/gym.png";
import psyco from "../images/psyco.png";
import food from "../images/food.png";
import social from "../images//solcial.png";
import LiComp from "./LiComp";

function Services() {
  return (
    <div
      className="Services animate__animated animate__bounceInLeft delay-1"
      id="Services"
    >
      <div className="cont">
        <h1 className="animate__animated animate__bounceInDown delay-2">
          خدم<span>ات</span>
        </h1>
        <h2>
          يعمل فريقنا على تقديم مجموعه واسعه من الخدمات المصممه خصيصا لتلبيه
          احتياجاتك الصحيه الغذائيه والنفسيه وتشمل خدماتنا ما يلي
        </h2>
        <div className="ServCont">
          <ul className="ServiceList">
            <li>
              <p className="liPara">
                <span>متابعه رياضيه</span>
                تكون عن طريق برامج التمارين المخصصه المتنوعه المصممة باحدث
                التقنيات والاساليب العلمية من طرف مختصين في الصحة واللياقه
                البدنية ، تضمن السلامة والفعالية لكل مستخدم وفقا لحالته الصحيه
                ومستواه البدني فالبرنامج المقدم للنساء اثناء فتره حملهن يكون حسب
                مده الحمل اما بعد الولادة فيكون حسب نوع الولادة ان كانت ولادة
                طبيعية او قيصرة وكم مر على هذه الولادة اما بالنسبه لمرضى الامراض
                المزمنة تكون حسب نوع المرض ودرجة تقدمه.
              </p>
              <div className="imgC">
                <img src={gym} />
              </div>
            </li>
            <li>
              <div className="imgC">
                <img src={food} />
              </div>
              <p className="liPara">
                <span>متابعه غذائية</span>
                وتكون بعد جمع المعلومات الكافيه عن حالاتك الصحيه وتقييمها يتم
                وضع برنامج غذائي دقيق يتناسب مع احتياجاتك و حالتك الصحية لتحسين
                نمط حياتك.
              </p>
            </li>
            <li>
              <p className="liPara">
                <span> متابعه نفسيه</span>
                لا يمكننا انكار ان الحالة النفسية للمريض عامل مهم في تعايشه مع
                المرض الذي يعاني منه وكذالك تأقلم النساء مع الحمل وتخطيهن للكآبة
                ما بعد الولادة. سنقوم بمرافقتك خطوه بخطوه وتقديم الدعم النفسي
                والمعنوي الكامل لك ووضع حلول للمشاكل النفسيه التي ستواجهك عن
                طريق محادثات مباشره مع اخصائيين نفسيين اصحاب خبره عاليه وعن طريق
                نصائح وتوجيهات مدرسه بمبادئ علميه .
              </p>
              <div className="imgC">
                <img src={psyco} />
              </div>
            </li>
            <li>
              <div className="imgC">
                <img src={social} />
              </div>
              <p className="liPara">
                <span> التواصل الإجتماعي</span>
                توفر لك المنصه طريقا للتواصل مع المختصين سواء المختصين الغذائيين
                او النفسيين او مدربي الرياضة عن طريق مراسلات مباشرة عبر المنصه
                وتفتح لك المجال من اجل توسيع معارفك والحصول على اكبر كم من
                المعلومات المراد الوصول اليها بطريقة احترافية آمنة وموثوقة{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
