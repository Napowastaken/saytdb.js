export default class Database<V = any> {
    /** @description Represents all content in the database. */
    content: object;

    /** @description Represents the indentation given to the constructor. 4 if not set. */
    indent: number;

    /** @description The path where the content is stored. */
    path: string;

    constructor({ path, indent }: { path: string, indent?: number });

    /**
     * @description Loads the database's content.
     * 
     * **Note:** This module already loads for you, so you won't really need this unless it's a very specific case.
     */
    public load(): void;

    /**
     * @description Save the database's content to the file.
     * 
     * **Note:** This module already saves for you, so you won't really need this unless it's a very specific case.
     */
    public save(): void;

    /** @description Set a key to a specified value, or create one if it doesn't exist. */
    public set(key: string, value: V): void;

    /** @description Get any key from the database. */
    public get(key: string): V | undefined;

    /** @description Return a boolean indicating whether a key exists or not in the database. */
    public has(key: string): boolean;

    /** @description Delete any item from the database. */
    public delete(key: string): void;

    /** @description Clears all the database. This cannot be undone, so be careful! */
    public clear(): void;

    /** @description Get all keys from the database. */
    public keys(): string[];

    /** @description Get all values from the database. */
    public values(): V[];

    /** @description Return a list of items whose value passes a test. */
    public filter(statement: (item: V) => boolean): V[];

    /** @description Return the first item whose value passes a test, or undefined if none pass. */
    public find(statement: (item: V) => boolean): V | undefined;

    /** @description Pushes any item into a list, or create one if it doesn't exist or it's from another type. */
    public push(key: string, item: any): void;

    /** @description Remove any item from a list. */
    public removeFromList(key: string, item: any): void;
}