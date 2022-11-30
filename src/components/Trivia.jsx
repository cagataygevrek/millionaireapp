import React, { useEffect, useState } from "react";

export default function Trivia({
  sorular,
  yarismayiDurduruGuncelle,
  soruSayisi,
  soruSayisiniGuncelle,
}) {
  const [soru, soruyuGuncelle] = useState(null);
  const [verilenCevap, verilenCevabiGuncelle] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    soruyuGuncelle(sorular[soruSayisi - 1]);
  }, [sorular, soruSayisi]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    verilenCevabiGuncelle(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (a.correct) {
        soruSayisiniGuncelle((oncekiSoru) => oncekiSoru + 1);
        verilenCevabiGuncelle(null);
      } else {
        yarismayiDurduruGuncelle(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{soru?.question}</div>
      <div className="answers">
        {soru?.answers.map((a) => (
          <div
            className={verilenCevap === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
