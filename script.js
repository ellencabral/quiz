let questions = [
    {
        title: "Pergunta 1",
        option: [
            "A) opção 1", 
            "B) opção 2",
            "C) opção 3",
            "D) opção 4"
        ],
    },
    {
        title: "Pergunta 2",
        option: [
            "A) opção 1", 
            "B) opção 2",
            "C) opção 3",
            "D) opção 4"
        ],
    },
    {
        title: "Pergunta 3",
        option: [
            "A) opção 1", 
            "B) opção 2",
            "C) opção 3",
            "D) opção 4"
        ],
    },
    {
        title: "Pergunta 4",
        option: [
            "A) opção 1", 
            "B) opção 2",
            "C) opção 3",
            "D) opção 4"
        ],
    }
]

var questionsContainer = document.querySelector('ol')

for(let i = 0; i < questions.length; i++) {
    console.log(questions[i].title)

    let questionContainer = document.createElement('li') 
    let title = document.createElement('h3')
    let textTitle = document.createTextNode(questions[i].title)

    title.appendChild(textTitle)
    questionContainer.appendChild(title)

    for(let j = 0; j < questions[i].option.length; j++) {
        console.log(questions[i].option[j])

        let optionContainer = document.createElement('div')

        let input = document.createElement('input')
        input.setAttribute('type','radio')

        let inputId = "question-" + i + "-" + j
        let inputName = "question-" + i
        input.setAttribute('id', inputId)
        input.setAttribute('name', inputName)

        let option = document.createElement('label')

        option.setAttribute('for', inputId)
        let textOption = document.createTextNode(questions[i].option[j])

        option.appendChild(textOption)
        optionContainer.appendChild(input)
        optionContainer.appendChild(option)

        questionContainer.appendChild(optionContainer)
    }
    
    questionsContainer.appendChild(questionContainer)
}