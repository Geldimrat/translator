let entered_word,
    translate_btn,
    input_word,
    translated_word,
    transed_word,
    input_word_text,
    trans_word_text,
    words = [
        {
            name_en: "one",
            name_sp: "und"
        },
        {
            name_en: "two",
            name_sp: "dos"
        },
        {
            name_en: "three",
            name_sp: "tres"
        },
        {
            name_en: "four",
            name_sp: "cuatro"
        },
        {
            name_en: "five",
            name_sp: "cinco"
        },
        {
            name_en: "six",
            name_sp: "seis"
        },
        {
            name_en: "seven",
            name_sp: "siete"
        },
        {
            name_en: "eight",
            name_sp: "ocho"
        },
        {
            name_en: "nine",
            name_sp: "nueve"
        },
        {
            name_en: "ten",
            name_sp: "diez"
        },
        {
            name_en: "monday",
            name_sp: "lunes"
        },
        {
            name_en: "tuesday",
            name_sp: "martes"
        },
        {
            name_en: "wednesday",
            name_sp: "miércoles"
        },
        {
            name_en: "thursday",
            name_sp: "Jueves"
        },
        {
            name_en: "friday",
            name_sp: "viernes"
        },
        {
            name_en: "saturday",
            name_sp: "sábado"
        },
        {
            name_en: "sunday",
            name_sp: "domingo"
        },
        {
            name_en: "january",
            name_sp: "domingo"
        },
        {
            name_en: "february",
            name_sp: "febrero"
        },
        {
            name_en: "march",
            name_sp: "marzo"
        },
        {
            name_en: "april",
            name_sp: "abril"
        },
        {
            name_en: "may",
            name_sp: "mayo"
        },
        {
            name_en: "june",
            name_sp: "junio"
        },
        {
            name_en: "july",
            name_sp: "julio"
        },
        {
            name_en: "august",
            name_sp: "agosto"
        },
        {
            name_en: "September",
            name_sp: "Septiembre"
        },
        {
            name_en: "October",
            name_sp: "Octubre"
        },
        {
            name_en: "November",
            name_sp: "Noviembre"
        },
        {
            name_en: "December",
            name_sp: "Diciembre"
        },
        {
            name_en: "red",
            name_sp: "rojo"
        },
        {
            name_en: "blue",
            name_sp: "azul"
        },
        {
            name_en: "yellow",
            name_sp: "Amarillo"
        },
        {
            name_en: "Green",
            name_sp: "Verde"
        },
        {
            name_en: "White",
            name_sp: "Blanco"
        },
        {
            name_en: "Black",
            name_sp: "Negro"
        },
        {
            name_en: "hello",
            name_sp: "hola"
        },
        {
            name_en: "how",
            name_sp: "cómo"
        },
        {
            name_en: "where",
            name_sp: "dónde"
        },
        {
            name_en: "what",
            name_sp: "qué"
        },
        {
            name_en: "which",
            name_sp: "cual"
        },
        {
            name_en: "good",
            name_sp: "Buena"
        },
        {
            name_en: "english",
            name_sp: "inglesa"
        },
        {
            name_en: "God",
            name_sp: "Dios"
        },
        {
            name_en: "pray",
            name_sp: "orar"
        },
        {
            name_en: "believe",
            name_sp: "creer"
        },
    ];


entered_word = document.getElementById('entered_word')
translate_btn = document.getElementById('translate_btn')

input_word_text = document.getElementById('input_word')
trans_word_text = document.getElementById("tarnsed_word")


function search_fn() {
    words.forEach(e => {
        if (e.name_en.toUpperCase() == entered_word.value.toUpperCase() || e.name_sp.toUpperCase() == entered_word.value.toUpperCase()) {
            transed_word = e
        }
    })

    if (transed_word.name_en == entered_word.value) {
        input_word = transed_word.name_en
    } else {
        input_word = transed_word.name_sp
    }

    if (transed_word.name_sp == entered_word.value) {
        translated_word = transed_word.name_en
    } else {
        translated_word = transed_word.name_sp
    }


    input_word_text.innerHTML = input_word
    trans_word_text.innerHTML = translated_word


    entered_word.value = ''
}


translate_btn.addEventListener('click', search_fn)
entered_word.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        search_fn();
    }
})