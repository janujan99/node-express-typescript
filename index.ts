import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

// get deep copy of anythig
function getDeepCopy(arg: any){
  return JSON.parse(JSON.stringify(arg))
}

//Random interfaces that I'll have to move to a different file
interface Board {
  name: string;
  id: number;
  nextColumnId: number;
  columns: (Column|null) [];
}
interface Column {
  name: string;
  id: number;
  nextTaskId: number;
  tasks: (Task|null) [];
}
interface Task {
  title: string;
  id: number;
  description: string;
  subTasks: string[];
}
dotenv.config();

let nextBoardId: number = 0;
const app: Express = express();
const port = process.env.PORT;

var boardNames: (Board | null)[] = []; 

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Board methods
app.post('/addBoard', (req: Request, res: Response) => {
  console.log("Board ID: " + nextBoardId.toString());
  req.body.id = nextBoardId;
  let newBoard: Board = {name: req.body.name, id: nextBoardId, nextColumnId: 0, columns: []}
  boardNames.push(newBoard);
  console.log(boardNames);
  // Process the received data (you can add your own logic here)
  nextBoardId += 1;
  res.status(200).send({id: nextBoardId-1});
});


app.get('/getBoard/:id', (req: Request, res: Response) => {
  console.log(boardNames[Number(req.params.id)]);
  res.status(200).send({board: boardNames[Number(req.params.id)]});
});


app.post('/editBoard', (req: Request, res: Response) => {
  if (req.body.boardId >= boardNames.length) res.status(400).send({message: "Out of range"});
  console.log("Editing!");
  console.log(req.body.boardId);
  console.log(req.body.newBoardName);
  boardNames[req.body.boardId]!.name = req.body.newBoardName;
  console.log(boardNames);
  res.status(200).send({message: "Success!"});
});

app.post('/deleteBoard', (req: Request, res: Response) => {
  console.log("Deleting");
  console.log(req.body.deletionIndex);
  boardNames[req.body.deletionIndex] = null;
  console.log(boardNames);
  res.status(200).send({message: "Deletion is a success!"});
});


//Columns
app.post('/addColumn', (req: Request, res: Response) => {
  console.log("Adding Column!");
  let s: Column = {name: req.body.name, id: boardNames[req.body.boardId]!.nextColumnId, nextTaskId: 0, tasks: []};
  boardNames[req.body.boardId]!.columns.push(s);
  boardNames[req.body.boardId]!.nextColumnId += 1;
  console.log(boardNames[req.body.boardId]);
  res.status(200).send({id: "ok"});
});

app.post('/editColumn', (req: Request, res: Response) => {
  console.log("Editing Column!");
  let s: Column = {name: req.body.newColumnName, id: req.body.id, nextTaskId: boardNames[req.body.boardId]!.columns[req.body.columnId]!.nextTaskId, tasks: getDeepCopy(boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks)};
  boardNames[req.body.boardId]!.columns[req.body.columnId] = getDeepCopy(s);
  console.log(boardNames[req.body.boardId]);
  res.status(200).send({id: "ok"});
});

app.post('/deleteColumn', (req: Request, res: Response) => {
  console.log("Deleting Column!");
  boardNames[req.body.boardId]!.columns[req.body.columnId] = null;
  console.log(boardNames[req.body.boardId]);
  res.status(200).send({id: "ok"});
});

//Tasks
app.post('/addTask', (req: Request, res: Response) => {
  console.log("Adding Task!");
  let s: Task = {title: req.body.name, id: boardNames[req.body.boardId]!.columns[req.body.columnId]!.nextTaskId, description: req.body.description, subTasks: []};
  boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks.push(s);
  boardNames[req.body.boardId]!.columns[req.body.columnId]!.nextTaskId += 1;

  console.log(boardNames[req.body.boardId]!.columns[req.body.columnId]);
  res.status(200).send(boardNames[req.body.boardId]!.columns[req.body.columnId]);
});

app.post('/editTaskTitle', (req: Request, res: Response) => {
  console.log("Editing task title!");

  let s: Task = getDeepCopy(boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks[req.body.taskId]);
  s.title = req.body.newTaskTitle;

  boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks[req.body.taskId] = s;
  console.log(boardNames[req.body.boardId]!.columns[req.body.columnId]);
  res.status(200).send(boardNames[req.body.boardId]!.columns[req.body.columnId]?.tasks[req.body.taskId]);
});

app.post('/editTaskDescription', (req: Request, res: Response) => {
  console.log("Editing task description!");

  let s: Task = getDeepCopy(boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks[req.body.taskId]);
  s.description = req.body.newTaskDescription;

  boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks[req.body.taskId] = s;
  console.log(boardNames[req.body.boardId]!.columns[req.body.columnId]);
  res.status(200).send(boardNames[req.body.boardId]!.columns[req.body.columnId]?.tasks[req.body.taskId]);
});

app.post('/deleteTask', (req: Request, res: Response) => {
  console.log("Deleting task!");

  boardNames[req.body.boardId]!.columns[req.body.columnId]!.tasks[req.body.taskId] = null;
  console.log(boardNames[req.body.boardId]!.columns[req.body.columnId]?.tasks);
  res.status(200).send(boardNames[req.body.boardId]!.columns[req.body.columnId]?.tasks);
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});