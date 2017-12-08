export class Post {
    public title: string;
    public description: string;

    constructor(title: string = "", descr: string = "") {
        this.title = title;
        this.description = descr;
    }
}