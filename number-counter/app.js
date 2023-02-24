let count = 0
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);

btns.forEach(function(item){
    console.log(item);
    item.addEventListener('click',function(e){
        // checking which button clicked by user
        console.log(e.currentTarget.classList);

        const styles = e.currentTarget.classList;
        // put condition for getting button active
        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count>0){
            value.style.color = 'green';
        }
        else if(count<0){
            value.style.color = 'red';
        }
        else {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})
