import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [soruSayisi, soruSayisiniGuncelle] = useState(1);
  const [yarismayiDurdur, yarismayiDurduruGuncelle] = useState(false);
  const [tutar, tutariGuncelle] = useState("0 ₺");

  const sorular = [
    {
      id: 1,
      question: "ReactJS'i hangi şirket geliştirmiştir?",
      answers: [
        {
          text: "Google",
          correct: false,
        },
        {
          text: "Meta(Facebook)",
          correct: true,
        },
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Twitter",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "React geliştiricilerinin uygulamalardaki hataları bulmak için kullandıkları tarayıcı uzantısı hangisidir?",
      answers: [
        {
          text: "React Developer Tools",
          correct: true,
        },
        {
          text: "React Tooling Add-on",
          correct: false,
        },
        {
          text: "React Codewatch",
          correct: false,
        },
        {
          text: "React Debug",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "JavaScript'i kodları hangi iki etiket arasına yazılır?",
      answers: [
        {
          text: "<tr>kod örneği</tr>",
          correct: false,
        },
        {
          text: "<td>kod örneği<td>",
          correct: false,
        },
        {
          text: "<js>kod örneği</js>",
          correct: false,
        },
        {
          text: "<script>kod örneği</script>",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "Yeni react uygulaması oluşturmak için terminalde hangi komut çalıştırılmalıdır?",
      answers: [
        {
          text: "npm update",
          correct: false,
        },
        {
          text: "npm build",
          correct: false,
        },
        {
          text: "npm start",
          correct: false,
        },
        {
          text: "npx create-react-app my-app",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question:
        "JavaScript'te bir sabit oluşturmak için hangi anahtar kelime kullanılır?",
      answers: [
        {
          text: "const",
          correct: true,
        },
        {
          text: "let",
          correct: false,
        },
        {
          text: "var",
          correct: false,
        },
        {
          text: "string",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "React projesinde tarayıcı tarafından yüklenen ilk dosya hangisidir?",
      answers: [
        {
          text: "src/App.js",
          correct: false,
        },
        {
          text: "src/index.js",
          correct: false,
        },
        {
          text: "public/manifest.json",
          correct: false,
        },
        {
          text: "public/index.html",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question:
        "React Developer Tools'u Chrome'da kullanırken React ikonun kırmızı olması ne anlama gelir?  ",
      answers: [
        {
          text: "React'in geliştirme yapısı kullanılıyordur.",
          correct: true,
        },
        {
          text: "React'in üretim yapısı kullanılıyordur.",
          correct: false,
        },
        {
          text: "Yeni bir React dosyası oluşturulmuştur.",
          correct: false,
        },
        {
          text: "Localhost bağlantı hatası vardır.",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Aşağıdakilerden hangisi sunucu tarafında bulunan bir Javascript Nenesidir?",
      answers: [
        {
          text: "Function",
          correct: false,
        },
        {
          text: "File",
          correct: true,
        },
        {
          text: " FileUpload",
          correct: false,
        },
        {
          text: "Date",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "React öğeleri oluşturmak için kullanılan Javascript söz dizimi uzantısı hangisidir?",
      answers: [
        {
          text: "Html",
          correct: false,
        },
        {
          text: "JavaScriptX",
          correct: false,
        },
        {
          text: "Jsx",
          correct: true,
        },
        {
          text: "React JavaScript",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Bir form alanının varsayılan değeri nasıl ayarlanır?",
      answers: [
        {
          text: "value özelliği kullanılarak",
          correct: false,
        },
        {
          text: "defaultValue özelliği kullanılarak",
          correct: true,
        },
        {
          text: "default özelliği kullanılarak",
          correct: false,
        },
        {
          text: "otomatik olarak ayarlanır.",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />; kodundaki varsayılan renk hangisidir? ",
      answers: [
        {
          text: "black",
          correct: false,
        },
        {
          text: "red",
          correct: false,
        },
        {
          text: "gray",
          correct: true,
        },
        {
          text: "blue",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "React değişkenlerindeki durum sınıfını güncellemek için aşağıdakilerden hangisi kullanılır?",
      answers: [
        {
          text: "replaceState",
          correct: false,
        },
        {
          text: "setState",
          correct: true,
        },
        {
          text: "updateState",
          correct: false,
        },
        {
          text: "refreshState",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "Jsx'i JavaScript'e dönüştürmek için kullanılan derleyici hangisidir?",
      answers: [
        {
          text: "Jsx Editor",
          correct: false,
        },
        {
          text: "Babel",
          correct: true,
        },
        {
          text: "Browser",
          correct: false,
        },
        {
          text: "ReactDom",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Jsx'i JavaScript'e dönüştürmek için kullanılan derleyici hangisidir?",
      answers: [
        {
          text: "Jsx Editor",
          correct: false,
        },
        {
          text: "Babel",
          correct: true,
        },
        {
          text: "Browser",
          correct: false,
        },
        {
          text: "ReactDom",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "JSON dizesini javascript nesnesine dönüştürmek için hangisi kullanılır.  ",
      answers: [
        {
          text: "JSON.parse()",
          correct: true,
        },
        {
          text: "JSON.fromString();",
          correct: true,
        },
        {
          text: "JSON.stringify()",
          correct: false,
        },
        {
          text: "JSON.toObject()",
          correct: false,
        },
      ],
    },
  ];

  const soruListesi = useMemo(
    () =>
      [
        { id: 1, tutar: "100 ₺" },
        { id: 2, tutar: "200 ₺" },
        { id: 3, tutar: "300 ₺" },
        { id: 4, tutar: "500 ₺" },
        { id: 5, tutar: "1000 ₺" },
        { id: 6, tutar: "2000 ₺" },
        { id: 7, tutar: "4000 ₺" },
        { id: 8, tutar: "8000 ₺" },
        { id: 9, tutar: "16000 ₺" },
        { id: 10, tutar: "32000 ₺" },
        { id: 11, tutar: "64000 ₺" },
        { id: 12, tutar: "12500 ₺" },
        { id: 13, tutar: "250000 ₺" },
        { id: 14, tutar: "500000 ₺" },
        { id: 15, tutar: "1000000 ₺" },
      ].reverse(),
    []
  );

  useEffect(() => {
    soruSayisi > 1 &&
      tutariGuncelle(soruListesi.find((m) => m.id === soruSayisi - 1).tutar);
  }, [soruListesi, soruSayisi]);
  return (
    <div className="app">
      <div className="main">
        {yarismayiDurdur ? (
          <h1 className="endText">Kazanılan tutar: {tutar}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer
                  yarismayiDurduruGuncelle={yarismayiDurduruGuncelle}
                  soruSayisi={soruSayisi}
                />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                sorular={sorular}
                yarismayiDurduruGuncelle={yarismayiDurduruGuncelle}
                soruSayisi={soruSayisi}
                soruSayisiniGuncelle={soruSayisiniGuncelle}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {soruListesi.map((m) => (
            <li
              className={
                soruSayisi === m.id ? "moneyListItem active" : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.tutar}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
