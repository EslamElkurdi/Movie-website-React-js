// import React, { useRef, useState } from 'react'

// export default function todo_list() {

//     const [todos, setTodo] = useState([]);

//     const inputRef = useRef();

//     const handleAddTodo= () => {  
//         const text = inputRef.current.value;
//         setTodo([...todos, text])
//         inputRef.current.value = ""
//     }

//   return (
//     <div className='App'>
//         <h2>To Do List</h2>

//         <ul>
//             {todos.map((item)=>{
//                 return <li key={item}>{item}</li>
//             })}
//         </ul>
//         <input ref={inputRef} type="text" placeholder="Enter a task"/><br/>
//         <button onClick={handleAddTodo}>Add Task</button><br/><br/>
//     </div>
//   )
// }



import { useRef, useState } from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function TodoApp() {


  const [todos, setTodo] = useState([]);
  const [finished, setFinished] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;
    setTodo([...todos, text])
    inputRef.current.value = ""
  }

  const handleRemoveTodo = (indexToRemove) => {
    setTodo(prevTodos => prevTodos.filter((_, index) => index !== indexToRemove));
  };

  const toggleFinished = (index) => {
    setFinished((prevFinished) =>
      prevFinished.includes(index)
        ? prevFinished.filter((item) => item !== index)
        : [...prevFinished, index]
    );
  };

  
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                      ref={inputRef}
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn onClick={handleAddTodo}>Save</MDBBtn>
                  </MDBCol>

                </MDBRow>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Todo item</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {todos.map((item, index) => {
                      return <tr key={item}>
                        <td style={{ textDecoration: finished.includes(index) ? 'line-through' : 'none' }}>{item}</td>
                        <td>
                          <MDBBtn  onClick={() => handleRemoveTodo(index)} color="danger">
                            Delete
                          </MDBBtn>
                          <MDBBtn onClick={() => toggleFinished(index)} color="success" className="ms-1">
                            Finished
                          </MDBBtn>
                        </td>
                      </tr>
                    })}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
