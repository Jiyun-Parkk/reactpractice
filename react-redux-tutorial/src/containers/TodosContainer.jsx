import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import useActions from '../lib/useAction';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  //const dispatch = useDispatch();
  //const onChangeInput = useCallback(
  //  (input) => dispatch(changeInput(input)),
  //  [dispatch],
  //);
  //const onInsert = useCallback(
  //  (todos, text) => dispatch(insert(todos, text)),
  //  [dispatch],
  //);
  //const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  //const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

//export default connect(
//  ({ todos }) => ({
//    input: todos.input,
//    todos: todos.todos,
//  }),
//  {
//    changeInput,
//    insert,
//    toggle,
//    remove,
//  },
//)(TodosContainer);

export default TodosContainer;
