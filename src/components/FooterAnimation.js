// Beautiful Aurora Footer Lights
// by
// Amit Ashok Kamble
// @amyth91
// https://codepen.io/amyth91

import React, { Component } from "react";
import styled from "styled-components";
export default class FooterAnimation extends Component {
  render() {
    return (
      <AuroraFooter id="wrap">
        <article id="lightings">
          <section className="auro-section" id="one">
            <section className="auro-section" id="two">
              <section className="auro-section" id="three">
                <section className="auro-section" id="four">
                  <section className="auro-section" id="five"></section>
                </section>
              </section>
            </section>
          </section>
        </article>
      </AuroraFooter>
    );
  }
}

const AuroraFooter = styled.article`
  #wrap {
    width: 100%;
    height: 100%;
    position: relative;

    margin: 0 auto 0 auto;
    overflow: hidden;
  }

  #lightings {
    bottom: 0;
    position: relative;
    width: 100%;
  }

  .auro-section {
    /*border-radius*/
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    height: 0px;
    width: 100%;
    position: relative;
    margin: auto;
  }

  #one {
    /*animation*/
    -webkit-animation: one 5s ease-in-out infinite alternate;
    -moz-animation: one 5s ease-in-out infinite alternate;
    -ms-animation: one 5s ease-in-out infinite alternate;
    -o-animation: one 5s ease-in-out infinite alternate;
    animation: one 5s ease-in-out infinite alternate;
  }
  @-webkit-keyframes one {
    from {
      -webkit-box-shadow: 0 0 250px 20px #473c78;
    }

    to {
      -webkit-box-shadow: 0 0 100px 15px #f72a3b;
    }
  }
  @-moz-keyframes one {
    from {
      -moz-box-shadow: 0 0 250px 20px #473c78;
    }

    to {
      -moz-box-shadow: 0 0 100px 15px #f72a3b;
    }
  }
  @-o-keyframes one {
    from {
      -o-box-shadow: 0 0 250px 20px #473c78;
    }

    to {
      -o-box-shadow: 0 0 100px 15px #f72a3b;
    }
  }

  @keyframes one {
    from {
      box-shadow: 0 0 250px 20px #473c78;
    }

    to {
      box-shadow: 0 0 100px 15px #f72a3b;
    }
  }

  #two {
    width: 90%;
    /*animation*/
    -webkit-animation: two 4s ease-in-out infinite alternate;
    -moz-animation: two 4s ease-in-out infinite alternate;
    -ms-animation: two 4s ease-in-out infinite alternate;
    -o-animation: two 4s ease-in-out infinite alternate;
    animation: two 4s ease-in-out infinite alternate;
  }
  @-webkit-keyframes two {
    from {
      -webkit-box-shadow: 0 0 250px 20px #18c499;
    }

    to {
      -webkit-box-shadow: 0 0 100px 15px #d8f05e;
    }
  }
  @-moz-keyframes two {
    from {
      -moz-box-shadow: 0 0 250px 20px #18c499;
    }

    to {
      -moz-box-shadow: 0 0 100px 15px #d8f05e;
    }
  }
  @-o-keyframes two {
    from {
      -o-box-shadow: 0 0 250px 20px #18c499;
    }

    to {
      -o-box-shadow: 0 0 100px 15px #d8f05e;
    }
  }

  @keyframes two {
    from {
      box-shadow: 0 0 250px 20px #18c499;
    }

    to {
      box-shadow: 0 0 100px 15px #d8f05e;
    }
  }

  #three {
    width: 80%;
    /*animation*/
    -webkit-animation: three 3s ease-in-out infinite alternate;
    -moz-animation: three 3s ease-in-out infinite alternate;
    -ms-animation: three 3s ease-in-out infinite alternate;
    -o-animation: three 3s ease-in-out infinite alternate;
    animation: three 3s ease-in-out infinite alternate;
  }
  @-webkit-keyframes three {
    from {
      -webkit-box-shadow: 0 0 250px 20px #ffdd00;
    }

    to {
      -webkit-box-shadow: 0 0 100px 15px #3e33ff;
    }
  }
  @-moz-keyframes three {
    from {
      -moz-box-shadow: 0 0 250px 20px #ffdd00;
    }

    to {
      -moz-box-shadow: 0 0 100px 15px #3e33ff;
    }
  }
  @-o-keyframes three {
    from {
      -o-box-shadow: 0 0 250px 20px #ffdd00;
    }

    to {
      -o-box-shadow: 0 0 100px 15px #3e33ff;
    }
  }

  @keyframes three {
    from {
      box-shadow: 0 0 250px 20px #ffdd00;
    }

    to {
      box-shadow: 0 0 100px 15px #3e33ff;
    }
  }

  #four {
    width: 70%;
    /*animation*/
    -webkit-animation: four 2s ease-in-out infinite alternate;
    -moz-animation: four 2s ease-in-out infinite alternate;
    -ms-animation: four 2s ease-in-out infinite alternate;
    -o-animation: four 2s ease-in-out infinite alternate;
    animation: four 2s ease-in-out infinite alternate;
  }
  @-webkit-keyframes four {
    from {
      -webkit-box-shadow: 0 0 250px 20px #781848;
    }

    to {
      -webkit-box-shadow: 0 0 100px 15px #f2bbe9;
    }
  }
  @-moz-keyframes four {
    from {
      -moz-box-shadow: 0 0 250px 20px #781848;
    }

    to {
      -moz-box-shadow: 0 0 100px 15px #f2bbe9;
    }
  }
  @-o-keyframes four {
    from {
      -o-box-shadow: 0 0 250px 20px #781848;
    }

    to {
      -o-box-shadow: 0 0 100px 15px #f2bbe9;
    }
  }

  @keyframes four {
    from {
      shadow: 0 0 250px 20px #781848;
    }

    to {
      shadow: 0 0 100px 15px #f2bbe9;
    }
  }

  #five {
    width: 60%;
    /*animation*/
    -webkit-animation: five 1s ease-in-out infinite alternate;
    -moz-animation: five 1s ease-in-out infinite alternate;
    -ms-animation: five 1s ease-in-out infinite alternate;
    -o-animation: five 1s ease-in-out infinite alternate;
    animation: five 1s ease-in-out infinite alternate;
  }
  @-webkit-keyframes five {
    from {
      -webkit-box-shadow: 0 0 250px 20px #42f2a1;
    }

    to {
      -webkit-box-shadow: 0 0 100px 15px #f4f6ad;
    }
  }
  @-moz-keyframes five {
    from {
      -moz-box-shadow: 0 0 250px 20px #42f2a1;
    }

    to {
      -moz-box-shadow: 0 0 100px 15px #f4f6ad;
    }
  }
  @-o-keyframes five {
    from {
      -o-box-shadow: 0 0 250px 20px #42f2a1;
    }

    to {
      -o-box-shadow: 0 0 100px 15px #f4f6ad;
    }
  }

  @keyframes five {
    from {
      box-shadow: 0 0 250px 20px #42f2a1;
    }

    to {
      box-shadow: 0 0 100px 15px #f4f6ad;
    }
  }
`;
