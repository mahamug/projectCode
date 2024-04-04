import React,{useState} from "react";


const AppContext = React.createContext();


export const AppProvider = ({ children }) =>{
    //All states
    const [Watch,setWatch] = useState("Value dikhao");
    const [Img,setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbJgoqVZrAgEEIcnIX3LVq1yolhkvynHSSQ&usqp=CAU'
    );
    
    const [galleryPhoto, setGalleryPhoto] = useState();
    
    //storing functions
    const storeWatch =(sw) =>{
        setWatch(sw);
    }
    const storeImg =(si) =>{
        setImg(si);
    }
    const storeGalleryPhoto =(sg) =>{
        setGalleryPhoto(sg);
    }
    


    return <AppContext.Provider
    value={{
        Watch,
        storeWatch,
        Img,
        storeImg,
        galleryPhoto,
        storeGalleryPhoto
    }}
    >
        {children}
    </AppContext.Provider>
}
export default AppContext;