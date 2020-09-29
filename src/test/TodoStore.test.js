import reducer from "../reducer/reducer";

test("adds todo", async () => {
  const state = { todos: ["a"] };
  const newState = reducer(state, { type: "ADD_TODO", payload: "b" });

  expect(newState.todos).toEqual(["a", "b"]);
});
