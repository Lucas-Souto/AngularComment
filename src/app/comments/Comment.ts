export class Comment
{
    author: string;
    content: string;
    liked: boolean;

    constructor(author: string = "fulano123", content: string = "[Sem nada]", liked: boolean = false)
    {
        this.author = author;
        this.content = content;
        this.liked = liked;
    }
}