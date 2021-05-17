import React from "react";
import {
  MdClearAll,
  MdExtension,
  MdCollectionsBookmark,
  MdHelp,
} from "react-icons/md";

const Navigation = () => {
  return (
    <aside>
      <nav>
        <div className="btn-wrapper">
          <a href="/" className="btn" id="all-button">
            <MdClearAll />
            ぜんしゅるい
          </a>
          <a href="/quiz" className="btn" id="quiz-button">
            <MdExtension />
            クイズ
          </a>
          <a href="/collection" className="btn" id="pokemon-collection-button">
            <MdCollectionsBookmark />
            てもちポケモン
          </a>
          <a href="/help" className="btn" id="how-to-button">
            <MdHelp />
            ヘルプ
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Navigation;
