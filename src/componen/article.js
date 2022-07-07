import baner from '../image/banner.png';
import './style.css'

function Article()  {
    return(
        <>
        <section class="section">
            <div class="container is-fluid has-background-grey-lighter">
            <div class="columns is-multiline">
                    <div class="column is-three-quarters">
                        <img class="img-baner" src={baner} height="28" alt="logo">
                            </img>
                    </div>
                    
                    <div class="column">
                        <div className='text'>
                        <h2 className='text-content'>
                            WAGO
                        </h2>
                        <p className="text-two">
                            I'M POSSIBLE
                        </p>
                        <p className="text-three">
                            Love powers all.The Sokoku X Ronaldo collab is here.
                        </p>
                        </div>
                    </div>
                    
                   
            </div>
            </div>


        </section>
        
    </> 
    )
};

export default Article;