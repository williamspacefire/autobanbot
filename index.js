/**
* MIT License
* 
* Copyright (c) 2020 William Spacefire
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

const {Client} = require("discord.js")
const {token, prefix} = require('./config.json')
const client = new Client()

/**
 * Evento que é executado sempre que
 * chega uma nova mensagem no servidor
 * ou no privado do Bot
 */
client.on("message", message => {
    
    /**
     * Se o autor da mensagem for um bot,
     * vamos ignorar
     */
    if (message.author.bot) return
    
    /**
     * Se a mensagem começar com o prefixo
     * o interpretador de comandos é executado.
     * Caso contrário, chamamos o autoban
     */
    if (!message.content.startsWith(prefix)) return;
    
    //removemos o prefixo da mensagem
    const messageBody = message.content.slice(prefix.length);
    
    //Cria uma lista com os argumentos passados na mensagem
    const args = messageBody.split(" ");
    
    //Remove o comando da lista e retorna ele para a variável
    const command = args.shift().toLowerCase();
    
    //Se o comando da mensagem for /ping, respondemos com Pong
    if (command == "ping") {
        message.reply("Pong");
    }
});

//Fazemos login no Discord usando o token do nosso bot
client.login(token);