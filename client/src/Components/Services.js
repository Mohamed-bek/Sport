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
          يعمل فريقنا على تقديم مجموعة واسعة من الخدمات المصممة خصيصا لتلبية
          احتياجاتك الصحية الغذائية و الرياضية وتشمل خدماتنا ما يلي :
        </h2>
        <div className="ServCont">
          <ul className="ServiceList">
            <li>
              <p className="liPara">
                <span>متابعه رياضيه</span>
                تكون عن طريق برامج من التمارين المخصصة المتنوعة المصممة بأحدث
                التقنيات والأساليب العلمية من طرف مختصين في الصحة واللياقة
                البدنية ، تضمن السلامة والفعالية لكل مستخدم وفقا لحالته الصحية
                ومستواه البدني فالبرنامج المقدم للنساء أثناء فترة حملهن يكون حسب
                مدة الحمل أما بعد الولادة فيكون حسب نوع الولادة إن كانت ولادة
                طبيعية أو قيصرية وكم مر على هذه الولادة أما بالنسبه لمرضى
                الأمراض المزمنة تكون حسب نوع المرض ودرجة تقدمه.
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
                بعد جمع المعلومات الكافية عن حالاتك الصحية وتقييمها يتم وضع
                برنامج غذائي دقيق يتناسب مع احتياجاتك و حالتك الصحية لتحسين نمط
                حياتك.
              </p>
            </li>
            <li>
              <div className="imgC">
                <img src={social} />
              </div>
              <p className="liPara">
                <span> التواصل الإجتماعي</span>
                توفر لك المنصة طريقا التواصل مع المختصين الغذائيين أو مدربي
                اللياقة البدنية عن طريق مراسلات مباشرة عبر المنصة ، فتفتح لك
                المجال من أجل توسيع معارفك و الحصول على أكبر كم من المعلومات
                المراد الوصول إليها بطريقة إحترافية آمنة و موثوقة.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
