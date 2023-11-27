let root  = document.getElementById("root")

let information = {
    type: "img",
    props: {
        alt : "Click me",
        src: "1.jpg"
    },


}



function customRender(information, root){
      let domElement = document.createElement(information.type)
  
      for (const prop in information.props) {
     
        domElement.setAttribute(prop, information.props[prop])
        domElement.setAttribute(prop, information.props[prop])
      }
      root.appendChild(domElement)
}

customRender(information,root)