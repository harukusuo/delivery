export class User {
    id: string;
    name: string;
    email: string;
    senha: string; // Password
    saldo: string; // Balance (stored as string in the API)

    constructor(id: string, name: string, email: string, senha: string, saldo: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.senha = senha;
        this.saldo = saldo;
    }

    static fromJson(data: any): User {
        return new User(data.id, data.name, data.email, data.senha, data.saldo);
    }
}