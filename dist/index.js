"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let boardId = 0;
const app = (0, express_1.default)();
const port = process.env.PORT;
var boardNames = [];
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//Board methods
app.post('/addBoard', (req, res) => {
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.columns);
    console.log("Board ID: " + boardId.toString());
    boardNames.push(req.body);
    console.log(boardNames);
    // Process the received data (you can add your own logic here)
    boardId += 1;
    res.status(200).send({ id: boardId - 1 });
});
app.get('/getBoard/:id', (req, res) => {
    console.log(boardNames);
    console.log(req.params.id);
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
    boardNames.splice(req.body.deletionIndex, 1);
    console.log(boardNames);
    res.status(200).send({ message: "Deletion is a success!" });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
