export class Todo {
	id: number;
	text: string;
	isFinished: boolean;

	constructor(id: number, text: string) {
		this.id = id;
		this.text = text;
		this.isFinished = false;
	}

	toggle(): void {
	    this.isFinished = !this.isFinished;
	}
}
