interface ToDoItem {
  name: string;
  id: string | number;
}

export type TodDoList = {
  toDoList: ToDoItem[];
  deleteToDo: (id: number | string) => void;
};

interface ToDoListItem {
  toDo: ToDoItem;
  deleteToDo: DeleteToDo;
}

type handleToDo = {
  (e: React.ChangeEvent<HTMLInputElement>): void;
};

type AddToDo = {
  (): void;
};

type DeleteToDo = {
  (id: string | number): void;
};
