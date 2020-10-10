export const getData = async (url) => {
  let res = await fetch(url); 

  return res.json();
}

export const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

export const createGameArea = (area) => {
  let res = []; 
  area = Math.pow(area, 2);
  
  for (let i = 0; i < area; i++) {
    res.push(i);
  }

  return res; 
}