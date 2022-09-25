class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    setDogsHtml(){
        const {name, avatar, age, bio} = this

        return `
            <img src="${avatar}" id="main-image">
            <div class="texts">
                <h3>${name}, ${age}</h3>
                <p>${bio}</p>
            </div>
        `
    }
}

export default Dog