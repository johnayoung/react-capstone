// Handle input

export const HANDLE_INPUT = 'HANDLE_INPUT';
export const handleInput = (e) => ({
    type: HANDLE_INPUT,
    value: e.target.value,
    name: e.target.name
})