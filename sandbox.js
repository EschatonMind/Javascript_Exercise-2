const names = ['A', 'B', 'C']
for(let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`
    console.log(html)
}

const bill = (products, tax) => {
    let total = 0
    for(let i = 0; i < products.length; i++){
        total += products[i] = products[i]*tax
    }
    return total
}

console.log(bill([10,20,100],50))

// " This " keyword and Store Objects in Arrays
const Blogs = [
    {titles: 'My dead wife', likes: 30},
    {titles: "I'm a vangaurd ", likes: 20}
]

let user = {

    name: 'Zavala',
    age: 30,
    email: 'zavala@gmail.com',
    location: 'The last city',
    blogs: Blogs,

    Login() {
        console.log("You are logged in")
    },

    Logut() {
        console.log("You are logged out")
    },

    LogBlogs() {
        console.log("You have published these : ")
        this.blogs.forEach(blog => {console.log(blog.titles, blog.likes)});
    }

};

user.LogBlogs()

