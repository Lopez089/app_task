import { FormEvent } from "react";

export interface formNewTask {
    title: string;
    labelTask: string;
    placehoderTask: string;
    labelFolder: string;
    placehoderFolder: string;
    submitButton: string;
    createSuccess: string;
    createLoading: string,
    inputEmpyError: string

}

export interface formValue {
    valueTask: string | null,
    valueFolder: string | null;
}

export interface CformNewTask {
    data: formNewTask;
    handleSubmit: (e: FormEvent) => void;
    state: 'idle' | 'loading' | 'success' | 'error'
    onChange: formValue
}