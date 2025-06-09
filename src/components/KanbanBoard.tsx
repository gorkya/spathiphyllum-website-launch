import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialData: Column[] = [
  {
    id: "todo",
    title: "К выполнению",
    tasks: [
      {
        id: "1",
        title: "Настроить проект",
        description: "Создать базовую структуру",
        priority: "high",
      },
      {
        id: "2",
        title: "Добавить компоненты",
        description: "Создать UI компоненты",
        priority: "medium",
      },
    ],
  },
  {
    id: "progress",
    title: "В работе",
    tasks: [
      {
        id: "3",
        title: "Интеграция API",
        description: "Подключить внешние сервисы",
        priority: "high",
      },
    ],
  },
  {
    id: "done",
    title: "Готово",
    tasks: [
      {
        id: "4",
        title: "Дизайн системы",
        description: "Создать компоненты UI",
        priority: "low",
      },
    ],
  },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newColumns = [...columns];
    const sourceColumn = newColumns.find(
      (col) => col.id === source.droppableId,
    )!;
    const destColumn = newColumns.find(
      (col) => col.id === destination.droppableId,
    )!;

    const draggedTask = sourceColumn.tasks.find(
      (task) => task.id === draggableId,
    )!;

    // Remove from source
    sourceColumn.tasks.splice(source.index, 1);

    // Add to destination
    destColumn.tasks.splice(destination.index, 0, draggedTask);

    setColumns(newColumns);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-300";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Доска задач</h2>
          <p className="text-gray-600">
            Перетаскивайте карточки между колонками
          </p>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((column) => (
              <div
                key={column.id}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="List" size={20} className="text-gray-600" />
                  <h3 className="font-semibold text-lg">{column.title}</h3>
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {column.tasks.length}
                  </span>
                </div>

                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`min-h-[200px] space-y-3 ${
                        snapshot.isDraggingOver ? "bg-blue-50 rounded-lg" : ""
                      }`}
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`cursor-move border-l-4 ${getPriorityColor(task.priority)} ${
                                snapshot.isDragging
                                  ? "shadow-lg rotate-2"
                                  : "hover:shadow-md"
                              } transition-all duration-200`}
                            >
                              <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium flex items-center justify-between">
                                  {task.title}
                                  <Icon
                                    name="GripVertical"
                                    size={16}
                                    className="text-gray-400"
                                  />
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <p className="text-xs text-gray-600">
                                  {task.description}
                                </p>
                                <div className="flex items-center justify-between mt-2">
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${
                                      task.priority === "high"
                                        ? "bg-red-100 text-red-700"
                                        : task.priority === "medium"
                                          ? "bg-yellow-100 text-yellow-700"
                                          : "bg-green-100 text-green-700"
                                    }`}
                                  >
                                    {task.priority === "high"
                                      ? "Высокий"
                                      : task.priority === "medium"
                                        ? "Средний"
                                        : "Низкий"}
                                  </span>
                                </div>
                              </CardContent>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </section>
  );
};

export default KanbanBoard;
