const inputTags = document.querySelectorAll(".controls");

inputTags.forEach(el=>{
    el.addEventListener('input', ()=>{
        let valPx = el.dataset.sizing || '';
        document.documentElement.style.setProperty(
          `--${el.id}`,
          `${el.value}px`
        );
    });
});

