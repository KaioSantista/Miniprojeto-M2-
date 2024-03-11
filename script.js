class Jogos{
    constructor()
    {
        this.id=1 ;
        this.arrayjogos=[];
    }
    salvar(){
        let jogos= this.lerDados();
        if(this.validardados(jogos)){
            this.adicionar(jogos);
        }
        console.log(this.arrayjogos);
        this.listaTabela();
        this.cancelar();


    }
    adicionar(jogos){
        this.arrayjogos.push(jogos);
        this.id++

    }
    lerDados(){
        let jogos=[];
        jogos.id=this.id
        jogos.nomeJogo=document.getElementById('Jogo1').value;
        jogos.genero=document.getElementById('genero').value;
        jogos.preco=document.getElementById('preco1').value;

        return jogos;
    }
    validardados(jogos){
        let msg='';
       if(jogos.nomeJogo==''){
          msg+= '- Informe o nome do jogo\n';
       }
       if(jogos.genero   ==''){
        msg+= '- Informe o genero do jogo\n';
     }
     if(jogos.preco==''){
        msg+= '- Informe o valor do jogo\n';
     }
     if(msg !=''){
        alert(msg);
        return false
        
     }
     return true;
    }
    listaTabela(){
        let tbody=document.getElementById('linhastabela');
        linhastabela.innerText='';
        for(let i=0;i < this.arrayjogos.length; i++)
        {
            let tr = linhastabela.insertRow();

            let td_id=tr.insertCell();
            let td_nome=tr.insertCell();
            let td_genero=tr.insertCell();
            let td_valor=tr.insertCell();
            let td_acoes=tr.insertCell();

            td_id.innerText=this.arrayjogos[i].id;
            td_nome.innerText=this.arrayjogos[i].nomeJogo;
            td_genero.innerText=this.arrayjogos[i].genero;
            td_valor.innerText=this.arrayjogos[i].preco;
            
           let imgedit=document.createElement('img');
           imgedit.src='icons8-editar-50.png';
           let imgdel=document.createElement('img');
           imgdel.src='icons8-excluir-lixeira-50.png'
           td_acoes.appendChild(imgdel);

           td_acoes.appendChild(imgedit);

        }
    }
    cancelar(){
           document.getElementById('Jogo1').value='';
           document.getElementById('genero').value='';
           document.getElementById('preco1').value='';
           
           

    }
    
}
var jogos= new Jogos;