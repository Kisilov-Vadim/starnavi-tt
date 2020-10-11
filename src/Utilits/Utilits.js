export const getData = async (url) => {
  let res = await fetch(url); 

  return res.json();
}

export const postData = async (url, data=[]) => {
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


export const createDate = (date) => {
  let year = date.getFullYear(); 
  let month = date.getMonth().toString();
  let day = date.getDate().toString();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  return `
    ${day.length === 1 ? '0' + day : day}.${month.length === 1 ? '0' + month : month}.${year} 
    ${hours.length === 0 ? '0' + hours : hours}:${minutes.length === 0 ? '0' + minutes : minutes}`
} 