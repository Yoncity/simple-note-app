import "./App.scss";
import NotesIcon from "./assets/note_icon.png";
import PlusIcon from "./assets/plus_icon.png";
import DeleteIcon from "./assets/delete_icon.png";

function App() {
  return (
    <div className="container">
      <div className="container__left">
        <div className="container__left__header">
          <div className="container__left__header__title_and_logo">
            <img src={NotesIcon} alt="Notes Icon" />
            <p>My Notes</p>
          </div>
          <div className="container__left__header__action">
            <img src={PlusIcon} alt="Add New Note Icon" />
            <p>New Note</p>
          </div>
        </div>
        <div className="container__left__content">
          <div className="container__left__content__row">
            <div className="container__left__content__row__left">
              <p className="container__left__content__row__left__title">
                New Note
              </p>
              <p className="container__left__content__row__left__date">
                Mon, 20 September 2022 at 9:32AM
              </p>
            </div>

            <img
              src={DeleteIcon}
              alt="Delete Note Icon"
              className="container__left__content__row__action"
            />
          </div>
        </div>
      </div>
      <div className="container__right">
        <p className="container__right__date">
          Mon, 20 September 2022 at 9:32AM
        </p>
        <textarea
          name="note_input"
          placeholder="Write Your Note Here"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
