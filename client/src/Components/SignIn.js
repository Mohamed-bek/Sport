import React, { useState } from "react";
import SignImgBl from "../images/SignBlue.png";
import { FaPhone } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
  faCalendarDays,
  faLock,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import axios from "axios";
import { userStore } from "../context/UserContext";

function SignIn(props) {
  const { updateUser } = userStore();
  const Changer1 = () => {
    document.querySelector(".LogForm").classList.remove("active");
    document.querySelector(".SignForm").classList.remove("active");
    document.querySelector(".LogImg").classList.remove("active");
    document.querySelector(".SignImg").classList.remove("active");
  };
  const [InfoSign, setInfoSign] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
    gender: "men",
    specialite: "مختص_جراحة_العظام_و_المفاصل",
    phoneNumber: "",
    wilaya: null,
  });
  const wilayas = [
    { id: 1, name: "أدرار" },
    { id: 2, name: "الشلف" },
    { id: 3, name: "الأغواط" },
    { id: 4, name: "أم البواقي" },
    { id: 5, name: "باتنة" },
    { id: 6, name: "بجاية" },
    { id: 7, name: "بسكرة" },
    { id: 8, name: "بشار" },
    { id: 9, name: "البليدة" },
    { id: 10, name: "البويرة" },
    { id: 11, name: "تمنراست" },
    { id: 12, name: "تبسة" },
    { id: 13, name: "تلمسان" },
    { id: 14, name: "تيارت" },
    { id: 15, name: "تيزي وزو" },
    { id: 16, name: "الجزائر" },
    { id: 17, name: "الجلفة" },
    { id: 18, name: "جيجل" },
    { id: 19, name: "سطيف" },
    { id: 20, name: "سعيدة" },
    { id: 21, name: "سكيكدة" },
    { id: 22, name: "سيدي بلعباس" },
    { id: 23, name: "عنابة" },
    { id: 24, name: "قالمة" },
    { id: 25, name: "قسنطينة" },
    { id: 26, name: "المدية" },
    { id: 27, name: "مستغانم" },
    { id: 28, name: "المسيلة" },
    { id: 29, name: "معسكر" },
    { id: 30, name: "ورقلة" },
    { id: 31, name: "وهران" },
    { id: 32, name: "البيض" },
    { id: 33, name: "إليزي" },
    { id: 34, name: "برج بوعريريج" },
    { id: 35, name: "بومرداس" },
    { id: 36, name: "الطارف" },
    { id: 37, name: "تندوف" },
    { id: 38, name: "تيسمسيلت" },
    { id: 39, name: "الوادي" },
    { id: 40, name: "خنشلة" },
    { id: 41, name: "سوق أهراس" },
    { id: 42, name: "تيبازة" },
    { id: 43, name: "ميلة" },
    { id: 44, name: "عين الدفلى" },
    { id: 45, name: "النعامة" },
    { id: 46, name: "عين تموشنت" },
    { id: 47, name: "غرداية" },
    { id: 48, name: "غليزان" },
    { id: 49, name: "تميمون" },
    { id: 50, name: "برج باجي مختار" },
    { id: 51, name: "أولاد جلال" },
    { id: 52, name: "بني عباس" },
    { id: 53, name: "إن صالح" },
    { id: 54, name: "إن قزام" },
    { id: 55, name: "تقرت" },
    { id: 56, name: "جانت" },
    { id: 57, name: "المغير" },
    { id: 58, name: "المنيعة" },
  ];
  const [TypeVis, setTypeVis] = useState(false);
  const ChangeType = () => {
    document.querySelectorAll(".SignForm .AfterInp .see").forEach((icon) => {
      icon.classList.toggle("active");
    });
    if (TypeVis) {
      document.querySelector(".SignForm .AfterInp .password").type = "password";
    } else {
      document.querySelector(".SignForm .AfterInp .password").type = "text";
    }
    setTypeVis(!TypeVis);
  };

  const Sign = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://sport-kappa-six.vercel.app/signup",
        {
          ...InfoSign,
        }
      );
      setInfoSign({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        password: "",
        gender: "men",
        specialite: "مختص_جراحة_العظام_و_المفاصل",
        phoneNumber: "",
      });
      updateUser(data?.user || null);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  const GenderChanger = (e) => {
    document
      .querySelectorAll(".SignCon .gender .GenImg .icon")
      .forEach((icon) => {
        icon.parentElement.classList.remove("active");
      });
    e.target.parentElement.classList.add("active");
    setInfoSign({ ...InfoSign, gender: e.target.getAttribute("value") });
  };
  return (
    <div className="SignIn" style={{ direction: "rtl", textAlign: "right" }}>
      <div className="SignImg">
        <img src={SignImgBl} alt="" />
      </div>
      <div className="SignForm">
        <div className="SignCon">
          <h1>مرحبًا !</h1>
          <form onSubmit={(e) => Sign(e)}>
            <div className="names">
              <div
                className="AfterInp"
                onFocus={(e) => props.up(e)}
                onBlur={(e) => props.down(e)}
                data-plac="الاسم الأول"
              >
                <input
                  type="text"
                  onChange={(e) =>
                    setInfoSign({ ...InfoSign, firstName: e.target.value })
                  }
                  value={InfoSign.firstName}
                />
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
              <div
                className="AfterInp"
                onFocus={(e) => props.up(e)}
                onBlur={(e) => props.down(e)}
                data-plac="الاسم الأخير"
              >
                <input
                  type="text"
                  onChange={(e) =>
                    setInfoSign({ ...InfoSign, lastName: e.target.value })
                  }
                  value={InfoSign.lastName}
                />
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
            </div>
            <div className="names">
              <div
                className="AfterInp"
                onFocus={(e) => props.up(e)}
                onBlur={(e) => props.down(e)}
                data-plac="تاريخ الميلاد"
              >
                <input
                  type="text"
                  minLength={10}
                  maxLength={10}
                  onChange={(e) =>
                    setInfoSign({ ...InfoSign, birthday: e.target.value })
                  }
                  value={InfoSign.birthday}
                />
                <FontAwesomeIcon className="icon" icon={faCalendarDays} />
              </div>
              <div
                className="AfterInp"
                onFocus={(e) => props.up(e)}
                onBlur={(e) => props.down(e)}
                data-plac="رقم الهاتف"
              >
                <input
                  type="text"
                  minLength={10}
                  maxLength={10}
                  onChange={(e) =>
                    setInfoSign({ ...InfoSign, phoneNumber: e.target.value })
                  }
                  value={InfoSign.phoneNumber}
                />
                <FaPhone className="icon" />
              </div>
            </div>
            <div
              className="AfterInp"
              onFocus={(e) => props.up(e)}
              onBlur={(e) => props.down(e)}
              data-plac="البريد الإلكتروني"
            >
              <input
                type="email"
                onChange={(e) =>
                  setInfoSign({ ...InfoSign, email: e.target.value })
                }
                value={InfoSign.email}
              />
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </div>

            <div
              className="AfterInp"
              onFocus={(e) => props.up(e)}
              onBlur={(e) => props.down(e)}
              data-plac="كلمة المرور"
            >
              <input
                type="password"
                className="password"
                onChange={(e) =>
                  setInfoSign({ ...InfoSign, password: e.target.value })
                }
                value={InfoSign.password}
              />
              <FontAwesomeIcon
                className="see"
                onClick={() => ChangeType()}
                icon={faEye}
              />
              <FontAwesomeIcon
                className="see active"
                onClick={() => ChangeType()}
                icon={faEyeSlash}
              />
              <FontAwesomeIcon className="icon" icon={faLock} />
            </div>
            <div className="AfterInp">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <select
                onChange={(e) =>
                  setInfoSign({ ...InfoSign, wilaya: e.target.value })
                }
              >
                <option key={99999999} value={null}>
                  الولاية
                </option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya.id} value={wilaya.name}>
                    {wilaya.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="AfterInp">
              <FontAwesomeIcon className="icon" icon={faCheck} />
              <select
                onChange={(e) => {
                  setInfoSign({ ...InfoSign, specialite: e.target.value });
                }}
              >
                اخصائي التغذيه اخصائي الامراض الصدريه والحساسيه
                <option value="مختص_جراحة_العظام_و_المفاصل">
                  مختص جراحة العظام و المفاصل
                </option>
                <option value="مختص_في_أمراض_الغدد_الصماء_و_السكري">
                  مختص في أمراض الغدد الصماء و السكري
                </option>
                <option value="مختص_في_أمراض_القلب">مختص في أمراض القلب</option>
                <option value="مختص_في_أمراض_الرئة_و_الحساسية">
                  مختص في أمراض الرئة و الحساسية
                </option>
                <option value="مختص_في_أمراض_النساء_و_التوليد">
                  مختص في أمراض النساء و التوليد
                </option>
              </select>
            </div>
            <input type="submit" value="تسجيل" />
            <div className="LogNow">
              لديك حساب؟
              <span onClick={() => Changer1()}> تسجيل الدخول الآن </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
