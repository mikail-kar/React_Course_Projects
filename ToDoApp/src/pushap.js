
export default function pushApi(serializedState)  {
    try {
      
      return fetch(" http://localhost:3000/api/" , {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: serializedState
    })
      .then(handleResponse)
      .catch(handleError); 
    } catch {
      // ignore write errors
    }
  }
  
 export async function handleResponse(response){
    if(response.ok){
      return response.json()
    }
  
    const error = await response.text()
    throw new Error(error)
  }

  export function handleError(error){
    console.error("Bir hata oluştu")
    throw error;
  }
 
 
  