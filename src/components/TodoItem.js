import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, deleteItem, toggleComplete }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isComplete ? "item-complete" : ""}`}>
          <div className="todo-content">{item.task}</div>  
          {/* task 스키마에 저장된 아이템 보여주세요.  */}

          <div>
            <button
              className="button-delete"
              onClick={() => deleteItem(item._id)}
            >
              Delete
            </button>
            <button
              className="button-delete"
              onClick={() => toggleComplete(item._id)}
            >
              {item.isComplete ? `Not done` : `Done`}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;