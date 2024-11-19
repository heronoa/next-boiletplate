
// Login Test Example - Need to implement the page to test
// import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import LoginPage from "../pages/login"; // Adjust the import based on your file structure
// import { http, HttpResponse } from "msw";
// import { setupServer } from "msw/node";

// const server = setupServer(
//   http.post("/api/login", ({ request }) => {
//     const { usuário, senha } = request.body as {
//       usuário?: string;
//       senha?: string;
//     };

//     if (usuário === "nonexistentuser") {
//       return HttpResponse.json(
//         { success: false, message: "Usuário não encontrado" },
//         { status: 404 },
//       );
//     }

//     if (usuário === "existinguser" && senha === "wrongsenha") {
//       return HttpResponse.json(
//         { success: false, message: "Senha Incorreta" },
//         { status: 401 },
//       );
//     }

//     if (usuário === "existinguser" && senha === "senha") {
//       return HttpResponse.json(
//         { success: false, message: "rate limit exceeded" },
//         { status: 429 },
//       );
//     }

//     return HttpResponse.json({}, { status: 200 });
//   }),
// );

// // Enable request interception.
// beforeAll(() => server.listen());

// // Reset handlers so that each test could alter them
// // without affecting other, unrelated tests.
// afterEach(() => server.resetHandlers());

// // Don't forget to clean up afterwards.
// afterAll(() => server.close());

// describe("Login Page - Success Handlers", () => {
//     test("shows success message when login is successful", async () => {
//         server.use(
//             http.post("/api/login", ({ request }) => {
//                 return HttpResponse.json(
//                     { success: true, message: "login successful" },
//                     { status: 200 },
//                 );
//             }),
//         );
//         render(<LoginPage />);
//         fireEvent.change(screen.getByLabelText(/usuário/i), {
//             target: { value: "existinguser" },
//         });
//         fireEvent.change(screen.getByLabelText(/senha/i), {
//             target: { value: "senha" },
//         });
//         fireEvent.click(screen.getByRole("button", { name: /login/i }));

//         expect(await screen.findByText(/login successful/i)).toBeInTheDocument();
//         await waitFor(() => expect(window.location.pathname).toBe("/dashboard"));
//     });
// })
// describe("Login Page - Error Handers", () => {
//   test("renders login form", () => {
//     render(<LoginPage />);
//     expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
//     expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
//   });

//   test("shows error message when user not found", async () => {
//     server.use(
//       http.post("/api/login", ({ request }) => {
//         return HttpResponse.json(
//           { success: false, message: "user not found" },
//           { status: 404 },
//         );
//       }),
//     );
//     render(<LoginPage />);
//     fireEvent.change(screen.getByLabelText(/usuário/i), {
//       target: { value: "nonexistentuser" },
//     });
//     fireEvent.change(screen.getByLabelText(/senha/i), {
//       target: { value: "senha" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));

//     expect(await screen.findByText(/user not found/i)).toBeInTheDocument();
//   });

//   test("Mostra mensagem de erro em caso de senha incorreta", async () => {
//     server.use(
//       http.post("/api/login", ({ request }) => {
//         return HttpResponse.json(
//           { success: false, message: "incorrect senha" },
//           { status: 404 },
//         );
//       }),
//     );
//     render(<LoginPage />);
//     fireEvent.change(screen.getByLabelText(/usuário/i), {
//       target: { value: "existinguser" },
//     });
//     fireEvent.change(screen.getByLabelText(/senha/i), {
//       target: { value: "wrongsenha" },
//     });
//     fireEvent.click(screen.getByRole("button", { name: /login/i }));

//     expect(await screen.findByText(/senha incorreta/i)).toBeInTheDocument();
//   });

//   test("shows error message for rate limit exceeded", async () => {
//     server.use(
//       http.post("/api/login", ({ request }) => {
//         return HttpResponse.json(
//           { success: false, message: "too much attempts try again later" },
//           { status: 404 },
//         );
//       }),
//     );
//     render(<LoginPage />);
//     fireEvent.change(screen.getByLabelText(/usuário/i), {
//       target: { value: "existinguser" },
//     });
//     fireEvent.change(screen.getByLabelText(/senha/i), {
//       target: { value: "senha" },
//     });

//     for (let i = 0; i < 5; i++) {
//       fireEvent.click(screen.getByRole("button", { name: /login/i }));
//     }

//     expect(await screen.findByText(/limite de requisições atingido. tente mais tarde/i)).toBeInTheDocument();
//   });
// });
