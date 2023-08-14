import axios from 'axios';
import { AxiosError } from 'axios';
interface AddBoardRequest {
    name: string;
  }

interface GetBoardRequest {
    boardId: number;
  }
interface ColumnRequest {
    boardId: number;
    name: string;
  }
const addBoardEndpoint = 'http://localhost:8000/addBoard';
const getBoardEndpoint = 'http://localhost:8000/getBoard';
async function callAddBoardEndpoint(boardRequest: AddBoardRequest){
    try {
        // Make a POST request to the endpoint
        const response = await axios.post(addBoardEndpoint, boardRequest);
    
        // Handle the response data
        console.log('Add Response:', response.data);
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
        console.log('Get Response:', response.data);
      } catch (error: any) {
        // Handle errors
        console.error('Error:', error.message);
      }
}

const b: AddBoardRequest = {name: "suck it"};
callAddBoardEndpoint(b);
callGetBoardEndpoint({boardId: 0});