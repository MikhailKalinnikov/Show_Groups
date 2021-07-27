import { useState } from "react";
import GroupsList from "./GroupsList";

const groupsName = [
  "Бухгалтерия",
  "Отдел кадров",
  "Производство",
  "IT-отдел",
  "Прочее",
];

const Main = () => {
  const [currentGroup, setCurrentGroup] = useState(null);
  const handleSortGroups = (group) => {
    setCurrentGroup(group);
  };
  const handleClick = () => {
    setCurrentGroup([]);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <header className="col-md-3">
          <nav className="sidebar-sticky bg-dark navbar-dark navbar-expand-md">
            <span className="logo navbar-brand nav-link" onClick={handleClick}>
              Все группы
            </span>
            {groupsName &&
              groupsName.map((group, i) => (
                <span
                  key={i}
                  className="nav-link"
                  value={group}
                  onClick={() => handleSortGroups(group)}
                >
                  {group}
                </span>
              ))}
          </nav>
        </header>
        <main className="col-md-9">
          <GroupsList currentGroup={currentGroup} />
        </main>
      </div>
    </div>
  );
};

export default Main;
