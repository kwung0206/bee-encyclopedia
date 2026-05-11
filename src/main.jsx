import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const entries = [
  {
    title: "서양꿀벌",
    category: "종류",
    summary: "전 세계 양봉에서 가장 널리 기르는 꿀벌로, 꿀 생산과 작물 수분에 큰 역할을 한다.",
    facts: ["학명: Apis mellifera", "한 군체는 보통 여왕벌 1마리, 일벌 수만 마리, 수벌로 구성", "꽃 위치를 춤으로 알린다"],
    color: "#f6b73c",
  },
  {
    title: "재래꿀벌",
    category: "종류",
    summary: "동아시아에 적응한 꿀벌로, 우리나라 토종벌로도 알려져 있다.",
    facts: ["학명: Apis cerana", "비교적 작은 몸집", "지역 생태계와 밀접하게 연결"],
    color: "#56a37a",
  },
  {
    title: "여왕벌",
    category: "역할",
    summary: "군체의 번식을 담당하며, 페로몬으로 벌집의 질서를 유지한다.",
    facts: ["하루에 많은 알을 낳을 수 있다", "군체 안에서 보통 한 마리만 존재", "새 여왕벌이 태어나면 분봉이 일어날 수 있다"],
    color: "#d76f45",
  },
  {
    title: "일벌",
    category: "역할",
    summary: "청소, 육아, 벌집 관리, 꿀 저장, 채집까지 대부분의 일을 맡는 암컷 꿀벌이다.",
    facts: ["나이에 따라 담당 일이 바뀐다", "꽃가루와 꿀을 모은다", "벌집 온도를 조절한다"],
    color: "#4f8cc9",
  },
  {
    title: "8자 춤",
    category: "행동",
    summary: "채집벌이 동료에게 꽃의 방향과 거리를 알려주는 놀라운 의사소통 방식이다.",
    facts: ["태양 방향을 기준으로 위치 전달", "몸을 흔드는 시간이 거리 정보가 된다", "군체의 집단 지능을 보여준다"],
    color: "#8c6fd7",
  },
  {
    title: "수분",
    category: "생태",
    summary: "꿀벌은 꽃가루를 옮겨 식물이 열매와 씨앗을 맺도록 돕는다.",
    facts: ["사과, 딸기, 아몬드 같은 작물에 중요", "생물다양성 유지에 기여", "야생벌도 수분에 큰 역할"],
    color: "#2f9e9e",
  },
  {
    title: "벌집",
    category: "생태",
    summary: "육각형 구조의 밀랍 방으로 이루어진 집이며, 알과 꿀, 꽃가루를 보관한다.",
    facts: ["육각형은 공간 효율이 높다", "일벌이 밀랍을 만들어 짓는다", "온도와 습도 관리가 중요"],
    color: "#c99700",
  },
  {
    title: "꿀벌 보호",
    category: "보호",
    summary: "꽃이 피는 식물을 늘리고 농약 사용을 줄이면 꿀벌이 살아갈 환경을 지킬 수 있다.",
    facts: ["다양한 꽃 심기", "살충제 사용 줄이기", "물을 얕은 접시에 제공하기"],
    color: "#6a994e",
  },
];

const categories = ["전체", ...Array.from(new Set(entries.map((entry) => entry.category)))];

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const [selected, setSelected] = useState(entries[0]);

  const filteredEntries = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return entries.filter((entry) => {
      const matchesCategory = category === "전체" || entry.category === category;
      const matchesKeyword =
        !keyword ||
        entry.title.toLowerCase().includes(keyword) ||
        entry.summary.toLowerCase().includes(keyword) ||
        entry.facts.join(" ").toLowerCase().includes(keyword);
      return matchesCategory && matchesKeyword;
    });
  }, [query, category]);

  const quizAnswer = selected.category === "역할" ? "군체 안에서 맡은 역할" : "꿀벌의 생태와 특징";

  return (
    <main className="app-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">React Bee Encyclopedia</p>
          <h1>꿀벌백과사전</h1>
          <p>
            꿀벌의 종류, 군체 안의 역할, 수분 활동, 보호 방법을 한눈에 탐색하는 작은 생태 백과사전입니다.
          </p>
        </div>
        <div className="honeycomb" aria-label="벌집 무늬 장식">
          {Array.from({ length: 18 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </section>

      <section className="control-panel" aria-label="백과사전 검색과 필터">
        <label className="search-box">
          <span>검색</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 여왕벌, 수분, 벌집"
          />
        </label>
        <div className="category-tabs">
          {categories.map((item) => (
            <button
              key={item}
              className={item === category ? "active" : ""}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <div className="entry-list" aria-label="꿀벌 항목 목록">
          {filteredEntries.map((entry) => (
            <button
              key={entry.title}
              className={`entry-card ${selected.title === entry.title ? "selected" : ""}`}
              onClick={() => setSelected(entry)}
              style={{ "--accent": entry.color }}
              type="button"
            >
              <span>{entry.category}</span>
              <strong>{entry.title}</strong>
              <p>{entry.summary}</p>
            </button>
          ))}
          {filteredEntries.length === 0 && (
            <p className="empty-state">검색 결과가 없습니다. 다른 단어로 찾아보세요.</p>
          )}
        </div>

        <aside className="detail-panel" style={{ "--accent": selected.color }}>
          <span className="detail-category">{selected.category}</span>
          <h2>{selected.title}</h2>
          <p>{selected.summary}</p>
          <ul>
            {selected.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="quiz-box">
            <strong>오늘의 미니 퀴즈</strong>
            <p>{selected.title} 항목은 무엇을 설명할까요?</p>
            <span>{quizAnswer}</span>
          </div>
        </aside>
      </section>

      <section className="action-band">
        <h2>꿀벌을 돕는 작은 행동</h2>
        <div className="tips">
          <article>
            <strong>꽃 심기</strong>
            <p>계절별로 피는 꽃을 심으면 꿀벌에게 안정적인 먹이가 됩니다.</p>
          </article>
          <article>
            <strong>농약 줄이기</strong>
            <p>꽃이 핀 시간대의 살충제 사용을 피하면 꿀벌 피해를 줄일 수 있습니다.</p>
          </article>
          <article>
            <strong>물 제공</strong>
            <p>작은 돌을 담은 얕은 물그릇은 꿀벌이 안전하게 물을 마시게 해줍니다.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
