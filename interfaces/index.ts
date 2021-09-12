export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export type Error = string | undefined | null;

export type ReduxStatus = {
    status: Status;
    error: Error;
};

export interface CategoryItem {
    id: string;
    name: string;
}

export interface LinkItem {
    id: number;
    name: string;
    groupId: string;
    link: string;
}
