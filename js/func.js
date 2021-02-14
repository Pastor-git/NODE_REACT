// alert("Opar, Opar jesteś zajebisty!!");

const av_salary = 3500;
document.getElementById("getSalary").addEventListener("click",licz);

function licz (e) {
    console.log(e);
    e.preventDefault();

    const salary = document.getElementById("salary").value;
    if (salary >= av_salary) {
        document.getElementById("result").innerText="jest dobrze"
    }
    else {
        document.getElementById("result").innerText="jesteś biedny"
    }
}