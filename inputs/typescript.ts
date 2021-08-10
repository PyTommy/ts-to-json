// ==========
// Shared Types
// ==========
export enum TodoStatus {
	TODO = 'TODO',
	IN_PROGRESS = 'IN_PROGRESS',
	IN_REVIEW = 'IN_REVIEW',
	DONE = 'DONE',
}

export type Priority = 'low' | 'medium' | 'high';

export type Tag = {
	[key: string]: {
		name: string;
		color: string;
	};
};

// ==========
// Entities
// ==========
export type Todo = {
	// Basics
	id: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;
	deleted: boolean;

	// Required
	title: string;
	content: string;
	status: TodoStatus;
	tags: Tag[];

	// Optional
	priority?: Priority;
	storyPoint?: number;
};

export type CreateTodoRequest = {
	title: string;
	content: string;
	status?: TodoStatus;
	tags?: Tag[];
	priority?: Priority;
	storyPoint?: number;
};

export type UpdateTodoRequest = {
	title?: string;
	content?: string;
	status?: TodoStatus;
	tags?: Tag[];
	priority?: Priority;
	storyPoint?: number;
};

export type PartialTest = Partial<CreateTodoRequest>;
export type OmitTest = Omit<CreateTodoRequest, 'content'>;

export type RequiredTest = Required<PartialTest>;
