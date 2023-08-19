import axios from 'axios';
import { AxiosError } from 'axios';
import { LargeNumberLike } from 'crypto';
//Board Requests
interface AddBoardRequest {
    name: string;
  }
interface GetBoardRequest {
    boardId: number;
  }
interface EditBoardRequest{
    boardId: number;
    newBoardName: string;
}
interface DeleteBoardRequest{
    deletionIndex: number;
}
//Column Requests
interface AddColumnRequest {
    boardId: number;
    name: string;
  }
interface EditColumnRequest {
    boardId: number;
    columnId: number;
    newColumnName: string;
  }
interface DeleteColumnRequest{
    boardId: number;
    deletionIndex: number;
}
//Task Requests
interface AddTaskRequest{
    boardId: number;
    columnId: number;
    name: string;
    description: string;
}
interface EditTaskTitleRequest{
    boardId: number;
    columnId: number;
    taskId: number;
    newTaskTitle: string;
}
interface EditTaskDescriptionRequest{
    boardId: number;
    columnId: number;
    taskId: number;
    newTaskDescription: string;
}
interface DeleteTaskRequest{
    boardId: number;
    columnId: number;
    deletionIndex: number;
}
//Subtask requests
interface AddSubTaskRequest{
    boardId: number;
    columnId: number;
    taskId: number;
    name: string;
    description: string;
}
interface EditSubTaskTitleRequest{
    boardId: number;
    columnId: number;
    taskId: number;
    subTaskId: number;
    newSubTaskTitle: string;
}
interface ToggleSubTaskCompletionRequest{
    boardId: number;
    columnId: number;
    taskId: number;
    subTaskId: number;
}
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
const addSubTaskEndpoint = 'http://localhost:8000/addSubTask';
const editSubTaskTitleEndpoint = 'http://localhost:8000/editSubTaskTitle';
const toggleSubTaskCompletionEndpoint = 'http://localhost:8000/toggleSubTaskCompletion';
//Board endpoint callers
async function callAddBoardEndpoint(boardRequest: AddBoardRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(addBoardEndpoint, boardRequest);
    
        // Handle the response data
        console.log('Add Board Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callGetBoardEndpoint(boardRequest: GetBoardRequest){
    try {
        // Make a GET request to the endpoint
        const response = await axios.get(getBoardEndpoint + `/${boardRequest.boardId}`);
    
        // Handle the response data
        console.log('Get Board Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callEditBoardEndpoint(boardRequest: EditBoardRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(editBoardEndpoint, boardRequest);
    
        // Handle the response data
        console.log('Edit Board Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callDeleteBoardEndpoint(boardRequest: DeleteBoardRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(deleteBoardEndpoint, boardRequest);
    
        // Handle the response data
        console.log('Delete Board Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}

//Column Endpoint Callers
async function callAddColumnEndpoint(columnRequest: AddColumnRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(addColumnEndpoint, columnRequest);
    
        // Handle the response data
        console.log('Add Column Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callEditColumnEndpoint(columnRequest: EditColumnRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(editColumnEndpoint, columnRequest);
    
        // Handle the response data
        console.log('Edit Column Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callDeleteColumnEndpoint(columnRequest: DeleteColumnRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(deleteColumnEndpoint, columnRequest);
    
        // Handle the response data
        console.log('Delete Column Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}

//Task Endpoint Callers
async function callAddTaskEndpoint(taskRequest: AddTaskRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(addTaskEndpoint, taskRequest);
    
        // Handle the response data
        console.log('Add Task Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callEditTaskTitleEndpoint(taskRequest: EditTaskTitleRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(editTaskTitleEndpoint, taskRequest);
    
        // Handle the response data
        console.log('Edit Task Title Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callEditTaskDescriptionEndpoint(taskRequest: EditTaskDescriptionRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(editTaskDescriptionEndpoint, taskRequest);
    
        // Handle the response data
        console.log('Edit Task Description Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callDeleteTaskEndpoint(taskRequest: DeleteTaskRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(deleteTaskEndpoint, taskRequest);
    
        // Handle the response data
        console.log('Delete Task Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
//SubTask Endpoint Callers
async function callAddSubTaskEndpoint(subTaskRequest: AddSubTaskRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(addSubTaskEndpoint, subTaskRequest);
    
        // Handle the response data
        console.log('Add Sub Task Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callEditSubTaskTitleEndpoint(subTaskRequest: EditSubTaskTitleRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(editSubTaskTitleEndpoint, subTaskRequest);
    
        // Handle the response data
        console.log('Edit Task Description Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
async function callToggleSubTaskCompletionEndpoint(subTaskRequest: ToggleSubTaskCompletionRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(toggleSubTaskCompletionEndpoint, subTaskRequest);
    
        // Handle the response data
        console.log('Edit Task Description Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}
const b: AddBoardRequest = {name: "be yourself"};
callAddBoardEndpoint(b);
callAddColumnEndpoint({name:"be goofy", boardId: 0});
callAddColumnEndpoint({name:"be kind", boardId: 0});
callAddTaskEndpoint({boardId: 0, columnId: 1, name: "apologize", description: "Take ownership"});