import "./App.css";
import BookListHeadTable from "./components/bookList798.jsx";
import {courseData_798} from "./data.js";
import BookListTable798 from "./components/bookListTable798.jsx";

function App() {
  return (
      <div>
          <h1 >Andre SL - 948798</h1>
          <h2 >Course Schedule - 2025S</h2>
          <table>
          <BookListHeadTable />
              <tbody>
                  <BookListTable798
                      code={courseData_798[0].code}
                      name={courseData_798[0].name}
                      room={courseData_798[0].room}
                  />
                    <BookListTable798 {...courseData_798[1]} />
                    <BookListTable798 {...courseData_798[2]} />
              </tbody>
          </table>
      </div>
  );
}

export default App;
