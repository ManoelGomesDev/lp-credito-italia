import { useTranslation } from "react-i18next";
// import foto1 from "./assets/foto1.png";
// import foto2 from "./assets/foto2.png";
import foto3 from "./assets/chair.png";
// import foto4 from "./assets/foto4.png";

import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
// import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";
import photo7 from "./assets/photo7.png";

import { CardComponent } from "./components/CardComponent";

import br from "./assets/br.png";
import en from "./assets/en.png";
import it from "./assets/it.png";

import seven from "./assets/seven.png";
// import sevenen from "./assets/sevenen.png";
// import sevenit from "./assets/sevenit.png";

import { useState } from "react";
import { FaChevronDown, FaInstagram } from "react-icons/fa";
import { ListComponent } from "./components/ListComponent";

function App() {
  const [language, setLanguage] = useState("pt");

  console.log(language);

  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <body className="flex flex-col items-center bg-fundo">
      <div className="flex flex-col items-center max-w-[1024px]  ">
        <header className=" justify-center gap-4 bg-blue-400 hidden">
          <button type="button" onClick={() => handleChangeLanguage("en")}>
            <img src={en} alt="" width={32} />
          </button>
          <button type="button" onClick={() => handleChangeLanguage("pt")}>
            <img src={br} alt="" width={32} />
          </button>
          <button type="button" onClick={() => handleChangeLanguage("it")}>
            <img src={it} alt="" width={32} />
          </button>
        </header>
        <main >
          <section className="pb-4 flex flex-col gap-4  items-center px-4  ">
            <div className="">
              <div className="flex flex-col items-center md:flex-row ">
                <div className="flex flex-col justify-between md:h-[350px]">
              <h1 className="text-3xl font-extrabold text-blue-300 text-center md:text-6xl md:text-start md:w-[450px] ">
                {t("Master your credit history").toUpperCase()}
              </h1>
              <p
                className="text-lg text-red-300 rounded-lg text-center md:w-[400px] md:text-start max-md:hidden"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "and build a good relationship with the financial market"
                  ).toUpperCase(),
                }}
              ></p>
              </div>
              <div>
                <img src={photo1} alt=""  />
              </div>
              </div>
          
              
              <p
                className="text-lg text-white bg-red-300 rounded-lg text-center md:w-[400px] md:text-start md:hidden"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "and build a good relationship with the financial market"
                  ).toUpperCase(),
                }}
              ></p>
            </div>
            <div className="flex flex-col items-center">
              <a
                href="#sell"
                className="px-3 py-4 bg-blue-300 rounded-3xl text-white  text-center hover:bg-[#2a9144]"
              >
                {" "}
                {t("I want to master my Score now!").toUpperCase()}
              </a>
            </div>
          </section>
          <section className="flex flex-col gap-4 items-center  ">
            <div className="flex flex-col px-4">
            <p className="text-center text-2xl font-bold text-blue-300 md:py-8 md:w-[800px] md:text-5xl">
              {t("Why You Should Care About Your Credit Score in Italy")}
            </p>
            <p className="text-center text-red-300 text-xl md:w-[800px] md:text-3xl">
              {t(
                "Having a good credit score means that over the years you have maintained a good relationship with the credit granted to you by the market."
              )}
            </p>
            <p
              className="text-center text-red-300 text-xl md:w-[800px] md:text-3xl"
              dangerouslySetInnerHTML={{
                __html: t(
                  "For this reason, this score is one of the most important data to be analyzed by financial institutions when you apply for credit, whether for real estate or personal loans."
                ),
              }}
            ></p>
            </div>
            <div className="flex flex-col items-center w-full md:pt-16">
              <div className="bg-white h-10 w-10 flex justify-center items-center -mb-5 z-10 rounded-full">
                <FaChevronDown />
              </div>
              <div className="bg-blue-400 px-4 py-10 rounded-3xl flex flex-col justify-center items-center w-[90%] md:w-[60%]  ">
                <h1 className=" text-white text-center text-xl md:text-4xl font-bold ">
                  {" "}
                  {t("This history is important for").toUpperCase()}
                </h1>
                <ul className="text-white   text-center flex flex-col  py-4 text-lg md:text-xl gap-2 ">
                  <li className="border-b border-t">
                    {t("Reflect your financial health").toUpperCase()}
                  </li>
                  <li className="border-b">
                    {t("Your risk of default").toUpperCase()}
                  </li>
                  <li className="border-b">
                    {t("Possibility of access to credit").toUpperCase()}
                  </li>
                  <li className="border-b">
                    {t("And much more.").toUpperCase()}
                  </li>
                </ul>
              </div>
              <div>
                <a
                  href="#sell"
                  className="bg-red-300 px-4 py-4 text-white font-bold md:text-xl rounded-3xl md:-mt-14 -mt-8 max-w-[260px] md:max-w-full"
                >
                  {t("GET YOUR E-BOOK NOW!")}
                </a>
              </div>
            </div>
          </section>
          <section className="mt-[5.625rem] flex flex-col lg:flex-row px-4 ">
            
              <div className=" max-md:hidden  flex justify-center  ">
                <img src={photo2} alt="" className="w-[50%] md:w-full" />
              </div>
            
              <div className="text-center md:text-end md:items-end w-full ">
                <div className="flex flex-col gap-2  px-4 ">
                  <h1 className="text-4xl text-blue-300 font-bold md:text-7xl md:text-end   ">
                    {t("But who is Shirlei Soares?")}
                  </h1>

                  <h2 className="text-lg font-bold text-blue-300 md:text-2xl">
                    {t("Credit consultant registered with OAM.")}
                  </h2>
               
                <div className="flex justify-center">

                <img src={photo7} alt="" className="md:hidden" />
                </div>
               
                  <p
                    className="text-blue-300 md:text-xl "
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "A lawyer in Brazil and Portugal, I have been living in Italy since 2017. Over the years I have worked with a leading law firm in the province of Treviso, offering my experience in international law and corporate debt recovery."
                      ),
                    }}
                  ></p>
                  <p
                    className="text-blue-300 md:text-xl"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "I currently work with the largest credit brokerage company in Italy, as part of an important team that operates in the Veneto region and neighboring areas as a specialist in financial solutions in the areas of real estate credit and business credit."
                      ),
                    }}
                  ></p>
                  <p
                    className="text-blue-300 md:text-xl"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        "Through these experiences I was able to understand everything that governs the Italian financial market, having the authority to deal with important topics for you who want to master your credit score in Italy and enjoy everything that a high credit score allows."
                      ),
                    }}
                  ></p>
              </div>
              
            </div>
          </section>
          <div className="flex justify-center px-4">
          <hr className="md:h-8 bg-blue-400 rounded-3xl md:w-full mt-8 w-[90%] h-2 " />
          </div>
          <section className="flex flex-col  items-center  mt-8 gap-8 md:gap-14 ">
          <h1 className="text-center text-3xl md:text-5xl px-4 w-[280px] md:text-start md:w-[400px] font-bold text-blue-300  md:px-8">
                {t("This E-book is for you who")}
              </h1>
              {/* flex flex-col md:flex-row-reverse items-center md:items-start gap-4 md:gap-8 w-full */}
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse ">
           
            
              <div className="px-4 flex flex-col gap-2  ">
                <CardComponent
                  content={t(
                    "Haven't yet created a solid credit score here in Italy"
                  )}
                />
                <CardComponent
                  content={t(
                    "Do you want to have access to the best strategies to increase your credit score in a reliable and gradual way?"
                  )}
                />
                <CardComponent
                  content={t(
                    "Want to understand how the Italian credit market works?"
                  )}
                />
                <CardComponent
                  content={t(
                    "Are you coming to Italy or have recently arrived and want to start your credit and financial transactions in the country as soon as possible?"
                  )}
                />
                <CardComponent
                  content={t(
                    "Don't want to fall into false promises and traps"
                  )}
                />
                <CardComponent
                  content={t("Want to make access to credit easier?")}
                />
              </div>
              <div className="flex justify-center items-center ">
              <img src={foto3} alt="" className=" md:h-[600px] -mt-8  "   />
            </div>
            </div>
          </section>
          <section className="grid md:grid-cols-7 gap-4 grid-cols-1 px-4 mt-8 ">
            <div className="max-md:hidden col-span-3 ">
              <img src={photo6} alt="" className="w-full" />
            </div>
            <div className="md:hidden flex justify-center ">
              <img src={photo4} alt="" className="w-full" />
            </div>
            <div className="flex flex-col bg-blue-300 items-center gap-4 py-4 md:py-14 lg:gap-10 lg:justify-center rounded-2xl md:col-span-4 ">
              <h1 className="text-2xl md:text-3xl text-center font-bold text-white px-8">
                {t(
                  "What you will learn in the E-book - Master your credit score in Italy"
                )}
              </h1>
              <div className="grid grid-cols-1 gap-4 lg:gap-10 px-4  ">
                <ListComponent
                  content={t("What is your credit score?")}
                  number={1}
                />
                <ListComponent
                  content={t("Why you NEED to be aware of your credit history")}
                  number={2}
                />
                <ListComponent
                  content={t("How the credit system works in Italy")}
                  number={3}
                />
                <ListComponent
                  content={t("How to find out what your credit score is")}
                  number={4}
                />
                <ListComponent
                  content={t(
                    "Essential strategies for building a solid credit history"
                  )}
                  number={5}
                />
              </div>
            </div>
         
          </section>

          <section className="grid grid-cols-1 mt-8 px-4">
            <div >
              <img src={photo5} alt="" />
            </div>
            </section>

          <section
            id="sell"
            className="flex flex-col  py-10 gap-8 items-center md:flex-row md:justify-center  "
          >
            <div className="flex flex-col items-center ">
              <div className="bg-blue-400 flex flex-col items-center py-8 text-white gap-2  rounded-3xl h-[450px] w-[310px]  ">
                <div className="flex flex-col items-center justify-between h-full pb-4 ">
                  <h1 className="font-bold md:text-2xl px-4 text-center">
                    {t("ALL THIS WOULD COST")}
                  </h1>
                  <span className="line-through decoration-red-500 font-bold md:text-xl ">
                    R$185,00
                  </span>
                  <div className=" bg-red-500 w-full py-2  md:text-2xl flex justify-center  ">
                    <p className="text-center py-2 px-2 md:text-2xl md:w-[320px] ">
                      {t("BUT BY GUARANTEEING THIS SPECIAL OFFER YOU PAY")}
                    </p>
                  </div>
                  <span className="font-bold">{t("JUST")}</span>
                  <div className="flex flex-col items-center">
                    <div className="flex items-baseline gap-1">
                      <span>12x</span>
                      <span className="text-2xl font-bold">R$6,73</span>
                    </div>
                    <div className="flex gap-1 text-sm">
                      <span>{t("OR")}</span>
                      <span> R$67,00</span>
                      <span>{t("in sight")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://pay.kiwify.com.br/BqRZ47F"
                target="_blank"
                className="bg-red-300 px-3 py-2 rounded-3xl -mt-8 text-white font-bold max-w-[220px] text-center"
              >
                {t("I WANT TO BUY MY E-BOOK!")}
              </a>
            </div>

         

            {/* <div className="flex flex-col items-center">
              <div className="bg-blue-400 flex flex-col items-center py-8 text-white gap-2 rounded-3xl h-[450px] w-[310px]  ">
                <div className="flex flex-col items-center justify-between h-full pb-4">
                  <h1 className="font-bold text-center md:text-2xl px-4 md:w-[300px]">
                    {t("YOU CAN HAVE ACCESS TODAY ONLY")}
                  </h1>
                  <p className="text-center px-8">
                    {t("TO CREDIT CONSULTANCY + E-BOOK")}
                  </p>
                  <span className="line-through decoration-red-500  md:text-xl">
                    {t("CONSULTANCY: R$720.00")}
                  </span>
                  <span>+</span>
                  <span className="line-through decoration-red-500  md:text-xl">
                    {t("E-BOOK: R$185.00")}
                  </span>

                  <span className="font-bold">{t("JUST")}</span>
                  <div className="flex flex-col items-center">
                    <div className="flex items-baseline gap-1">
                      <span>12x</span>
                      <span className="text-2xl font-bold">R$65,96</span>
                    </div>
                    <div className="flex gap-1 text-sm">
                      <span>{t("OR")}</span>
                      <span> R$637,00</span>
                      <span>{t("in sight")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://pay.kiwify.com.br/nrEmFhV"
                target="_blank"
                className="bg-red-300 px-3 py-2 rounded-3xl -mt-8 text-white font-bold max-w-[220px] text-center"
              >
                {t("I WANT TO SECURE MY SPOT NOW!")}
              </a>
            </div> */}
          </section>
          <section className="flex flex-col mt-8 px-4 ">
            <div className="w-full">
              <img src={seven} alt="" className="w-full" />
            </div>
          </section>
        </main>
        <footer className="flex flex-col items-center text-blue-300 text-[8px]   py-4 font-bold px-4  ">
          <div className="flex ">
            ©
            <span className="text-center">
              {t("COPYRIGHT 2024 ALL RIGHTS RESERVED I SHIRLEI SOARES")}
            </span>
          </div>

          <a
            href="https://www.instagram.com/mano.lucio/"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <p>{t("DEVELOPED BY AGÉCIA LÁDAME")}</p>

            <FaInstagram />
          </a>
        </footer>
      </div>
    </body>
  );
}

export default App;
