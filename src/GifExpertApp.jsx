import { useState } from 'react'
import { AddCategory, GifGrid } from './components'
import { randomCategories } from './data/mock';


export const GifExpertApp = () => {

    const randomIndex = Math.floor(Math.random() * randomCategories.length);
    const initialCategory = randomCategories[randomIndex];

    const [categories, setCategories] = useState([initialCategory]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            console.log('Ya existe en las categorias.')
        }
        else {
            console.log(newCategory)
            setCategories(cat => [newCategory, ...categories])
        }
        console.log(categories, newCategory)
    }

    return (
        <>
            <h1>Buscador</h1>
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}

            />
            {
                categories.map(category => {
                    return (
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                })
            }
        </>
    )
}
