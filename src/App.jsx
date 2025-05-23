import "./App.css";
import BookList from "./components/bookList798.jsx";
import {courseData_798} from "./data.js";

function App() {
  return (
    <div>
      <BookList />
      <tr>
          courseCode={courseData_798[0].code}
          courseName={courseData_798[0].name}
          roomNumber={courseData_798[0].room}
      </tr>
      <tr>
        <td>MDB110</td>
        <td>MongoDB</td>
        <td>Room 102</td>
      </tr>
      <tr>
        <td>JS150</td>
        <td>JavaScript</td>
        <td>Room 103</td>
      </tr>
    </div>
  );
}

export default App;
