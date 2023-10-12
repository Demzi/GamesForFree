import axios from 'axios';
export async function fetchData(url) {

    const options = {
      method: 'GET',
      url: url,
      params: {
        tag: '3d.mmorpg.fantasy.pvp',
        platform: 'pc'
      },
      headers: {
        'X-RapidAPI-Key': '018df56584msh9367e6989878555p1a6e1ajsnb9df65f25416',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
    } catch (error) {
        console.error(error);
    }
  }