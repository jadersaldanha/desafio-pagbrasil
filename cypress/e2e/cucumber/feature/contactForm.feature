Feature: Formulario de contato para usuários da PagBrasil

Scenario: Preencher Formulario Corretamente
Given Usuario está na pagina do Formulario
And Preenche nome, email, empresa, website, phone e inquiry
Then A mensagem de sucesso é exibida

Scenario: Preencher Formulario com dados incorretos
Given Usuario está na pagina do Formulario
And Preenche nome, email, empresa, website, phone e inquiry com dados incorretos
Then Valida a exibição da mensagem de campo inválido

Scenario: Tenta preencher formulario sem dados
Given Usuario está na pagina do Formulario
And Clica em submit sem preencher dados
Then Valida a exibição da mensagem do tooltip