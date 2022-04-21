function calculate(){
        let balances=document.getElementsByClassName("balances")
  
        let newbalances=document.getElementsByClassName("newBal")
    
        for(let i=0;i<5;i++){
            balances[i].value=Number(balances[i].value)

            if(balances[i].value>200000)
            {
                newbalances[i].value=Number(balances[i].value)+Number(balances[i].value)*0.1;
                newbalances[i].value=newbalances[i].value-newbalances[i].value*0.002;
            }
            else if(balances[i].value>100000)
            {
                newbalances[i].value=Number(balances[i].value)+Number(balances[i].value)*0.05;
                newbalances[i].value=newbalances[i].value-newbalances[i].value*0.0005;
            }
            else if(balances[i].value<=100000)
            {
                newbalances[i].value=Number(balances[i].value)+Number(balances[i].value)*0.03;
            }
        }
    }