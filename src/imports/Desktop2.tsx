function Nav() {
  return (
    <div className="absolute contents left-[calc(46.429%+58.571px)] top-[16px] translate-x-[-50%]" data-name="nav">
      <div className="absolute bg-[#fffdfd] h-[65px] left-[calc(46.429%+58.571px)] rounded-[65px] top-[16px] translate-x-[-50%] w-[1108px]">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_2.9px_0px_inset_rgba(0,0,0,0.25)]" />
      </div>
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Konkhmer_Sleokchher:Regular',sans-serif] from-[#f37328] leading-[normal] left-[calc(21.429%+1.571px)] not-italic text-[24px] to-[#ffac7c] top-[27px] uppercase w-[151.646px]" style={{ WebkitTextFillColor: "transparent" }}>
        Exness-100
      </p>
      <div className="absolute capitalize flex flex-col font-['KoHo:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+5px)] not-italic text-[20px] text-black top-[43px] translate-y-[-50%] w-[50.214px]">
        <p className="leading-[normal]">trade</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['KoHo:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+91.368px)] not-italic text-[20px] text-black top-[43px] translate-y-[-50%] w-[48.206px]">
        <p className="leading-[normal]">Chart</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['KoHo:Regular',sans-serif] justify-center leading-[0] left-[calc(57.143%+72.585px)] not-italic text-[20px] text-black top-[43px] translate-y-[-50%] w-[94.402px]">
        <p className="leading-[normal]">Contact Us</p>
      </div>          
  );
}

function Btn() {
  return (
    <div className="absolute contents left-[calc(64.286%+91.714px)] top-[23px]" data-name="btn">
      <div className="absolute bg-gradient-to-b blur-[0.9px] filter from-[#ffeddb] from-[10.231%] h-[40px] left-[calc(64.286%+91.714px)] pointer-events-none rounded-[14px] to-[#f37328] top-[23px] via-[#ffac7c] via-[53.846%] w-[109px]">
        <div aria-hidden="true" className="absolute border-2 border-[#ff5d00] border-solid inset-0 rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)]" />
      </div>
      <div className="absolute capitalize flex flex-col font-['KoHo:Bold',sans-serif] justify-center leading-[0] left-[calc(64.286%+122.714px)] not-italic text-[20px] text-nowrap text-white top-[43px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">{`start `}</p>
      </div>
    </div>
  );
}

function StartBtn() {
  return (
    <div className="absolute contents left-[calc(42.857%+48.143px)] top-[612px]" data-name="Start-btn">
      <div className="absolute bg-black blur-[0.9px] filter h-[40px] left-[calc(42.857%+48.143px)] pointer-events-none rounded-[14px] top-[612px] w-[109px]">
        <div aria-hidden="true" className="absolute border-2 border-[#ff5d00] border-solid inset-0 rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)]" />
      </div>
      <div className="absolute capitalize flex flex-col font-['KoHo:Bold',sans-serif] justify-center leading-[0] left-[calc(42.857%+81.143px)] not-italic text-[20px] text-nowrap text-white top-[632px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">{`start `}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(42.857%+48.143px)] top-[612px]">
      <StartBtn />
    </div>
  );
}

function StartBtn1() {
  return (
    <div className="absolute contents left-[calc(35.714%+87.286px)] top-[227px]" data-name="Start-btn">
      <div className="absolute bg-gradient-to-b blur-[0.9px] filter from-[#ffeddb] from-[10.231%] h-[40px] left-[calc(35.714%+87.286px)] pointer-events-none rounded-[14px] to-[#f37328] top-[227px] via-[#ffac7c] via-[53.846%] w-[114.568px]">
        <div aria-hidden="true" className="absolute border-2 border-[#ff5d00] border-solid inset-0 rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        <div className="absolute inset-0 shadow-[0px_4px_0.4px_0px_inset_rgba(251,186,117,0.77)]" />
      </div>
      <div className="absolute capitalize flex flex-col font-['KoHo:Bold',sans-serif] justify-center leading-[0] left-[calc(35.714%+110.41px)] not-italic text-[20px] text-white top-[246px] translate-y-[-50%] w-[67.269px]">
        <p className="leading-[normal]">Sign In</p>
      </div>
    </div>
  );
}

function SmText() {
  return (
    <div className="absolute contents left-[calc(50%-1px)] top-[223px] translate-x-[-50%]" data-name="sm text">
      <div className="absolute capitalize flex flex-col font-['KoHo:SemiBold',sans-serif] justify-center leading-[0] left-[calc(53.571%-122.571px)] not-italic text-[20px] text-black top-[246px] translate-y-[-50%] w-[239px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`To start trading with us  `}</p>
      </div>
      <StartBtn1 />
      <div className="absolute bg-[rgba(217,217,217,0)] h-[48px] left-[calc(50%-1px)] rounded-[14px] top-[223px] translate-x-[-50%] w-[810px]">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>
    </div>
  );
}

export default function Desktop2() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 2">
      <Nav />
      <Btn />
      <Group2 />
      <SmText />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(7.143%-2.143px)] top-[-47.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1245", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[1245px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1245 1">
                <path d="M0 0.5H1245" id="Line 2" stroke="var(--stroke-0, black)" strokeDasharray="2 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(92.857%+13.643px)] top-[-44.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1245", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[1245px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1245 1">
                <path d="M0 0.5H1245" id="Line 2" stroke="var(--stroke-0, black)" strokeDasharray="2 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0015503857284784317)+(var(--transform-inner-height)*0.9999988079071045)))] items-center justify-center left-[80px] top-[100px] w-[calc(1px*((var(--transform-inner-height)*0.0015503857284784317)+(var(--transform-inner-width)*0.9999988079071045)))]" style={{ "--transform-inner-width": "1290", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[180.089deg]">
          <div className="h-0 relative w-[1290px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1290 1">
                <line id="Line 6" stroke="var(--stroke-0, black)" strokeDasharray="2 16" x2="1290" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0015503857284784317)+(var(--transform-inner-height)*0.9999988079071045)))] items-center justify-center left-[81px] top-[935px] w-[calc(1px*((var(--transform-inner-height)*0.0015503857284784317)+(var(--transform-inner-width)*0.9999988079071045)))]" style={{ "--transform-inner-width": "1290", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[180.089deg]">
          <div className="h-0 relative w-[1290px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1290 1">
                <line id="Line 6" stroke="var(--stroke-0, black)" strokeDasharray="2 16" x2="1290" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute capitalize flex flex-col font-['Instrument_Serif:Regular',sans-serif] h-[78px] justify-center leading-[0] left-[calc(50%-333px)] not-italic text-[128px] text-black top-[366px] translate-y-[-50%] w-[665px]">
        <p className="leading-[normal]">{`trade like pro `}</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['Instrument_Serif:Regular',sans-serif] h-[90px] justify-center leading-[0] left-[calc(53.571%-454.571px)] not-italic text-[64px] text-black top-[455px] translate-y-[-50%] w-[839px]">
        <p className="leading-[normal]">Boost Profits Instantly With Smart AI</p>
      </div>
      <div className="absolute capitalize flex flex-col font-['KoHo:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+5px)] not-italic text-[32px] text-[rgba(54,54,54,0.81)] text-center top-[542px] translate-x-[-50%] translate-y-[-50%] w-[782px]">
        <p className="leading-[normal]">Make confident trades with cutting-edge AI technology.</p>
      </div>
    </div>
  );
}