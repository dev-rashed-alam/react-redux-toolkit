import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteStudent} from "../../redux/slice/studentSlice";

const Students = () => {

    const students = useSelector(state => state.students)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteStudent(id))
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {students.map(student => <tr key={`student_${student.id}`}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneNumber}</td>
                    <td onClick={() => handleDelete(student.id)}>Remove</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Students