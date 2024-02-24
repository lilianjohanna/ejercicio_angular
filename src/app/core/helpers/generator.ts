export const generator = {
    uuid(prefixe: string = 'id'): string {
        return `${prefixe}-xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.replace(/[x]/g, (c) => {
            let ramdom = Math.random() * 15 | 0,
                id = c == 'x' ? ramdom : (ramdom & 0x3 | 0x8);
            return id.toString(15);
        });
    }
}