const fetchNatureData = async () => {
    const response = await fetch('https://run.mocky.io/v3/4b630fbd-25c8-47dd-9755-b06e4ec5735a');
    const data = await response.json();
    return data;
  };
  
  export default fetchNatureData;