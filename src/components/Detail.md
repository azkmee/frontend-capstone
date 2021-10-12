
```jsx
const Demo = () => {

    const toShow = {
        "name": "Arthur Weasley",
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "06-02-1950",
        "yearOfBirth": 1950,
        "ancestry": "pure-blood",
    }
    return(
        <Detail 
            imageUrl="http://hp-api.herokuapp.com/images/arthur.jpg"
            toShow={toShow}/>
    )
}

<Demo/>



```