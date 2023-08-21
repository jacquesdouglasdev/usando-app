import { NextResponse } from "next/server";

// request: NextRequest
export function GET() {
    return NextResponse.json([
        { id: 1, nome: 'PC Gamer', preco: 5489.0, data: new Date() },
        { id: 2, nome: 'Notebook', preco: 3499.0, data: new Date() },
        { id: 3, nome: 'Smartphone', preco: 1599.0, data: new Date() },
        { id: 4, nome: 'Tablet', preco: 899.0, data: new Date() },
        { id: 5, nome: 'Teclado', preco: 99.0, data: new Date() },
        { id: 6, nome: 'Mouse', preco: 59.0, data: new Date() },
        { id: 7, nome: 'Monitor', preco: 799.0, data: new Date() },
        { id: 8, nome: 'Impressora', preco: 399.0, data: new Date() },
    ])
}

