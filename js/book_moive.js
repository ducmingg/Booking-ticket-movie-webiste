const enable__shtime = document.querySelectorAll('.shtime__item');

enable__shtime.forEach(item => {

    item.addEventListener("click", () => {
        enable__shtime.forEach(element => {
            if (element.classList.contains('enable')) {
                element.classList.remove('enable');
            }
        });
        item.classList.toggle('enable');
    });
});

//

const minus_f = document.querySelector('.minus_f');
const minus_s = document.querySelector('.minus_s');
const minus_t = document.querySelector('.minus_t');
const count_f = document.querySelector('.count_f');
const count_s = document.querySelector('.count_s');
const count_t = document.querySelector('.count_t');
const plus_f = document.querySelector('.plus_f');
const plus_s = document.querySelector('.plus_s');
const plus_t = document.querySelector('.plus_t');

// let cf, cs, ct = 0;
// minus_f.addEventListener("click", () => {
//     let isCount = parseInt(count_f.textContent);
//     // count_f.innerHTML = isCount + 1;
//     count_f.innerHTML =cf+1; 
// })

let cf = 0;
let ct = 0;
let cs = 0;
minus_f.addEventListener("click", () => {
    let isCount = parseInt(count_f.textContent)
    if (isCount >= 1) {
        isCount--; // Tăng giá trị của cf lên 1
        count_f.innerHTML = isCount; // Gán giá trị mới của cf vào textContent của count_f
    }
});
minus_s.addEventListener("click", () => {
    let isCount = parseInt(count_s.textContent)
    if (isCount >= 1) {
        isCount--; // Tăng giá trị của cf lên 1
        count_s.innerHTML = isCount; // Gán giá trị mới của cf vào textContent của count_f
    }
}); minus_t.addEventListener("click", () => {
    let isCount = parseInt(count_t.textContent)
    if (isCount >= 1) {
        isCount--; // Tăng giá trị của cf lên 1
        count_t.innerHTML = isCount; // Gán giá trị mới của cf vào textContent của count_f
    }
});


plus_f.addEventListener('click', () => {
    let isCount = parseInt(count_f.textContent)
    if (isCount <= 7) {
        isCount++; // Tăng giá trị của cf lên 1
        count_f.innerHTML = isCount; // Gán giá trị mới của cf vào textContent của count_f
    }
})


plus_s.addEventListener('click', () => {
    let isCount = parseInt(count_s.textContent)
    if (isCount <= 7) {
        isCount++; // Tăng giá trị của cf lên 1
        count_s.innerHTML = isCount; // Gán giá trị mới của cf vào textContent của count_f
    }
})




plus_t.addEventListener('click', () => {
    let isCount = parseInt(count_t.textContent)
    if (isCount <= 7) {
        isCount++; // Tăng giá trị của cf lên 1
        count_t.innerHTML = isCount; // Gán giá trị mới của cf vào textContent của count_f
    }
})

const popup = document.querySelector('#popup__wrapper');
popup.style.display = "none"


let count;
const btn_plus = document.querySelectorAll('.count :nth-child(3)');
btn_plus.forEach(element => {
    element.addEventListener("click", () => {
        count = parseInt(count_f.textContent) + parseInt(count_s.textContent) + parseInt(count_t.textContent);
        if(count > 8) {
            popup.style.display = "block";
            
        }
    })
});

