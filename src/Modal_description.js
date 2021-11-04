import React from 'react'
var imagesOfItems= [
    "https://static8.depositphotos.com/1343665/821/i/600/depositphotos_8213644-stock-photo-interior-design-modern-white-furniture.jpg",
    "https://www.nidouillet.com/wp-content/uploads/2016/08/des-meubles.jpg",
    "https://madeinmarseille.net/actualites-marseille/2018/04/commode-meuble-vintage-metropolis-e1524585616709.jpg"
];


class ModalDescription extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Item: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos/5')
      .then(response => response.json())
      .then(json => {
        this.setState({
          Item: json
        })
      })         
          
    }
     
      
    render () {
    if (!this.props.show) {
      return null
    }
    const { Item } = this.state
    console.log(Item)

    return (
      <div className='modal_description' onClick={this.props.onClose}>
        <div
          className='modal_description_content'
          onClick={e => e.stopPropagation()}
        >
          <div className='modal_description_header'>
            <button onClick={this.props.onClose} className='button-description'>
              X
            </button>
          </div>
          <div className='modal_description_body'>
            <div className='wrapper_description'>
              <div className='sub-wrapper-top'>
                <div className='photo_description'>

                    <div className="slideshow_container">
                        <div className="mySlideFade">
                            <img alt="image" src = {imagesOfItems[0]}></img>
                        </div>
                        <div className="mySlideFade">
                        <img alt="image" src = {imagesOfItems[1]}></img>

                        </div>
                        <div className="mySlideFade">
                        <img alt="image" src = {imagesOfItems[2]}></img>

                        </div>
                        <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                        <a className="next" onClick="plusSlides(1)">&#10095;</a>

                    </div>

                   
                  {/* <img

                    alt='image_produit'
                    className='image_description'
                    src={imagesOfItems}

                  ></img> */}
                </div>
                <div className='info_description'>
                  <h3>{Item.title}</h3>
                  <button className='button_description_basket'>
                    Ajouter au panier
                  </button>
                </div>
              </div>
              <div className='sub-wrapper-bottom'>
                <div className='details_description'>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='modal_description_footer'></div>
        </div>
      </div>
    )
  }
}

export default ModalDescription
