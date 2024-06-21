import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

export const Home = () => {
    
    const { data, isLoading } = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
        },
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    
    return(
        <div>
            <h1>{data?.fact}</h1>
        </div>
    )
}