"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// get deep copy of anythig
function getDeepCopy(arg) {
    return JSON.parse(JSON.stringify(arg));
}
dotenv_1.default.config();
let nextBoardId = 0;
const app = (0, express_1.default)();
const port = process.env.PORT;
var boardNames = [];
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//Board methods
app.post('/addBoard', (req, res) => {
    console.log("Board ID: " + nextBoardId.toString());
    req.body.id = nextBoardId;
    let newBoard = { name: req.body.name, id: nextBoardId, nextColumnId: 0, columns: [] };
    boardNames.push(newBoard);
    console.log(boardNames);
    // Process the received data (you can add your own logic here)
    nextBoardId += 1;
    res.status(200).send({ id: nextBoardId - 1 });
});
app.get('/getBoard/:id', (req, res) => {
    console.log(boardNames[Number(req.params.id)]);
    res.status(200).send({ board: boardNames[Number(req.params.id)] });
});
app.post('/editBoard', (req, res) => {
    if (req.body.boardId >= boardNames.length)
        res.status(400).send({ message: "Out of range" });
    console.log("Editing!");
    console.log(req.body.boardId);
    console.log(req.body.newBoardName);
    boardNames[req.body.boardId].name = req.body.newBoardName;
    console.log(boardNames);
    res.status(200).send({ message: "Success!" });
});
app.post('/deleteBoard', (req, res) => {
    console.log("Deleting");
    console.log(req.body.deletionIndex);
    boardNames[req.body.deletionIndex] = null;
    console.log(boardNames);
    res.status(200).send({ message: "Deletion is a success!" });
});
//Columns
app.post('/addColumn', (req, res) => {
    console.log("Adding Column!");
    let s = { name: req.body.name, id: boardNames[req.body.boardId].nextColumnId, nextTaskId: 0, tasks: [] };
    boardNames[req.body.boardId].columns.push(s);
    boardNames[req.body.boardId].nextColumnId += 1;
    console.log(boardNames[req.body.boardId]);
    res.status(200).send({ id: "ok" });
});
app.post('/editColumn', (req, res) => {
    console.log("Editing Column!");
    let s = { name: req.body.newColumnName, id: req.body.id, nextTaskId: boardNames[req.body.boardId].columns[req.body.columnId].nextTaskId, tasks: getDeepCopy(boardNames[req.body.boardId].columns[req.body.columnId].tasks) };
    boardNames[req.body.boardId].columns[req.body.columnId] = getDeepCopy(s);
    console.log(boardNames[req.body.boardId]);
    res.status(200).send({ id: "ok" });
});
app.post('/deleteColumn', (req, res) => {
    console.log("Deleting Column!");
    boardNames[req.body.boardId].columns[req.body.columnId] = null;
    console.log(boardNames[req.body.boardId]);
    res.status(200).send({ id: "ok" });
});
//Tasks
app.post('/addTask', (req, res) => {
    console.log("Adding Task!");
    let s = { title: req.body.name, id: boardNames[req.body.boardId].columns[req.body.columnId].nextTaskId, description: req.body.description, subTasks: [] };
    boardNames[req.body.boardId].columns[req.body.columnId].tasks.push(s);
    boardNames[req.body.boardId].columns[req.body.columnId].nextTaskId += 1;
    console.log(boardNames[req.body.boardId].columns[req.body.columnId]);
    res.status(200).send(boardNames[req.body.boardId].columns[req.body.columnId]);
});
app.post('/editTaskTitle', (req, res) => {
    console.log("Editing task title!");
    let s = getDeepCopy(boardNames[req.body.boardId].columns[req.body.columnId].tasks[req.body.taskId]);
    s.title = req.body.newTaskTitle;
    boardNames[req.body.boardId].columns[req.body.columnId].tasks[req.body.taskId] = s;
    console.log(boardNames[req.body.boardId].columns[req.body.columnId]);
    res.status(200).send(boardNames[req.body.boardId].columns[req.body.columnId]);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
