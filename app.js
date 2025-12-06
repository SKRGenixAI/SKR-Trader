// Load assets
fetch('data/assets.json').then(r=>r.json()).then(assets=>{
    const grid=document.getElementById('asset-grid');
    assets.forEach(a=>{
        let div=document.createElement('div');
        div.className='asset-card';
        div.innerText=a.name;
        div.onclick=()=>showBias(a);
        grid.appendChild(div);
    });
});

const tfs=['M5','M15','H1','H4','D1','W1'];

function showBias(asset){
    const b=document.getElementById('bias-grid');
    b.innerHTML='<h2>'+asset.name+'</h2>';
    tfs.forEach(tf=>{
        let row=document.createElement('div');
        row.className='tf-row';
        row.innerHTML=`<span>${tf}</span>
        <button class="bull">Bullish</button>
        <button class="bear">Bearish</button>`;
        const bull=row.querySelector('.bull');
        const bear=row.querySelector('.bear');
        bull.onclick=()=>{bull.classList.add('active');bear.classList.remove('active');};
        bear.onclick=()=>{bear.classList.add('active');bull.classList.remove('active');};
        b.appendChild(row);
    });
}