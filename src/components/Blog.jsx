import Blogcard from "./Blogcard"

function Blog() {

    const blog = [
        {
            "image": "path/to/flutter-image.jpg",
            "title": "Exploring the Versatility of Flutter",
            "url": "dart1",
            "content": "Flutter, Google’s UI toolkit, has revolutionized the way developers build natively compiled applications for mobile, web, and desktop from a single codebase. Its popularity stems from its expressive and flexible UI components, fast development cycles, and the ability to create visually stunning apps.\n\nWhat makes Flutter unique is its use of the Dart programming language and the \"hot reload\" feature, which allows developers to see changes in real-time. Whether you’re building a chat app, a weather app, or an e-commerce platform, Flutter’s widget-based architecture ensures you have all the tools needed to deliver an engaging user experience.\n\nAs Flutter continues to evolve, it’s becoming a go-to framework for startups and enterprises alike. With robust community support and comprehensive documentation, there’s no limit to what you can achieve with Flutter."
        },
        {
            "image": "path/to/javascript-image.jpg",
            "title": "JavaScript: The Backbone of Modern Web Development",
            "url": "js1",
            "content": "JavaScript has come a long way since its inception, becoming an essential language for web development. From simple scripts that add interactivity to webpages to complex frameworks powering entire applications, JavaScript is the engine behind modern web experiences.\n\nWith frameworks like React, Angular, and Vue.js, JavaScript has simplified the development process for dynamic, responsive, and scalable applications. The rise of Node.js has also extended JavaScript’s reach to server-side development, enabling full-stack solutions using a single language.\n\nWhether you’re a beginner experimenting with DOM manipulation or an expert building sophisticated APIs, JavaScript provides unparalleled flexibility and power. Its vast ecosystem, bolstered by open-source libraries and tools, ensures developers can always find the right solution for their needs."
        }
    ]



    return (
        <section className="text-white mt-[5rem] p-2">
            <div>
                <p className='font-bold text-xl p-2 text-center pacifico-regular'>
                    BLOG
                </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {   
                    blog.map((item, index) => (
                        <Blogcard key={index} image={item.image} title={item.title} content={item.content} url={item.url} state={blog}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Blog