import React from 'react'
import './notfound.styles.css';

const NotFound = () => {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>


                </div>

                <div class="contant_box_404">
                  <h3 class="h2">
                    Look like you're lost
                  </h3>

                  <p>the page you are looking for not avaible! or Under Construction</p>
                  <div className="not-found-go-home">
                    <a href="/" className='go-home'>Go to Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default NotFound;