import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PERSONS } from "../redux/types";

const GroupsList = ({ currentGroup }) => {
  const persons = useSelector((store) => store.persons);
  const [sortedList, setSortedList] = useState(null);
  const dispatch = useDispatch();

  const addPeople = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => newArray(json));
  };

  useEffect(() => {
    if (persons.length === 0) {
      addPeople();
    }
  }, [persons.length]);

  const newArray = (people) => {
    let newField = { group: "Прочее" };
    if (people) {
      people.forEach((object) => {
        for (let key in newField) {
          object[key] = newField[key];
        }
      });
      for (let i = 0; i < people.length; i++) {
        if (people[i].postId <= 3) {
          people[i].group = "Бухгалтерия";
        } else if (people[i].postId > 5 && people[i].postId <= 9) {
          people[i].group = "Отдел кадров";
        } else if (people[i].postId > 9 && people[i].postId <= 50) {
          people[i].group = "Производство";
        } else if (people[i].postId > 50 && people[i].postId <= 53) {
          people[i].group = "IT-отдел";
        }
      }
      dispatch({
        type: ADD_PERSONS,
        payload: people,
      });
    }
  };
  let currentGroupList = !currentGroup
    ? []
    : persons.filter((person) => person.group === currentGroup);
  const prevCategory = useRef(currentGroup);
  useEffect(() => {
    if (prevCategory.current !== currentGroup) {
      setSortedList(null);
    }
  }, [currentGroup]);
  const copyPersons = persons.slice();
  const sortUp = (params) => {
    if (currentGroupList && currentGroupList.length > 0) {
      setSortedList(
        currentGroupList.sort((a, b) => {
          return a[params] > b[params] ? 1 : -1;
        })
      );
    } else {
      if (params === "name" || params === "email") {
        setSortedList(
          copyPersons.sort((a, b) => {
            return a[params] > b[params] ? 1 : -1;
          })
        );
      }
    }
  };
  const sortDown = (params) => {
    if (currentGroupList && currentGroupList.length > 0) {
      setSortedList(
        currentGroupList.sort((a, b) => {
          return a[params] < b[params] ? 1 : -1;
        })
      );
    } else {
      if (params === "name" || params === "email") {
        setSortedList(
          copyPersons.sort((a, b) => {
            return a[params] < b[params] ? 1 : -1;
          })
        );
      }
    }
  };
  return (
    <div>
      <nav className="d-flex justify-content-evenly">
        <div>
          <i className="bi bi-arrow-up-circle-fill">Сортировать по имени</i>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-circle-fill " //visually-hidden
            viewBox="0 0 16 16"
            onClick={() => sortUp("name")}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
            onClick={() => sortDown("name")}
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </div>
        <div>
          <i className="bi bi-arrow-down-circle-fill">
            Сортировать по фамилии(email)
          </i>
          &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-down-circle-fill" //visually-hidden
            viewBox="0 0 16 16"
            onClick={() => sortUp("email")}
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
            onClick={() => sortDown("email")}
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sortedList
          ? sortedList.map((person) => (
              <div key={person.id} className="card col">
                <div className="card-body">
                  <span className="card-title">Группа: {person.group}</span>
                  <p></p>
                  <p className="card-text">
                    Имя: <strong>{person.name}</strong>
                  </p>
                  <p className="card-text">
                    Фамилия: <strong>{person.email}</strong>
                  </p>
                </div>
              </div>
            ))
          : currentGroupList.length > 0
          ? currentGroupList.map((person) => (
              <div key={person.id} className="card col">
                <div className="card-body">
                  <span className="card-title">
                    Группа: {person.group} &nbsp; &nbsp; (
                    {currentGroupList.length} чел.)
                  </span>
                  <p></p>
                  <p className="card-text">
                    Имя: <strong>{person.name}</strong>
                  </p>
                  <p className="card-text">
                    Фамилия: <strong>{person.email}</strong>
                  </p>
                </div>
              </div>
            ))
          : persons &&
            persons.map((person) => (
              <div key={person.id} className="card col">
                <div className="card-body">
                  <span className="card-title">Группа: {person.group}</span>
                  <p></p>
                  <p className="card-text">
                    Имя: <strong>{person.name}</strong>
                  </p>
                  <p className="card-text">
                    Фамилия: <strong>{person.email}</strong>
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default GroupsList;
