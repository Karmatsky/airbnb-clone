import { ResultsList } from "./results/ResultsList";

export default async function Page () {
    const res = await fetch('http://localhost:3000/api/search');
    const data = await res.json();
    return (
        <>
        <div className="flex items-center justify-center w-screen bg-cover bg-center h-24">
            <button className="rounded-lg">Browse Stays</button>
        </div>
            <ResultsList data={data} />
        </>
    )
}