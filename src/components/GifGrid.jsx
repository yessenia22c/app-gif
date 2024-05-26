import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const {images, isLoadig} = useFetchGifs(category);

   
    return (
        <>
            <h3>{category}</h3>
            {
                isLoadig && (<div className="card skeleton">Loading...</div>)
            }
            <div className="card-grid">
                {
                    images.map((image) => {

                        return(
                            <GifItem key={image.id} 
                            {...image}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
