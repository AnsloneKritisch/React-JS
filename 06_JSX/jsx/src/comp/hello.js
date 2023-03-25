import React from 'react'

// using jsx 

const Hello = ( ) => {

    return(
        <div>
         <h1>Hello Anshu</h1>
        </div>
    )

    
}

// Without using jsx

const Para = ( ) => {

    return React.createElement(
        'div',null , 'Hello Anshu <br> <h1>Hello Anshu</h1>',

         React.createElement('h1',null , 'Hello Anshu'),

         React.createElement('div',{id: 'hello', className: 'dummyclass'} , 'Hello Anshu')
         
         
         
         );


}

export { Hello, Para };