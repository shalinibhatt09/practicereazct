import React from 'react'
import { Carousel } from 'react-bootstrap'

function Slide() {
  return (
    <>
    <Carousel interval={2000}>
        <Carousel.Item>
           <center><img src="https://m.media-amazon.com/images/I/5191GMw0gmL._UF1000,1000_QL80_.jpg" height="400px" width="600px"></img></center> 
        </Carousel.Item>

         <Carousel.Item>
            <center><img src="https://m.media-amazon.com/images/I/61mhBXHRZAL.jpg" height="400px" width="600px"></img></center>
        </Carousel.Item>

         <Carousel.Item>
           <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnNRWNZtASOeejrdManY8k8dnB8SmyUdfpA&s" height="400px" width="600px"></img></center> 
        </Carousel.Item>

         <Carousel.Item>
            <center><img src="https://www.shutterstock.com/image-vector/ideal-tshirt-designs-clip-art-600nw-2454692119.jpg" height="400px" width="600px"></img></center>
        </Carousel.Item>
    </Carousel>

    
    </>
  )
}

export default Slide