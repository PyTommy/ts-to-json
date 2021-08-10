// ==========
// Type Utils
// ==========
// type OverrideType<T, R> = Omit<T, keyof R> & R;
// type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// type Require<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// ==========
// Shared Types
// ==========
enum TodoStatus {
	TODO = 'TODO',
	IN_PROGRESS = 'IN_PROGRESS',
	IN_REVIEW = 'IN_REVIEW',
	DONE = 'DONE',
}

type Priority = 'low' | 'medium' | 'high';

type Tag = {
	[key: string]: {
		name: string;
		color: string;
	};
};

// ==========
// Entities
// ==========
type Todo = {
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

type CreateTodoRequest = {
	title: string;
	content: string;
	status?: TodoStatus;
	tags?: Tag[];
	priority?: Priority;
	storyPoint?: number;
};

type UpdateTodoRequest = {
	title?: string;
	content?: string;
	status?: TodoStatus;
	tags?: Tag[];
	priority?: Priority;
	storyPoint?: number;
};
