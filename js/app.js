const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpans = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 3000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 3500);
    });
});

/*contact*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});