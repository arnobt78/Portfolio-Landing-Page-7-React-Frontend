// Contact form submissions: name, email, message. Frontend Footer posts here when using Sanity client.
export default {
    name:'contact',
    title:'Contact',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'message',
            title:'Message',
            type:'text'
        }
    ]
}