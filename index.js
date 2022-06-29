const generatorButton = document.getElementById('generate')
const result = document.getElementById('result')
const copy = document.getElementById('copy')
generatorButton.addEventListener('click', ()=>{
    copy.classList.replace("bi-clipboard-check", "bi-clipboard")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '08c437c219mshf0a82642cb67f8dp1e874bjsn467aaa79bd8c',
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
        }
    };
    
    fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?containsC%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist', options)
        .then(response => response.json())
        .then(response => result.value = response.setup)
        .catch(err => console.error(err));
        copy.addEventListener('click', ()=>{
            copy.classList.replace("bi-clipboard", "bi-clipboard-check")
            const clipboard = string => {
                const element = document.createElement('textarea');
                element.value = string;
                document.body.appendChild(element);
                element.select();
                document.execCommand('copy');
                document.body.removeChild(element);
            };
            clipboard(result.value)
        })
    })