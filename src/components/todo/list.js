import React, { useState } from "react";
import { Toast, Badge, ListGroup, Container, Col, Row } from 'react-bootstrap';

const TodoList = (props) => {

  let statusText = 'Pending'
  const handleVarient = (item) => {
    if (!item.complete) {
      statusText = 'Pending'
      return 'danger'
    } else {
      statusText = 'Complete'
      return 'success'
    }
  }
  return (
    <ListGroup as="ul">
      {props.list.map(item => (
        <Toast
          onClose={() => props.handleDelete(item._id)}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          as="li"
        >
          <Container>
            <Row>
              <Toast.Header>
                <Col>
                  <Badge variant={handleVarient(item)} onClick={() => props.handleComplete(item._id)}>{statusText}
                  </Badge>
                  {' '}
                </Col>
                <Col>
                  {item.assignee}
                </Col>
              </Toast.Header>
            </Row>
            <Toast.Body>
              <Row>
                <Col md lg sm xl="auto">
                  {item.text}
                </Col>
                <Col>
                  {item.difficulty}
                </Col>
              </Row>
            </Toast.Body>
          </Container>
        </Toast>
      ))}
    </ListGroup>
  );

}

export default TodoList;
