

const copyBtn = document.querySelector('.copyBtn');
const input = document.querySelector('#input');
console.log(input);

copyBtn.addEventListener('click', () => {
    input.select();
    document.execCommand('copy');
    copyBtn.innerText = `Copied`;
    setTimeout(() => {
        copyBtn.innerText = "copy";
    }, 5000); 
})
