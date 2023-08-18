"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//Endpoints
const addBoardEndpoint = 'http://localhost:8000/addBoard';
const getBoardEndpoint = 'http://localhost:8000/getBoard';
const editBoardEndpoint = 'http://localhost:8000/editBoard';
const deleteBoardEndpoint = 'http://localhost:8000/deleteBoard';
const addColumnEndpoint = 'http://localhost:8000/addColumn';
const editColumnEndpoint = 'http://localhost:8000/editColumn';
const deleteColumnEndpoint = 'http://localhost:8000/deleteColumn';
const addTaskEndpoint = 'http://localhost:8000/addTask';
const editTaskTitleEndpoint = 'http://localhost:8000/editTaskTitle';
const editTaskDescriptionEndpoint = 'http://localhost:8000/editDescriptionTitle';
const deleteTaskEndpoint = 'http://localhost:8000/deleteTask';
//Board endpoint callers
function callAddBoardEndpoint(boardRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(addBoardEndpoint, boardRequest);
            // Handle the response data
            console.log('Add Board Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callGetBoardEndpoint(boardRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a GET request to the endpoint
            const response = yield axios_1.default.get(getBoardEndpoint + `/${boardRequest.boardId}`);
            // Handle the response data
            console.log('Get Board Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callEditBoardEndpoint(boardRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(editBoardEndpoint, boardRequest);
            // Handle the response data
            console.log('Edit Board Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callDeleteBoardEndpoint(boardRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(deleteBoardEndpoint, boardRequest);
            // Handle the response data
            console.log('Delete Board Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
//Column Endpoint Callers
function callAddColumnEndpoint(columnRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(addColumnEndpoint, columnRequest);
            // Handle the response data
            console.log('Add Column Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callEditColumnEndpoint(columnRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(editColumnEndpoint, columnRequest);
            // Handle the response data
            console.log('Edit Column Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callDeleteColumnEndpoint(columnRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(deleteColumnEndpoint, columnRequest);
            // Handle the response data
            console.log('Delete Column Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
//Task Endpoint Callers
function callAddTaskEndpoint(taskRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(addTaskEndpoint, taskRequest);
            // Handle the response data
            console.log('Add Task Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callEditTaskTitleEndpoint(taskRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(editTaskTitleEndpoint, taskRequest);
            // Handle the response data
            console.log('Edit Task Title Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callEditTaskDescriptionEndpoint(taskRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(editTaskDescriptionEndpoint, taskRequest);
            // Handle the response data
            console.log('Edit Task Title Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
function callDeleteTaskEndpoint(taskRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(deleteTaskEndpoint, taskRequest);
            // Handle the response data
            console.log('Add Task Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
const b = { name: "be yourself" };
callAddBoardEndpoint(b);
callAddColumnEndpoint({ name: "be goofy", boardId: 0 });
callAddColumnEndpoint({ name: "be kind", boardId: 0 });
callAddTaskEndpoint({ boardId: 0, columnId: 1, name: "apologize", description: "Take ownership" });
