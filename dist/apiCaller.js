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
const addBoardEndpoint = 'http://localhost:8000/addBoard';
const getBoardEndpoint = 'http://localhost:8000/getBoard';
function callAddBoardEndpoint(boardRequest) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Make a POST request to the endpoint
            const response = yield axios_1.default.post(addBoardEndpoint, boardRequest);
            // Handle the response data
            console.log('Add Response:', response.data);
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
            console.log('Get Response:', response.data);
        }
        catch (error) {
            // Handle errors
            console.error('Error:', error.message);
        }
    });
}
const b = { name: "suck it" };
callAddBoardEndpoint(b);
callGetBoardEndpoint({ boardId: 0 });
