import { useEffect, useState } from "react";

export default function Timer({ yarismayiDurduruGuncelle, soruSayisi }) {
  const [sayac, sayaciGuncelle] = useState(30);

  useEffect(() => {
    if (sayac === 0) return yarismayiDurduruGuncelle(true);
    const interval = setInterval(() => {
      sayaciGuncelle((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [yarismayiDurduruGuncelle, sayac]);

  useEffect(() => {
    sayaciGuncelle(30);
  }, [soruSayisi]);
  return sayac;
}
