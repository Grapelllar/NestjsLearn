import { readFile, writeFile } from "fs/promises";

export class MessagesRepository{
    async findOne(id: any){
        const contents = await readFile('message.json','utf8');
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async findAll(){
        const contents = await readFile('message.json','utf8');
        const messages = JSON.parse(contents);

        return messages;

    }

    async create(message: String){
        const contents = await readFile('message.json','utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999)

        messages[id] = {id,contents:message};

        await writeFile('message.json', JSON.stringify(messages));
    }
}