export const loginMock = async (email, password) => {
    if (email === "teste@teste.com" && password === "senha123") {
        return { token: "mock-token-123" };
    } else {
        throw new Error("Credenciais incorretas");
    }
};